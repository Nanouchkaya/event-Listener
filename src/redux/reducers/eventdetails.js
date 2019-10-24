// Gestion des icons sur EventDetaiks > Header.js

// Action Type
import {
  CHANGE_HEART_ICON,
  OPEN_SHARE_LINKS_MODAL,
  CLOSE_SHARE_LINKS_MODAL,
  SWITCH_MODALS,
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


// == Reducer pour le switch de Modal sur CheckButtons.js
const modalState = {
  switch: false,
};

export const switchModals = (state = modalState, action = {}) => {
  switch (action.type) {
    case SWITCH_MODALS:
      return {
        ...state,
        switch: !state.switch,
      };
    default:
      return state;
  }
};
