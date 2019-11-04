import axios from 'axios';
import { GET_EVENT_DETAILS } from '../actions/types';
import { fetchEventDetails } from '../actions/creators';

// import config
import config from 'src/config';

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
    default:
      next(action);
  }
};

export default eventDetailsMiddleware;
