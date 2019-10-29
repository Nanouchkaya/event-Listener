// == Import : Action Types
import {
  CHANGE_HEART_ICON,
  OPEN_SHARE_LINKS_MODAL,
  CLOSE_SHARE_LINKS_MODAL,
  CHANGE_INPUT_VALUE,
  CHANGE_MODAL_STATUS,
  CHANGE_CHECK_INPUT_VALUE,
  CHANGE_EDITOR_MODE,
  OPEN_NAV_MODAL,
  ACTIVE_NAV_MENU,
  HANDLE_CHANGE,
  HANDLE_SUBMIT,
  SWITCH_MODALS,
  CHANGE_INPUT_VALUE_IN_MODAL,
  CHANGE_CHECK_VALUE_IN_MODAL,
  SUBMIT_REGISTER,
  SUBMIT_LOGIN,
  CONNECT,
  EMPTY_FIELDS_REGISTER,
  SHOW_MESSAGE_REGISTER,
} from './types';

// == Import : Action Creators

// EventDetails : Header.js
export const changeHeartIcon = () => ({
  type: CHANGE_HEART_ICON,
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


// App : Nav.js
export const openNavModal = (name) => ({
  type: OPEN_NAV_MODAL,
  name,
});
export const activeNavMenu = () => ({
  type: ACTIVE_NAV_MENU,
});
export const submitRegister = () => ({
  type: SUBMIT_REGISTER,
});
export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});
export const connect = (token) => ({
  type: CONNECT,
  token,
});
export const emptyFieldsRegister = () => ({
  type: EMPTY_FIELDS_REGISTER,
});
export const showMessageRegister = (messageType, messageContent) => ({
  type: SHOW_MESSAGE_REGISTER,
  messageType,
  messageContent,
});
export const changeInputValueInModal = (modalName, inputName, value) => ({
  type: CHANGE_INPUT_VALUE_IN_MODAL,
  modalName,
  inputName,
  value,
});
export const changeCheckValueInModal = (modalName, checkName) => ({
  type: CHANGE_CHECK_VALUE_IN_MODAL,
  modalName,
  checkName,
});


// Home : QuickSearchBar.js
// Events : Form.js
export const handleChange = (value) => ({
  type: HANDLE_CHANGE,
  value,
});


// == Events : Form.js
// == Modal : RegisterForm.js
export const handleSubmit = () => ({
  type: HANDLE_SUBMIT,
});


// == EventDetails : CheckButtons.js
export const switchModals = () => ({
  type: SWITCH_MODALS,
});
