// == Import: npm
import axios from 'axios';

// == Import :  Action Types
import {
  TRIGGER_MIDDLEWARE,
  ALL_EVENTS,
  NEXT_EVENTS,
} from '../actions/types';


// == Import :  Action Creators
import {
  fetchNameRequestData, fetchNextEvents,
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
          console.log('from middleware:', error);
        });
      break;
    }
    case ALL_EVENTS: {
      axios.get('http://localhost:3000/events')
        .then((response) => {
          const { data } = response.data;
          store.dispatch(fetchNameRequestData(data));
        })
        .catch((error) => console.log('from middelware:', error));
      break;
    }
    /**
      * requête pour récupérer les prochains événements à afficher sur l'accueil
      * next-events/:number => nombre d'evt à afficher
      */
    case NEXT_EVENTS: {
      axios.post('http://localhost:3000/events/next-events/5')
        .then((response) => {
          store.dispatch(fetchNextEvents(response.data.result.data));
        })
        .catch((error) => console.log('from middelware:', error));
      break;
    }
    default:
      next(action);
  }
};


// == Export
export default eventsMiddleware;
