// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : local
import reducer from 'src/redux/reducers';
import userMiddleware from 'src/redux/middlewares/userMiddleware';
import eventsMiddleware from 'src/redux/middlewares/eventsMiddleware';
import eventDetailsMiddleware from '../middlewares/eventDetailsMiddleware';

// == Store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    userMiddleware,
    eventsMiddleware,
    eventDetailsMiddleware,
  ),
);

const store = createStore(
  reducer,
  // preloadedState,
  enhancers,
);

// == Export
export default store;
