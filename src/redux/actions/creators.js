// import Action Types
import {
  CHANGE_HEART_ICON,
  OPEN_SHARE_LINKS_MODAL,
  CLOSE_SHARE_LINKS_MODAL,
  CHANGE_INPUT_VALUE,
  CHANGE_MODAL_STATUS,
  CHANGE_CHECK_INPUT_VALUE,
  CHANGE_EDITOR_MODE,
} from './types';

// == Action Creators

// EventDetails : Header.js
export const changeHeartIcon = (src) => ({
  type: CHANGE_HEART_ICON,
  src,
});
export const openShareLinksModal = () => ({
  type: OPEN_SHARE_LINKS_MODAL,
});
export const closeShareLinksModal = () => ({
  type: CLOSE_SHARE_LINKS_MODAL,
});

// User : Preferences.js
export const changeInputValue = (name, value) => ({
  type: CHANGE_INPUT_VALUE,
  name,
  value,
});
export const changeModalStatus = () => ({
  type: CHANGE_MODAL_STATUS,
});
export const changeCheckInputValue = (name) => ({
  type: CHANGE_CHECK_INPUT_VALUE,
  name,
});
export const handleChangEditorModeDisabled = () => ({
  type: CHANGE_EDITOR_MODE,
});
