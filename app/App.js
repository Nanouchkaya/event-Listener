const UserController = require('./controllers/UserController');

module.exports = (server, router) => {

  /**
   * Home page
   */
  router.get('/', (request, response) => {
    response.send('Home page');
  });

  /**
   * Users page (Get all users)
   */
  router.get('/users', (request, response) => {
    UserController.getAll(request, response);
  });
};
