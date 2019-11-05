// == Import: npm
import axios from 'axios';

// == Import :  Action Types
import {
  TRIGGER_MIDDLEWARE,
  ALL_EVENTS,
  FETCH_EVENTS_BY_LOCATION,
  HANDLE_SUBMIT,
  NEXT_EVENTS,
  HANDLE_QUICK_SEARCH,
} from '../actions/types';


// == Import :  Action Creators
import {
  fetchRequestedData,
  sendLocationSearchData,
  fetchNextEvents,
  handleQuickSearchData,
} from '../actions/creators';

// import config
import config from 'src/config';

// == Middleware : eventsMiddleware
const eventsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    // Handles search by title of an event
    case TRIGGER_MIDDLEWARE: {
      const { value } = store.getState().form;
      axios.get(`http://${config.url}:3000/events/title/${value}`)
        .then((response) => {
          const { data } = response.data.result;
          store.dispatch(fetchRequestedData(data));
        })
        .catch((error) => {
          console.error('from middleware:', error);
        });
      break;
    }
    // Gets all events (for the "tous-les-evenements" page)
    case ALL_EVENTS: {
      axios.get(`http://${config.url}:3000/events`)
        .then((response) => {
          const { data } = response.data;
          store.dispatch(fetchRequestedData(data));
        })
        .catch((error) => console.error('from middelware:', error));
      break;
    }
    // handles search by localisation
    case FETCH_EVENTS_BY_LOCATION: {
      axios.get(`http://${config.url}:3000/events/localisation/${action.location}`)
        .then((response) => {
          const { data } = response.data.result;
          store.dispatch(sendLocationSearchData(data));
        })
        .catch((error) => console.error('from middleware:', error));
      break;
    }
    // handles search by multiple parameters
    case HANDLE_SUBMIT: {
      const { dataFilter } = store.getState().form;
      axios.post(`http://${config.url}:3000/events/filter`, dataFilter)
        .then((response) => {
          const { data } = response.data;
          store.dispatch(fetchRequestedData(data));
        })
        .catch((error) => console.error(error));
      break;
    }
    // handles search by title of the event, this time for the QuickSearchBar
    case HANDLE_QUICK_SEARCH: {
      axios.get(`http://${config.url}:3000/events/title/${action.value}`)
        .then((response) => {
          const { data } = response.data.result;
          store.dispatch(handleQuickSearchData(data));
        })
        .catch((error) => {
          console.error('from middleware:', error);
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
        .catch((error) => console.error('from middelware:', error));
      break;
    }
    default:
      next(action);
  }
};

// == Export
export default eventsMiddleware;
