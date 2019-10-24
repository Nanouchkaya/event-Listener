const DBConnect = require('../config/db');

class Event {

  /**
   * Get all Events
   * @param {callback} callbackGetAllEvents 
   */
  static getAll(callbackGetAllEvents) {
    const sqlQuery = 'SELECT * FROM event';

    DBConnect.query(
      sqlQuery,
      (error, result) => {
        // Return result with status
        if (error) {
          callback({
            status: 'Error',
            data: result,
          });
        };

        callback({
          status: 'OK',
          data: result,
        });
      }
    );
  }

  /**
  * Find specific Event
  * @param {number} number
  * @param {callback} callbackGetEvent
  */
  static find(id, callbackGetEvent) {
    const sqlQuery = 'SELECT * FROM event where id = ?';

    DBConnect.query(
      sqlQuery,
      id,
      (error, result) => {
        if (error) {
         callbackGetEvent({
            status: 'Error',
            data: result,
          });
        };

        callbackGetEvent({
          status: 'OK',
          data: result,
        });
      }
    );
  }
};

module.exports = Event;
