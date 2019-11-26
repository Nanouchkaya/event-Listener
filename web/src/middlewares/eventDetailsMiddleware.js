// Global import
import axios from 'axios';

// Local import
import config from 'src/config';

// Actions import
import {
  CHANGE_LIKE_TO_THE_EVENT,
  CHANGE_INTEREST_TO_THE_EVENT,
  CHANGE_PARTICIPATION_TO_THE_EVENT,
  changeUserPreferencesToTheEvent,
} from 'src/redux/actions/user';
import {
  GET_EVENT_DETAILS,
  fetchEventDetails,
} from 'src/redux/actions/event';


const eventDetailsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_EVENT_DETAILS: {
      axios.get(`${config.api}/events/${action.id}`)
        .then((response) => {
          store.dispatch(fetchEventDetails(response.data.result.data));
        })
        .catch((error) => {
          // console.error(error);
        });
      break;
    }

    case CHANGE_LIKE_TO_THE_EVENT: {
      const token = window.localStorage.getItem('token');

      if (token) {
        const { user, eventDetails } = store.getState();
        const requestAction = (action.isLiked) ? 'delete' : 'add';
        axios.post(`${config.api}/users/${user.id}/like/${requestAction}/${eventDetails.data.id}`,
          {
            headers: {
              Authorization: `token ${token}`,
            },
          })
          .then((response) => {
            // console.log(action);
            store.dispatch(changeUserPreferencesToTheEvent('liked'));
          })
          .catch((error) => {
            // console.log(error);
          });
      }
      break;
    }

    case CHANGE_INTEREST_TO_THE_EVENT: {
      const token = window.localStorage.getItem('token');

      if (token) {
        const { user, eventDetails } = store.getState();
        const requestAction = (action.isInterested) ? 'delete' : 'add';
        axios.post(`${config.api}/users/${user.id}/interest/${requestAction}/${eventDetails.data.id}`,
          {
            headers: {
              Authorization: `token ${token}`,
            },
          })
          .then((response) => {
            store.dispatch(changeUserPreferencesToTheEvent('interested'));
          })
          .catch((error) => {
            // console.log(error);
          });
      }
      break;
    }

    case CHANGE_PARTICIPATION_TO_THE_EVENT: {
      const token = window.localStorage.getItem('token');

      if (token) {
        const { user, eventDetails } = store.getState();
        const requestAction = (action.participate) ? 'delete' : 'add';
        axios.post(`${config.api}/users/${user.id}/participation/${requestAction}/${eventDetails.data.id}`,
          {
            headers: {
              Authorization: `token ${token}`,
            },
          })
          .then((response) => {
            store.dispatch(changeUserPreferencesToTheEvent('participation'));
          })
          .catch((error) => {
            // console.log(error);
          });
      }
      break;
    }
    default:
      next(action);
  }
};

export default eventDetailsMiddleware;
