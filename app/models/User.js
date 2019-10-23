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
            status: 'Error',
            data: result,
          });
        };

        return callback({
          status: 'OK',
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
            status: 'Error',
            data: error,
          });
        };

        return callbackToAdd({
          status: 'OK',
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
          status: 'Error',
          error: error,
        });
      };
      return callback({
        status: 'OK',
        rowMatch: result.length,
        data: result,
      });
    });
  }
};

module.exports = User;
