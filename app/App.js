const EventController = require('./controllers/EventController');
const UserController = require('./controllers/UserController');

module.exports = (server, router) => {

  // * //

  /**
   * Home page
   */
  router.get('/', (request, response) => {
    response.type('text/plain');
    response.send('Home page');
  });


  // Event //

  /**
   * Get all events
   */
  router.get('/events', (request, response) => {
    EventController.getAll(request, response);
  });

  /**
   * Get specific event
   */
  router.get('/events/:eventId', (request, response) => {
    EventController.getEvent(request, response);
  });

  /**
   * Get event  by price
   */
  router.get('/events/price/:price', (request, response) => {
    EventController.getEventByPrice(request, response);
  });

  /**
   * Get event by diffusion
   */
  router.get('/events/diffusion/:live', (request, response) => {
    EventController.getEventByDiffusion(request, response);
  });

  /**
   * Get event by localisation
   */
  router.get('/events/localisation/:loc', (request, response) => {
    EventController.getEventByLocalisation(request, response);
  });

  /**
   * Get event by tags
   */
  router.get('/events/tags/:tag', (request, response) => {
    EventController.getEventByTags(request, response);
  });


  // User //

  /**
   * Create an account
   */
  router.post('/users/add', (request, response) => {
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
    UserController.disconnect(request, response);
  });

  /**
   * Get specific user
   */
  router.get('/users/:userId', (request, response) => {
    UserController.getUser(request, response);
  });

  /**
   * Delete an account
   */
  router.post('/users/:userId/delete', (request, response) => {
    UserController.deleteAccount(request, response);
  });
};
