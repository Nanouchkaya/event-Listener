// Dependances
const bcrypt = require('bcrypt');
const jwToken = require('jsonwebtoken');

// Models
const User = require('../models/User');

// Utils functions
const checkEmail = require('../utils/functions').checkEmail;

class UserController {

  /**
   * Create an account
   * @param {object} request
   * @param {object} response
   */
  static add(request, response) {
    const data = request.body;

    // check if all fields are correct
    if ((data.pseudo && data.pseudo.trim().length > 2) &&
      (data.email && data.email.trim().length > 8) &&
      (checkEmail(data.email)) &&
      (data.password && data.password.trim().length > 6) &&
      (data.confirmPassword === data.password) &&
      (typeof data.notifNewEvent === 'boolean') &&
      (typeof data.notifNewUpdate === 'boolean')) {
      
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

          response.status(200);
          response.json({
            error: true,
            errorMessage: "Email already exists",
          });
        }
      });

    } else {
      response.status(200);
      response.json({
        error: true,
        errorMessage: "Bad data received",
      });
    }
  }

  /**
   * Connection
   * @param {object} request
   * @param {object} response
   */
  static connect(request, response) {
    const data = request.body;

    if ((data.email && data.email.trim().length > 8) &&
      checkEmail(data.email) &&
      data.password) {

      // Check email and get this user if exist
      User.checkUserByEmail(
        data.email,
        (result) => {

        if (result.rowMatch) {
          const { password: hashedPassword } = result.data;
          const checkPassword = bcrypt.compareSync(data.password, hashedPassword);
          
          if (checkPassword) {
            if (request.session.token) {

              jwToken.verify(
                request.session.token,
                process.env.APP_KEY,

                (error, decoded) => {
                  if (error) throw error;

                  response.json({
                    status: "Already connected",
                    result,
                  });
                }
              )
            } else {
              
              let token = jwToken.sign(
                { data: data.email },
                process.env.APP_KEY,
                { expiresIn: 60 },
              );
  
              request.session.token = token;

              response.json({
                status: "Connected",
                result,
              });
            }
          } else {

            response.status(200);
            response.json({
              status: "Auth error"
            });
          }
        } else {

          response.status(200);
          response.json({
            status: "Auth error"
          });
        }
      });

    } else {

      response.status(200);
      response.json({
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
   * @param {objet} response
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
    * @param {objet} response
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
