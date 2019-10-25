const Event = require('../models/Event');

class EventController {

  /**
   * Get all events
   * @param {object} request
   * @param {object} response
   */
  static getAll(request, response) {
    Event.getAll((result) => {
      response.json(result);
    });
  }

  /**
  * Find and get specific event
  * @param {object} request
  * @param {object} response
  */
  static getEvent(request, response) {
    const { eventId } = request.params;

    if (isNaN(eventId)) {

      response.status(200);
      response.json({
        status: "Bad data received"
      });
      
    } else {
      
      Event.find(
        eventId,
        (result) => {

          if (result.rowMatch) {
            response.json({
              status: "success",
              result,
            });
          } else {
            response.json({
              status: "Event doesn't exist",
            });
          }
        });
    }
  }

  /**
   * Find and get Event by price
   * @param {object} request
   * @param {object} response
   */
  static getEventByPrice(request, response) {
    const { price } = request.params;

    if (isNaN(price)) {

      response.status(200);
      response.json({
        status: "Bad data received"
      });
      
    } else {
      
      Event.findPrice(
        price,
        (result) => {

          if (result.rowMatch) {
            response.json({
              status: "success",
              result,
            });
          } else {
            response.json({
              status: "Event doesn't exist",
            });
          }
        });
    }
  }
};

module.exports = EventController;
