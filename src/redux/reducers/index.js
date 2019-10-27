import { combineReducers } from 'redux';

// import des reducers
import { eventIcons, switchModals } from './eventdetails';
import { user } from './user';
import { app } from './app';
import { home } from './home';
import { form } from './events';
import { registerForm } from './modal';

export default combineReducers({
  eventIcons,
  user,
  app,
  home,
  form,
  switchModals,
  registerForm,
  // ...
});
