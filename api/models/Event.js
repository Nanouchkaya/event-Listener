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
    const sqlQuery = 'SELECT * FROM event WHERE id = ?';

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
          
          const sqlQueryTags = 'SELECT tag.* FROM `tag` LEFT JOIN has ON has.tag_id = tag.id WHERE has.event_id = ?'

          DBConnect.query(
            sqlQueryTags,
            id,
            (errorTags, resultTags) => {
              if (errorTags) {
                callbackGetEvent({
                  error: true,
                  errorMessage: errorTags,
                })
              } else {

                callbackGetEvent({
                  error: false,
                  errorMessage: null,
                  rowMatch: result.length > 0,
                  data: {
                    ...result[0],
                    tags: resultTags,
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
          query: sqlQuery,
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

    /**
  * Find Event by title
  * @param {string} name
  * @param {callback} callbackGetEventByTitle
  */
  static findTitle(name, callbackGetEventByTitle) {
    name = '%' + name + '%';
    const sqlQuery = 'SELECT * FROM event WHERE event.title LIKE N?';

    DBConnect.query(
      sqlQuery,
      name,
      (error, result) => {

        if(error) {

        callbackGetEventByTitle({
          error: true,
          errorMessage: error,
        });
        } else {

        callbackGetEventByTitle({
          error: false,
          errorMessage: null,
          rowMatch: result.length > 0,
          data: result,
          query: sqlQuery,
        });
        }
      }
    )
  }

 /**
  * Find Event by starting date
  * @param {string} start
  * @param {callback} callbackGetEventByStartingDate
  */
  static findStart(start, callbackGetEventByStartingDate) {
    const sqlQuery = 'SELECT * FROM event WHERE date_start = ?';

    DBConnect.query(
      sqlQuery,
      start,
      (error, result) => {

        if(error) {

        callbackGetEventByStartingDate({
          error: true,
          errorMessage: error,
        });
        } else {

        callbackGetEventByStartingDate({
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
  * Find Event by ending date
  * @param {string} finish
  * @param {callback} callbackGetEventByEndingDate
  */
  static findFinish(finish, callbackGetEventByEndingDate) {
    const sqlQuery = 'SELECT * FROM event WHERE date_end = ?';

    DBConnect.query(
      sqlQuery,
      finish,
      (error, result) => {

        if(error) {

        callbackGetEventByEndingDate({
          error: true,
          errorMessage: error,
        });
        } else {

        callbackGetEventByEndingDate({
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
  * Find Event by date
  * @param {string} start
  * @param {string} finish 
  * @param {callback} callbackGetEventByDate
  */
  static findDate(start, finish, callbackGetEventByDate) {
    const sqlQuery = 'SELECT * FROM event WHERE date_start = ? AND date_end = ?';

    DBConnect.query(
      sqlQuery,
      [start, finish],
      (error, result) => {

        if(error) {

        callbackGetEventByDate({
          error: true,
          errorMessage: error,
        });
        } else {

        callbackGetEventByDate({
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
  * Sort events by start date
  * @param {number} number
  * @param {callback} callbackNextEvents
  */
  static sortByStartDate(number, callbackNextEvents) {
   const sqlQuery = `SELECT * FROM event ORDER BY date_start LIMIT ${number}`;

   DBConnect.query(
     sqlQuery,
     (error, result) => {

      if(error) {

       callbackNextEvents({
         error: true,
         errorMessage: error,
       });
      } else {

       callbackNextEvents({
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
   * Find Event by filter
   * @param {callback} callbackGetEventByFilter
   */
  static findFilter(filters, callbackGetEventByFilter) {
    let query = '';

    filters.map((value, index) => {
      if (filters.length === (index + 1)) {
        if ((Object.keys(value) == 'address' || Object.keys(value) == 'title')) {
            query += `${Object.keys(value)} LIKE ${value[Object.keys(value)]};` 
        } else {
            query += `${Object.keys(value)} = ${value[Object.keys(value)]};`;  
        }
      } else {
          if ((Object.keys(value) == 'address' || Object.keys(value) == 'title')) {
              query += `${Object.keys(value)} LIKE ${value[Object.keys(value)]} AND ` 
          } else {
              query += `${Object.keys(value)} = ${value[Object.keys(value)]} AND `;  
          }
      }
    });

    const sqlQuery = `SELECT * FROM event WHERE ${query}`;

    DBConnect.query(
      sqlQuery,
      (error, result) => {
        if(error) {

          callbackGetEventByFilter({
            error: true,
            errorMessage: error,
          });
         } else {
  
          callbackGetEventByFilter({
            error: false,
            errorMessage: null,
            rowMatch: result.length > 0,
            data: result,
            query: sqlQuery,
          });
         }
    })

  }

};

module.exports = Event;
