const EventController = require('./controllers/EventController');
const UserController = require('./controllers/UserController');
const serviceContact = require('./services/contact');

module.exports = (server, router) => {
  // * //

  /**
   * Home page
   */
  router.get('/', (request, response) => {
    response.type('text/plain');
    response.send('API eventListener');
  });

  /**
   * Contact form
   */
  router.post('/contact/send', (request, response) => {
    serviceContact(request, response);
  });

  // Event //

  /**
   * Get all events
   */
  router.get('/events', (request, response) => {
    EventController.getAll(request, response);
  });

  /**
   * Get one event in progress
   */
  router.get('/events/in-progress', (request, response) => {
    EventController.getEventInProgress(request, response);
  });

  /**
   * Get specific event
   */
  router.get('/events/:eventId', (request, response) => {
    EventController.getEvent(request, response);
  });

  /**
   * Get event by Title
   */
  router.get('/events/title/:name', (request, response) => {
    EventController.getEventByTitle(request, response);
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

  /**
   * Get event by Starting Date
   */
  router.get('/events/datestart/:start', (request, response) => {
    EventController.getEventByStartingDate(request, response);
  });

  /**
   * Get event by Ending Date
   */
  router.get('/events/dateend/:finish', (request, response) => {
    EventController.getEventByEndingDate(request, response);
  });

  /**
   * Get event by Date
   */
  router.get('/events/date/:start/:finish', (request, response) => {
    EventController.getEventByDate(request, response);
  });

  /**
   * Get next events (sort by start_date and reduce to :number first results)
   */
  router.get('/events/next-events/:number', (request, response) => {
    EventController.getNextEvents(request, response);
  });

  /**
   * Test dynamic query
   */
  router.post('/events/filter', (request, response) => {
    EventController.getEventByFilter(request, response);
  });


  // User //

  /**
   * Check authentication
   */
  router.get('/check-auth', (request, response) => {
    UserController.checkAuth(request, response);
  });

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

  /**
   * Update an account
   */
  router.post('/users/:userId/update', (request, response) => {
    UserController.updateAccount(request, response);
  });

  /**
   * User adds a like to the event
   */
  router.post('/users/:userId/like/add/:eventId', (request, response) => {
    UserController.addLikeToEvent(request, response);
  });

  /**
   * User delete a like to the event
   */
  router.post('/users/:userId/like/delete/:eventId', (request, response) => {
    UserController.deleteLikeToEvent(request, response);
  });

  /**
   * User adds his interest for the event
   */
  router.post('/users/:userId/interest/add/:eventId', (request, response) => {
    UserController.addInterestToEvent(request, response);
  });

  /**
   * User delete his interest for the event
   */
  router.post('/users/:userId/interest/delete/:eventId', (request, response) => {
    UserController.deleteInterestToEvent(request, response);
  });

  /**
   * User adds his participation to the event
   */
  router.post('/users/:userId/participation/add/:eventId', (request, response) => {
    UserController.addParticipationToEvent(request, response);
  });

  /**
   * User delete his participation to the event
   */
  router.post('/users/:userId/participation/delete/:eventId', (request, response) => {
    UserController.deleteParticipationToEvent(request, response);
  });
};
