// Gestion des icons sur EventDetaiks > Header.js

// Action Type
import {
  CHANGE_HEART_ICON,
  OPEN_SHARE_LINKS_MODAL,
  CLOSE_SHARE_LINKS_MODAL,
  FETCH_EVENT_DETAILS,
  CHANGE_USER_PREFERENCES_TO_THE_EVENT,
  FETCH_USER_PREFERENCES_TO_THE_EVENT,
} from '../actions/types';

const initialState = {
  showModal: false,
  likeIcon: false,
};

export const eventIcons = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_HEART_ICON: {
      return {
        ...state,
        likeIcon: !state.likeIcon,
      };
    }
    case OPEN_SHARE_LINKS_MODAL:
      return {
        ...state,
        showModal: true,
      };
    case CLOSE_SHARE_LINKS_MODAL:
      return {
        ...state,
        showModal: false,
      };
    default:
      return state;
  }
};


const detailsState = {
  data: {},
  position: {},
  liked: false,
  interested: false,
  participation: false,
};
export const eventDetails = (state = detailsState, action = {}) => {
  switch (action.type) {
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
      }
    }

    case CHANGE_USER_PREFERENCES_TO_THE_EVENT: {
      console.log(action);
      return {
        ...state,
        [action.preferenceName]: !state[action.preferenceName],
      }
    }
    default:
      return state;
  }
};
