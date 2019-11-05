import axios from 'axios';


// import config
import config from 'src/config';


import {
  GET_EVENT_DETAILS,
  CHANGE_INTEREST_TO_THE_EVENT,
  CHANGE_PARTICIPATION_TO_THE_EVENT,
} from '../actions/types';


import {
  fetchEventDetails,
  changeUserPreferencesToTheEvent,
} from '../actions/creators';


const eventDetailsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_EVENT_DETAILS: {
      axios.get(`http://${config.url}:3000/events/${action.id}`)
        .then((response) => {
          store.dispatch(fetchEventDetails(response.data.result.data));
        })
        .catch((error) => {
          console.error(error);
        });
      break;
    }

    case CHANGE_INTEREST_TO_THE_EVENT: {
      const token = window.localStorage.getItem('token');

      if (token) {
        const { user, eventDetails } = store.getState();
        const requestAction = (action.isInterested) ? 'delete' : 'add';
        axios.post(`http://${config.url}:3000/users/${user.id}/interest/${requestAction}/${eventDetails.data.id}`,
          {
            headers: {
              Authorization: `token ${token}`,
            },
          })
          .then((response) => {
            store.dispatch(changeUserPreferencesToTheEvent('interested'));
          })
          .catch((error) => {
            console.log(error);
          });
      }
      break;
    }

    case CHANGE_PARTICIPATION_TO_THE_EVENT: {
      const token = window.localStorage.getItem('token');

      if (token) {
        const { user, eventDetails } = store.getState();
        const requestAction = (action.participate) ? 'delete' : 'add';
        axios.post(`http://${config.url}:3000/users/${user.id}/participation/${requestAction}/${eventDetails.data.id}`,
          {
            headers: {
              Authorization: `token ${token}`,
            },
          })
          .then((response) => {
            store.dispatch(changeUserPreferencesToTheEvent('participation'));
          })
          .catch((error) => {
            console.log(error);
          });
      }
      break;
    }
    default:
      next(action);
  }
};

export default eventDetailsMiddleware;
