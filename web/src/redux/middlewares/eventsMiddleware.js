// == Import: npm
import axios from 'axios';

// == Import :  Action Types
import {
  TRIGGER_MIDDLEWARE,
  ALL_EVENTS,
  FETCH_EVENTS_BY_LOCATION,
  HANDLE_SUBMIT,
  NEXT_EVENTS,
} from '../actions/types';


// == Import :  Action Creators
import {
  fetchRequestedData,
  sendLocationSearchData,
  fetchNextEvents,
} from '../actions/creators';

// import config
import config from 'src/config';

// == Middleware : eventsMiddleware
const eventsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case TRIGGER_MIDDLEWARE: {
      const { value } = store.getState().form;
      axios.get(`http://${config.url}:3000/events/title/${value}`)
        .then((response) => {
          const { data } = response.data.result;
          store.dispatch(fetchRequestedData(data));
        })
        .catch((error) => {
          console.error(error);
        });
      break;
    }
    case ALL_EVENTS: {
      axios.get(`http://${config.url}:3000/events`)
        .then((response) => {
          const { data } = response.data;
          store.dispatch(fetchRequestedData(data));
        })
        .catch((error) => {
          console.error(error);
        });
      break;
    }
    case FETCH_EVENTS_BY_LOCATION: {
      // empties the array of data before each request
      const empyData = [];
      store.dispatch(sendLocationSearchData(empyData));
      axios.get(`http://${config.url}:3000/events/localisation/${action.location}`)
        .then((response) => {
          if (response.data.result) {
            const { data } = response.data.result;
            store.dispatch(sendLocationSearchData(data));
          }
        })
        .catch((error) => {
          console.error(error);
        });
      break;
    }
    case HANDLE_SUBMIT: {
      const { dataFilter } = store.getState().form;
      axios.post(`http://${config.url}:3000/events/filter`, dataFilter)
        .then((response) => {
          const { data } = response.data;
          store.dispatch(fetchRequestedData(data));
        })
        .catch((error) => {
          console.error(error);
        });
      break;
    }
    /**
      * requête pour récupérer les prochains événements à afficher sur l'accueil
      * next-events/:number => nombre d'evt à afficher
      */
     case NEXT_EVENTS: {
      axios.post(`http://${config.url}:3000/events/next-events/5`)
        .then((response) => {
          store.dispatch(fetchNextEvents(response.data.result.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }
    default:
      next(action);
  }
};

// == Export
export default eventsMiddleware;
