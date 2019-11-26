// == Types == //
/* Action */
export const OPEN_NAV_MODAL = 'OPEN_NAV_MODAL';
export const ACTIVE_NAV_MENU = 'ACTIVE_NAV_MENU';
export const CLOSE_NAV_MENU = 'CLOSE_NAV_MENU';
/* Action on home page */
export const CHANGE_LEFT_FOR_SLIDER = 'CHANGE_LEFT_FOR_SLIDER';


// == Creators == //
/* Action */
export const openNavModal = (name) => ({
  type: OPEN_NAV_MODAL,
  name,
});
export const activeNavMenu = () => ({
  type: ACTIVE_NAV_MENU,
});
export const closeNavMenu = () => ({
  type: CLOSE_NAV_MENU,
});
/* Action on home page */
export const changeLeftForSlider = (value) => ({
  type: CHANGE_LEFT_FOR_SLIDER,
  value,
});
