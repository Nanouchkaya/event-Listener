// Dependances
const bcrypt = require('bcrypt');
const jwToken = require('jsonwebtoken');

// Models
const User = require('../models/User');

// Utils functions
const checkEmail = require('../utils/functions').checkEmail;

class UserController {

  /**
   * Check authentication
   * @param {object} request
   * @param {object} response
   */
  static checkAuth(request, response) {
    let result;
    
    if (request.headers.authorization) {
      const token = request.headers.authorization.split(' ')[1];

      try {
        result = jwToken.verify(
          token,
          process.env.APP_KEY,
          { expiresIn: '2d' },
        );

        User.find(
          result.userId,
          (result) => {
  
            response.status(200);
            if (result.rowMatch) {
              
              response.json(result);
            } else {
  
              response.json({
                status: "User not found",
              });
            }
          });
      } catch (error) {

        throw new Error(error);
      }
    } else {
      
      response.status(401).send({ 
        error: true,
        errorMessage: 'Erreur d\'authentification. Token manquant.',
      });
    }
  }

  /**
   * Create an account
   * @param {object} request
   * @param {object} response
   */
  static add(request, response) {
    const data = request.body.data;

    let errors = [];

    // check if all fields are correct
    if (!(data.pseudo && data.email &&
          data.password && data.confirmPassword &&
          (typeof data.notifNewEvent === 'boolean') &&
          (typeof data.notifNewUpdate === 'boolean'))) {

      errors.push('Tous les champs ne sont pas remplis');
    } else {

      if (!(checkEmail(data.email))) {
        errors.push('L\'adresse email n\'est pas correct');
      }

      if (data.pseudo.trim().length < 4) {
        errors.push('Le pseudo doit contenir au minimum 4 caractères');
      }

      if (data.password.trim().length < 6) {
        errors.push('Le mot de passe doit contenir au minimum 6 caractères');
      }
      if (data.password.trim() !== data.confirmPassword.trim()) {
        errors.push('Les mots de passe ne correspondent pas');
      }
    }

    if (errors.length < 1) {
      
      User.checkUserByEmail(data.email, (result) => {
        // Check if user doesn't exist
        if (!result.rowMatch) {
  
          // Hash the password (use dep bcrypt)
          data.password = bcrypt.hashSync(data.password, 10);
          
          User.create(
            data,
            (result) => {
  
            response.status(200).json(result);
          });
        } else {
  
          errors.push('L\'email est déjà utilisé');
        
          response.status(401).json({
            error: true,
            errorMessages: errors,
          });
        }
      });
    } else {
  
      response.status(401).json({
        error: true,
        errorMessages: errors,
      });
    }
  }
  /**
   * Connection
   * @param {object} request
   * @param {object} response
   */
  static connect(request, response) {
    const data = request.body.data;

    let errors = [];
    if (!(data.email && (data.email.length > 0) && data.password && (data.password.length > 0))) {
      errors.push('Tous les champs ne sont pas rempli')
    }

    if (errors < 1) {
      
      User.checkUserByEmail(
        data.email,
        (result) => {
  
        if (result.rowMatch) {
          const { password: hashedPassword } = result.data;
          const checkPassword = bcrypt.compareSync(data.password, hashedPassword);
          
          if (checkPassword) {
            const token = jwToken.sign(
              { userId: result.data.id }, 
              process.env.APP_KEY,
              { expiresIn: '2d' });
  
            response.status(200).json({
              error: false,
              result,
              token,
            });
            
          } else {
  
            response.status(401).json({
              error: true,
              errorMessage: "Le mot de passe ou l'email est incorrect",
            });
          }
        } else {
  
          response.status(401).json({
            error: true,
            errorMessage: "Le mot de passe ou l'email est incorrect",
          });
        }
      });
    } else {

      response.status(401).json({
        error: true,
        errorMessage: errors,
      });
    }
  }

  /**
   * Disconnect
   * @param {object} request
   * @param {object} response
   */
  static disconnect(request, response) {

    response.status(200).json({
      error: false,
      successMessage: 'Déconnecter avec success',
    })
  }

  /**
   * Find and get specific user
   * @param {object} request
   * @param {object} response
   */
  static getUser(request, response) {
    const { userId } = request.params;

    if (isNaN(userId)) {

      response.status(200);
      response.json({
        status: "Bad data received"
      });
    } else {
      
      User.find(
        userId,
        (result) => {

          response.status(200);
          if (result.rowMatch) {
            
            response.json({
              status: "Success",
              result,
            });
          } else {

            response.json({
              status: "User not found",
            });
          }
        });
    }
  }

  /**
   * Delete specific user
   * @param {object} request
   * @param {object} response
   */
   static deleteAccount(request, response) {
    const { userId } = request.params;

    if (isNaN(userId)) {

      response.status(200);
      response.json({
        status: "Bad data received"
      });
    } else {
    
      User.delete(
        userId,
        (result) => {

          response.status(200);
          if (result.rowMatch) {
            response.json({
              status: "Success",
            });
          } else {
            
            response.json({
              status: "User not found",
            });
          }
        });
    }
  }

  /**
   * Update specific user
   * @param {object} request
   * @param {object} response
   */
  static updateAccount(request, response) {
    const data = request.body.data;
    const { userId } = request.params;

    let errors = [];

    // check if all fields are correct
    if (!(data.fistname && data.fistname.trim().length < 1) &&
        !(data.lastname && data.lastname.trim().length < 1) &&
        !(data.email && data.email.trim().length < 1) &&
        !(typeof data.notifNewEvent === 'boolean') &&
        !(typeof data.notifNewUpdate === 'boolean')) {

      errors.push('Tous les champs ne sont pas remplis');
    } else {

      if (!(checkEmail(data.email))) {
        errors.push('L\'adresse email n\'est pas correct');
      }
    }

    let editPassword = false;
    
    if ((data.password && data.password.trim().length > 6)) {
      if ((data.confirmPassword && (data.password === data.confirmPassword))) {
        // Hash the password (use dep bcrypt)
        data.password = bcrypt.hashSync(data.password, 10);
        editPassword = true;
      } else {
        errors.push('Les mots de passe ne correspondent pas');
      }
    }

    let token;
    if (request.body.headers && request.body.headers.Authorization) {
      token = request.body.headers.Authorization.split(' ')[1];
    } else {
      errors.push('Vous n\'ête pas autorisé à effectuer cette action');
    }

    if (errors.length < 1) {

      jwToken.verify(
        token,
        process.env.APP_KEY,
        { expiresIn: '2d' },

        (error) => {
          if (error) {
            response.status(401).json({
              error: true,
              errorMessage: 'Vous n\'ête pas autorisé à effectuer cette action',
            });
          } else {

            User.update(
              data,
              userId,
              editPassword,
              (result) => {
                
                response.status(200);
                response.json({
                  error: false,
                  successMessage: 'Vos informations ont bien été modifié',
                });
              })
          }

        }
      )
    } else {
      response.status(401).json({
        error: true,
        errorMessage: errors,
      })
    }
  }
};

module.exports = UserController;
