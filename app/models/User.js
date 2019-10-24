const DBConnect = require('../config/db');

class User {

  /**
   * Create an account
   * @param {object} data 
   * @param {callback} callbackToAdd 
   */
  static create(data, callbackToAdd) {
    const {
      pseudo,
      email,
      password,
      notifNewEvent,
      notifNewUpdate,
    } = data;

    const defaultUserRole = 1;

    const sqlQueryInsertUser = 'INSERT INTO user(pseudo, email, password, notif_new_event, notif_new_update) VALUE(?, ?, ?, ?, ?)';

    // Check if the role exist and get his id
    DBConnect.query(
      sqlQueryInsertUser, 
      [pseudo, email, password, notifNewEvent, notifNewUpdate],
      (errorInsertUser, resultInsertUser) => {

        if (errorInsertUser) {

          callbackToAdd({
            error: true,
            errorMessage: errorInsertUser,
          });
        } else {

          const sqlQueryInsertRelation = 'INSERT INTO possesses(user_id, role_id) VALUE(?, ?)';
          
          // Insert the new user
          DBConnect.query(
            sqlQueryInsertRelation, 
            [resultInsertUser.insertId, defaultUserRole],
            (errorInsertRelation, resultInsertRelation) => {
              if (errorInsertRelation) {

                callbackToAdd({
                  error: true,
                  errorMessage: errorInsertRelation,
                });
              } else {

                callbackToAdd({
                  error: false,
                  errorMessage: null,
                  data: {
                    newId: resultInsertUser.insertId,
                  },
                });
              }
      
            }
          );
        }
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
   * @param {integer} id
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
   * @param {integer} id
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
