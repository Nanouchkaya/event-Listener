const EventController = require('./controllers/EventController');
const UserController = require('./controllers/UserController');

module.exports = (server, router) => {

  // * //

  /**
   * Home page
   */
  router.get('/', (request, response) => {
    response.type('text/html');
    response.send('Home page');
  });


  // Event //

  /**
   * Get all events
   */
  router.get('/events', (request, response) => {
    response.type('application/json');
    EventController.getAll(request, response);
  });


  // User //

  /**
   * Create an account
   */
  router.post('/users/add', (request, response) => {
    response.type('application/json');
    UserController.add(request, response);
  });
};
