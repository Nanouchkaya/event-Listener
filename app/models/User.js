const DBConnect = require('../config/db');

class User {
  
  /**
   * Get all users
   * @param {callback} callback 
   */
  static getAll(callback) {
    const sqlQuery = 'SELECT * FROM user';

    DBConnect.query(sqlQuery,

      (error, result) => {
        // Return result with status
        if (error) {
          return callback({
            error: true,
            errorMessage: error,
          });
        };

        return callback({
          error: false,
          errorMessage: null,
          data: result,
        });
      }
    );
  }

  /**
   * Create an account
   * @param {object} data 
   * @param {callback} callbackToAdd 
   */
  static create(data, callbackToAdd) {
    const {
      pseudo,
      firstname,
      lastname,
      email,
      password,
      notifNewEvent,
      notifNewUpdate,
    } = data;

    const sqlQuery = 'INSERT INTO user(pseudo, firstname, lastname, email, password, notif_new_event, notif_new_update) VALUE(?, ?, ?, ?, ?, ?, ?)';

    DBConnect.query(
      sqlQuery, 
      [pseudo,firstname,lastname,email,password,notifNewEvent,notifNewUpdate],
      (error, result) => {
        if (error) {
          return callbackToAdd({
            error: true,
            errorMessage: error,
          });
        };

        return callbackToAdd({
          error: false,
          errorMessage: null,
          data: result,
        });
      }
    );
  }

  /**
   * Check if have user with same email
   * @param {string} email 
   * @param {callback} callback 
   */
  static checkUserByEmail(email, callback) {
    const sqlQuery = 'SELECT * FROM user WHERE email = ?';

    DBConnect.query(sqlQuery, [email], (error, result) => {
      if (error) {
        return callback({
          error: true,
          errorMessage: error,
        });
      };
      return callback({
        error: false,
        errorMessage: null,
        rowMatch: result.length > 0,
        data: result[0],
      });
    });
  }
};

module.exports = User;
