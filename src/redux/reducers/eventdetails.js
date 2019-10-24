// Gestion des icons sur EventDetaiks > Header.js
import heartIcon from 'src/assets/images/icons/icons8-heart-50.png';
import heartCheckedIcon from 'src/assets/images/icons/icons8-heart-checked-50.png';

// Action Type
import {
  CHANGE_HEART_ICON,
  OPEN_SHARE_LINKS_MODAL,
  CLOSE_SHARE_LINKS_MODAL,
} from '../actions/types';

const initialState = {
  showModal: false,
  likeIcon: heartIcon,
};

export const eventIcons = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_HEART_ICON: {
      let currentIcon = action.src;
      currentIcon = heartIcon ? heartCheckedIcon : heartIcon;
      return {
        ...state,
        likeIcon: currentIcon,
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
