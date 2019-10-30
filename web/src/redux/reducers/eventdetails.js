// Gestion des icons sur EventDetaiks > Header.js

// Action Type
import {
  CHANGE_HEART_ICON,
  OPEN_SHARE_LINKS_MODAL,
  CLOSE_SHARE_LINKS_MODAL,
  FETCH_EVENT_DETAILS,
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
  eventStatut: 'A venir55',
};
export const eventDetails = (state = detailsState, action = {}) => {
  switch (action.type) {
    case FETCH_EVENT_DETAILS:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};
