// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : local
import reducer from 'src/redux/reducers';
import registerMiddleware from 'src/redux/middlewares/registerMiddleware';
import loginMiddleware from 'src/redux/middlewares/loginMiddleware';

// == Store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    registerMiddleware,
    loginMiddleware,
  ),
);

const store = createStore(
  reducer,
  // preloadedState,
  enhancers,
);

// == Export
export default store;
