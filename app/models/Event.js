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

  /**
  * Find specific Event
  * @param {number} number
  * @param {callback} callback
  */
  static find(id, callbackGetEvent) {

    DBConnect.query(
      'SELECT * FROM event where id = ?',
      id,
      (error, result) => {
        if (error) {
          return callbackGetEvent({
            status: 'Error',
            data: result,
          });
        };

        return callbackGetEvent({
          status: 'OK',
          data: result,
        });
      }
    );
  }
};

module.exports = Event;
