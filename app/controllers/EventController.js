const Event = require('../models/Event');

const EventController = {

  /**
   * Get all events
   * @param {object} request
   * @param {object} response
   */
  getAll(request, response) {
    Event.getAll((result) => {
      response.type('application/json');
      
      if (result.status === "Error") {
        response.status(404);
      } else {
        response.status(200);
      }

      response.json(result);
    });
  },
};

module.exports = EventController;
