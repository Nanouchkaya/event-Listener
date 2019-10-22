const DBConnect = require('../config/db');

class Event {
  
  /**
   * Get all Events
   * @param {callback} callback 
   */
  static getAll(callback) {
    
    DBConnect.query('SELECT * FROM event',

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

module.exports = Event;
