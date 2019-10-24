// Gestion dde l'icon du menu Burger sur App > Nav.js
import iconMenuBurger from 'src/assets/images/icons/icons8-xbox-menu-50.png';
import cancelIcon from 'src/assets/images/icons/icons8-cancel-50.png';

import {
  OPEN_NAV_MODAL,
  ACTIVE_NAV_MENU,
} from '../actions/types';

const initialState = {
  menuBurger: false,
  menuIcon: iconMenuBurger,
  login: false,
  register: false,
  cancelIcon,
};

export const app = (state = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_NAV_MODAL:
      return {
        ...state,
        [action.name]: !state[action.name],
      };
    case ACTIVE_NAV_MENU: {
      const bool = !state.menuBurger;
      const icon = bool ? cancelIcon : iconMenuBurger;
      return {
        ...state,
        menuBurger: bool,
        menuIcon: icon,
        login: false,
        register: false,
      };
    }
    default:
      return state;
  }
};
