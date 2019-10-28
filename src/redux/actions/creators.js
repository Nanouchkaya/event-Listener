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
  HANDLE_FORM_CHANGE,
  HANDLE_SEARCH_CHANGE,
  HANDLE_SEARCH_SUBMIT,
  HANDLE_SUBMIT,
  SWITCH_MODALS,
  SHOW_ADVANCED_FORM,
  TRIGGER_MIDDLEWARE,
  FETCH_NAME_REQUEST_DATA,
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


// Home : QuickSearchBar.js
export const handleSearchChange = (value) => ({
  type: HANDLE_SEARCH_CHANGE,
  value,
});
export const handleSearchSubmit = () => ({
  type: HANDLE_SEARCH_SUBMIT,
});


// Events : Form.js
export const handleFormChange = (value) => ({
  type: HANDLE_FORM_CHANGE,
  value,
});
export const handleSubmit = () => ({
  type: HANDLE_SUBMIT,
});
export const showAdvancedForm = () => ({
  type: SHOW_ADVANCED_FORM,
});
export const triggerMiddleware = () => ({
  type: TRIGGER_MIDDLEWARE,
});
export const fetchNameRequestData = (data) => ({
  type: FETCH_NAME_REQUEST_DATA,
  data,
});


// == EventDetails : CheckButtons.js
export const switchModals = () => ({
  type: SWITCH_MODALS,
});
