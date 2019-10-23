import { combineReducers } from 'redux';

// import des reducers
import { eventIcons } from './eventdetails';
import { user } from './user';

export default combineReducers({
  eventIcons,
  user,
  // ...
});
