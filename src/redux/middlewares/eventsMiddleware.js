// == Import: npm
import axios from 'axios';

// == Import :  Action Types
import {
  TRIGGER_MIDDLEWARE,
  ALL_EVENTS,
  FETCH_EVENTS_BY_LOCATION,
  HANDLE_SUBMIT,
} from '../actions/types';


// == Import :  Action Creators
import {
  fetchNameRequestData,
  sendLocationSearchData,
} from '../actions/creators';

// == Middleware : eventsMiddleware
const eventsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case TRIGGER_MIDDLEWARE: {
      const { value } = store.getState().form;
      axios.get(`http://localhost:3000/events/title/${value}`)
        .then((response) => {
          const { data } = response.data.result;
          store.dispatch(fetchNameRequestData(data));
        })
        .catch((error) => {
          console.error('from middleware:', error);
        });
      break;
    }
    case ALL_EVENTS: {
      axios.get('http://localhost:3000/events')
        .then((response) => {
          const { data } = response.data;
          store.dispatch(fetchNameRequestData(data));
        })
        .catch((error) => console.error('from middelware:', error));
      break;
    }
    case FETCH_EVENTS_BY_LOCATION: {
      axios.get(`http://localhost:3000/events/localisation/${action.location}`)
        .then((response) => {
          const { data } = response.data.result;
          store.dispatch(sendLocationSearchData(data));
        })
        .catch((error) => console.error('from middleware:', error));
      break;
    }
    case HANDLE_SUBMIT: {
      const { dataFilter } = store.getState().form;
      axios.post('http://localhost:3000/events/filter', dataFilter)
        .then((response) => console.log(response))
        .catch((error) => console.error(error));
      break;
    }
    default:
      next(action);
  }
};


// == Export
export default eventsMiddleware;
