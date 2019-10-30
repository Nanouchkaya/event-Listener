// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : local
import reducer from 'src/redux/reducers';
<<<<<<< HEAD:src/redux/store/index.js
import exampleMiddleware from 'src/redux/middlewares/exampleMiddleware';
import eventsMiddleware from 'src/redux/middlewares/eventsMiddleware';
=======
import userMiddleware from 'src/redux/middlewares/userMiddleware';
import eventsMiddleware from 'src/redux/middlewares/eventsMiddleware';
import eventDetailsMiddleware from '../middlewares/eventDetailsMiddleware';
>>>>>>> 394ba5dda0f515c9edc902e1156b3c35ed73175e:web/src/redux/store/index.js

// == Store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
<<<<<<< HEAD:src/redux/store/index.js
    exampleMiddleware,
    eventsMiddleware,
    // secondMiddleware,
=======
    userMiddleware,
    eventsMiddleware,
    eventDetailsMiddleware,
>>>>>>> 394ba5dda0f515c9edc902e1156b3c35ed73175e:web/src/redux/store/index.js
  ),
);

const store = createStore(
  reducer,
  // preloadedState,
  enhancers,
);

// == Export
export default store;
