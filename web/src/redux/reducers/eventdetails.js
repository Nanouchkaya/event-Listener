// Gestion des icons sur EventDetaiks > Header.js

// Action Type
import {
  CHANGE_SHARE_LINKS_MODAL,
  FETCH_EVENT_DETAILS,
  CHANGE_USER_PREFERENCES_TO_THE_EVENT,
  FETCH_USER_PREFERENCES_TO_THE_EVENT,
} from '../actions/types';


const detailsState = {
  showModal: false,
  data: {},
  position: {},
  liked: false,
  interested: false,
  participation: false,
};
export const eventDetails = (state = detailsState, action = {}) => {
  switch (action.type) {
    case CHANGE_SHARE_LINKS_MODAL:
      return {
        ...state,
        showModal: !state.showModal,
      };
    case FETCH_EVENT_DETAILS:
      return {
        ...state,
        data: action.data,
      };

    case FETCH_USER_PREFERENCES_TO_THE_EVENT: {
      return {
        ...state,
        liked: action.liked,
        interested: action.interested,
        participation: action.participation,
      };
    }

    case CHANGE_USER_PREFERENCES_TO_THE_EVENT: {
      return {
        ...state,
        [action.preferenceName]: !state[action.preferenceName],
      };
    }
    default:
      return state;
  }
};
