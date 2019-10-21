const DBConnect = require('../config/DB');

class User {
  
  /**
   * Get all users
   * @param {callback} callback 
   */
  static getAll(callback) {
    
    DBConnect.query('SELECT * FROM user',

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

};

module.exports = User;
