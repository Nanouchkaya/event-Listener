// Global import
import axios from 'axios';

// Local import
import config from 'src/config';

// Actions import
import {
  TRIGGER_MIDDLEWARE,
  ALL_EVENTS,
  FETCH_EVENTS_BY_LOCATION,
  HANDLE_SUBMIT,
  HANDLE_QUICK_SEARCH,
  fetchRequestedData,
  sendLocationSearchData,
  handleQuickSearchData,
} from 'src/redux/actions/temp';
import {
  NEXT_EVENTS,
  GET_EVENT_IN_PROGRESS,
  fetchNextEvents,
  fetchEventInProgress,
} from 'src/redux/actions/event';


const eventsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_EVENT_IN_PROGRESS: {
      axios.get(`${config.api}/events/in-progress`)
        .then((response) => {
          store.dispatch(fetchEventInProgress(response.data.data));
        })
        .catch((error) => {
          // console.error(error);
        });
      break;
    }
    // Handles search by title of an event
    case TRIGGER_MIDDLEWARE: {
      const { value } = store.getState().form;
      axios.get(`${config.api}/events/title/${value}`)
        .then((response) => {
          const { data } = response.data.result;
          store.dispatch(fetchRequestedData(data));
        })
        .catch((error) => {
          // console.error(error);
        });
      break;
    }
    // Gets all events (for the "tous-les-evenements" page)
    case ALL_EVENTS: {
      axios.get(`${config.api}/events`)
        .then((response) => {
          const { data } = response.data;
          store.dispatch(fetchRequestedData(data));
        })
        .catch((error) => {
          // console.error(error);
        });
      break;
    }
    // handles search by localisation
    case FETCH_EVENTS_BY_LOCATION: {
      axios.get(`${config.api}/events/localisation/${action.location}`)
        .then((response) => {
          if (response.data.status === "Event doesn't exist") {
            const data = [];
            store.dispatch(sendLocationSearchData(data));
          }
          if (response.data.result) {
            const { data } = response.data.result;
            store.dispatch(sendLocationSearchData(data));
          }
        })
        .catch((error) => {
          // console.error(error);
        });
      break;
    }
    // handles search by multiple parameters
    case HANDLE_SUBMIT: {
      const { dataFilter } = store.getState().form;
      axios.post(`${config.api}/events/filter`, dataFilter)
        .then((response) => {
          const { data } = response.data;
          store.dispatch(fetchRequestedData(data));
        })
        .catch((error) => {
          // console.error(error);
        });
      break;
    }
    // handles search by title of the event, this time for the QuickSearchBar
    case HANDLE_QUICK_SEARCH: {
      axios.get(`${config.api}/events/title/${action.value}`)
        .then((response) => {
          const { data } = response.data.result;
          store.dispatch(handleQuickSearchData(data));
        })
        .catch((error) => {
          // console.error('from middleware:', error);
        });
      break;
    }
    /**
      * requête pour récupérer les prochains événements à afficher sur l'accueil
      * next-events/:number => nombre d'evt à afficher
      */
    case NEXT_EVENTS: {
      axios.get(`${config.api}/events/next-events/5`)
        .then((response) => {
          store.dispatch(fetchNextEvents(response.data.result.data));
        })
        .catch((error) => {
          // console.error('from middelware:', error);
        });
      break;
    }
    default:
      next(action);
  }
};

// == Export
export default eventsMiddleware;
