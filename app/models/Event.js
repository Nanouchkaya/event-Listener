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
   * @param {integer} price
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

   /**
   * Find Event by diffusion (live)
   * @param {integer} live
   * @param {callback} callbackGetEventByDiffusion
   */

   static findLive(live, callbackGetEventByDiffusion) {
     const sqlQuery = 'SELECT * from event where is_online = ?';

     DBConnect.query(
       sqlQuery,
       live,
       (error, result) => {

        if(error) {

          callbackGetEventByDiffusion({
            error: true,
            errorMessage: error,
          });
        } else {

          callbackGetEventByDiffusion({
            error: false,
            errorMessage: null,
            rowMatch: result.length > 0,
            data: result,
          });
        }
       }
     )
   }

   /**
   * Find Event by localisation
   * @param {string} loc
   * @param {callback} callbackGetEventByLocalisation
   */

  static findLocalisation(loc, callbackGetEventByLocalisation) {
    loc = '%' + loc + '%';
    const sqlQuery = 'SELECT * from event where address like N?';

    DBConnect.query(
      sqlQuery,
      loc,
      (error, result) => {

       if(error) {

         callbackGetEventByLocalisation({
           error: true,
           errorMessage: error,
         });
       } else {

         callbackGetEventByLocalisation({
           error: false,
           errorMessage: null,
           rowMatch: result.length > 0,
           data: result,
         });
       }
      }
    )
  }

   /**
   * Find Event by tags
   * @param {string} tags
   * @param {callback} callbackGetEventByTags
   */

  static findTags(tag, callbackGetEventByTags) {
    tag = '%' + tag + '%';
    const sqlQuery = 'SELECT * FROM event JOIN tag JOIN has ON tag.id = tag_id AND event.id = event_id WHERE tag.name LIKE N?';

    DBConnect.query(
      sqlQuery,
      tag,
      (error, result) => {

       if(error) {

         callbackGetEventByTags({
           error: true,
           errorMessage: error,
         });
       } else {

         callbackGetEventByTags({
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
