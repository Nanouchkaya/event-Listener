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
        
        if (error) {

          callbackGetAllEvents({
            error: true,
            errorMessage: error,
          });
        } else {
          
          callbackGetAllEvents({
            error: false,
            errorMessage: null,
            rowMatch: result.length > 0,
            data: result,
          });
        }
      }
    );
  }

  /**
  * Find specific Event
  * @param {integer} id
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
            error: true,
            errorMessage: error,
          });
        } else {
          
          callbackGetEvent({
            error: false,
            errorMessage: null,
            rowMatch: result.length > 0,
            data: result[0],
          });
        }
      }
    );
  }

  /**
   * Find Event by price (free/pricy)
   * @param {string} free
   * @param {callback} callbackGetEventByPrice
   */

   static findPrice(price, callbackGetEventByPrice) {
     const sqlQuery = 'SELECT * FROM event where price = ?';

     DBConnect.query(
       sqlQuery,
       price,
       (error, result) => {

        if (error) {

          callbackGetEventByPrice({
            error: true,
            errorMessage: error,
          });
        } else {

          callbackGetEventByPrice({
            error: false,
            errorMessage: null,
            rowMatch: result.length > 0,
            data: result,
          });
        }
       }
     )
   }
};

module.exports = Event;
