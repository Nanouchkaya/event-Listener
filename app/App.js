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

  /**
   * Get specific event
   */
  router.get('/events/:eventId', (request, response) => {
    response.json;
    EventController.getEvent(request, response);
  });

  // User //

  /**
   * Create an account
   */
  router.post('/users/add', (request, response) => {
    response.type('application/json');
    UserController.add(request, response);
  });

  /**
   * Connection
   */
  router.post('/connect', (request, response) => {
    UserController.connect(request, response);
  });

  /**
   * Disconnect
   */
  router.post('/disconnect', (request, response) => {
    response.json;
    UserController.disconnect(request, response);
  });

  /**
   * Get specific user
   */
  router.get('/users/:userId', (request, response) => {
    response.json;
    UserController.getUser(request, response);
  });
};
