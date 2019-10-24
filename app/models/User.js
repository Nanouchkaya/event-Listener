const DBConnect = require('../config/db');

class User {
  
  /**
   * Get all users
   * @param {callback} callback 
   */
  static getAll(callbackFindAllUsers) {
    const sqlQuery = 'SELECT * FROM user';

    DBConnect.query(sqlQuery,

      (error, result) => {
        // Return result with status
        if (error) {
          callbackFindAllUsers({
            error: true,
            errorMessage: error,
          });
        };

        callbackFindAllUsers({
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
          callbackToAdd({
            error: true,
            errorMessage: error,
          });
        };

        callbackToAdd({
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
   * @param {callback} callbackCheckEmail 
   */
  static checkUserByEmail(email, callbackCheckEmail) {
    const sqlQuery = 'SELECT * FROM user WHERE email = ?';

    DBConnect.query(sqlQuery, [email], (error, result) => {
      if (error) {
        callbackCheckEmail({
          error: true,
          errorMessage: error,
        });
      };
      callbackCheckEmail({
        error: false,
        errorMessage: null,
        rowMatch: result.length > 0,
        data: result[0],
      });
    });
  }

  /**
   * Find specific User
   * @param {number} number
   * @param {callback} callbackGetUser
   */
  static find(id, callbackGetUser) {

    DBConnect.query(
      'SELECT * FROM user WHERE id = ?',
      id,
      (error, result) => {
        if (error) {
          callbackGetUser({
            error: true,
            errorMessage: error,
          });
        };

        callbackGetUser({
          error: false,
          errorMessage: null,
          rowMatch: result.length > 0,
          data: result[0],
        });
      }
    );
  }

  /**
   * Delete specific User
   * @param {number} number
   * @param {callback} callbackDeleteAccount
   */
  static delete(id, callbackDeleteAccount) {

    DBConnect.query(
      'DELETE FROM user WHERE id = ?',
      id,
      (error, result) => {
        if (error) {
          callbackDeleteAccount({
            error: true,
            errorMessage: error,
          });
        };

        callbackDeleteAccount({
          error: false,
          errorMessage: null,
          rowMatch: result.affectedRows > 0,
          data: result,
        });
      }
    );
  }
};

module.exports = User;
