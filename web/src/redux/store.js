// Global import
import {
  createStore,
  compose,
  applyMiddleware,
} from 'redux';

// Local import
import reducer from 'src/redux/reducers';
import userMiddleware from 'src/middlewares/userMiddleware';
import eventsMiddleware from 'src/middlewares/eventsMiddleware';
import eventDetailsMiddleware from 'src/middlewares/eventDetailsMiddleware';

// Store
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
  enhancers,
);

export default store;
