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
    if (!(data.pseudo.trim() < 1) &&
        !(data.email.trim() < 1) &&
        !(data.password.trim() < 1) &&
        !(data.confirmPassword.trim() < 1) &&
        !(typeof data.notifNewEvent === 'boolean') &&
        !(typeof data.notifNewUpdate === 'boolean')) {

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
  
            response.status(200);
            response.json(result);
          });
        } else {
  
          errors.push('L\'email est déjà utilisé');
        
          response.status(200);
          response.json({
            error: true,
            errorMessages: errors,
          });
        }
      });
    } else {
  
      response.status(200);
      response.json({
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

    if (checkEmail(data.email) && data.password) {

      // Check email and get this user if exist
      User.checkUserByEmail(
        data.email,
        (result) => {

        if (result.rowMatch) {
          const { password: hashedPassword } = result.data;
          const checkPassword = bcrypt.compareSync(data.password, hashedPassword);
          
          if (checkPassword) {
            const payload = { userId: result.data.id };
            const options = { expiresIn: '2d' };
            const token = jwToken.sign(payload, process.env.APP_KEY, options);

            response.json({
              error: false,
              result,
              token,
            });
            
          } else {

            response.status(200);
            response.json({
              error: true,
              errorMessage: "Le mot de passe ou l'email est incorrect"
            });
          }
        } else {

          response.status(200);
          response.json({
            error: true,
            errorMessage: "Le mot de passe ou l'email est incorrect"
          });
        }
      });

    } else {

      response.status(401);
      response.json({
        error: true,
        status: "Bad data received"
      });
    }
  }

  /**
   * Disconnect
   * @param {object} request
   * @param {object} response
   */
  static disconnect(request, response) {
    const session = true; // request.session

    response.status(200);
    if (session) {

      response.json({
        status: "Success",
      })
    } else {

      response.json({
        status: "No session started",
      })
    }
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
};

module.exports = UserController;
