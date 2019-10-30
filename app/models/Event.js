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
     [ start, finish],
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
   * Find Event by filter
   * @param {callback} callbackGetEventByFilter
   */
  static findFilter(filters, callbackGetEventByFilter) {
    let queryTest = '';

    filters.forEach((value, index) => {
      // On veux comparer les noms des propriétés de `filters` au valeur du tableau `handsomeTeriyaki`
      // const handsomeTeriyaki = [
      //   'location',
      //   'price',
      //   // ...
      // ];
      // handsomeTeriyaki.filter((value) => {
      //   value === Object.keys(value);
      // })

      if (filters.length === (index + 1)) {
        if ((Object.keys(value) == 'address' || Object.keys(value) == 'title')) {
            queryTest += `${Object.keys(value)} LIKE ${value[Object.keys(value)]};` 
        } else {
            queryTest += `${Object.keys(value)} = ${value[Object.keys(value)]};`;  
        }
      } else {
          if ((Object.keys(value) == 'address' || Object.keys(value) == 'title')) {
              queryTest += `${Object.keys(value)} LIKE ${value[Object.keys(value)]} AND ` 
          } else {
              queryTest += `${Object.keys(value)} = ${value[Object.keys(value)]} AND `;  
          }
      }
    });

    console.log(queryTest);
    // price = false AND location = Nantes;

    const sqlQuery = `SELECT * FROM event WHERE ${queryTest}`;
    // SELECT * FROM event WHERE price = false;

    DBConnect.query(
      sqlQuery,
      queryTest,
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
