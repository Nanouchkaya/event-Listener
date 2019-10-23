// Dep
const bcrypt = require('bcrypt');

// Controller
const User = require('../models/User');

module.exports = {

  /**
   * Get all users
   * @param {object} request
   * @param {object} response
   */
  getAll(request, response) {
    User.getAll((result) => {
      response.type('application/json');

      if (result.status === "Error") {
        response.status(404);
      } else {
        response.status(200);
      }

      response.json(result);
    });
  },

  /**
   * Create an account
   * @param {object} request
   * @param {object} response
   */
  create(request, response) {
    const data = request.body;

    const regexForEmail = /(?:[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]/;

    // check if all fields are correct
    if ((data.pseudo && data.pseudo.trim().length > 2) &&
      (data.firstname && data.firstname.trim().length > 2) &&
      (data.lastname && data.lastname.trim().length > 2) &&
      (data.email && data.email.trim().length > 8) &&
      (regexForEmail.test(data.email.trim())) &&
      (data.password && data.password.trim().length > 6) &&
      (data.confirmPassword === data.password) &&
      (typeof data.notifNewEvent === 'boolean') &&
      (typeof data.notifNewUpdate === 'boolean')) {
      
      User.checkUserByEmail(data.email, (result) => {
        // Check if user exist
        if (result.rowMatch < 1) {
          // Hash the password
          bcrypt.hash(data.password, 10, function(error, hash) {
            if (error) throw error;
    
            data.password = hash;
            
            User.create(data, (result) => {
              response.status(200);
              response.json(result);
            })
          });
        } else {
          response.status(200);
          response.json(result);
        }
      });
    } else {
      response.status(200);
      response.json({
        status: "Error"
      });
    }
  }
};
