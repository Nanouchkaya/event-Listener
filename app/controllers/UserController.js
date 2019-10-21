const User = require('../models/User');

module.exports = {

  /**
   * Get all users
   * @param {object} request
   * @param {object} response
   */
  getAll(request, response) {
    User.getAll((result) => {
      response.type('application/json');
      // response.status((result.status === "Error") ? 404 : 200); // Alternative
      if (result.status === "Error") {
        response.status(404);
      } else {
        response.status(200);
      }
      response.json(result);
    });
  },
};
