import { combineReducers } from 'redux';

// import des reducers
import { eventIcons } from './eventdetails';
import { user } from './user';
import { app } from './app';
import { home } from './home';

export default combineReducers({
  eventIcons,
  user,
  app,
  home,
  // ...
});
