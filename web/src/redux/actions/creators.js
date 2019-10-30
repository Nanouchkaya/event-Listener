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
  CHANGE_INPUT_VALUE_IN_MODAL,
  CHANGE_CHECK_VALUE_IN_MODAL,
  FETCH_USER_INFOS,
  SUBMIT_REGISTER,
  SUBMIT_LOGIN,
  DO_CONNECT,
  CHECK_CONNECT,
  EMPTY_FIELDS_REGISTER,
  SHOW_MESSAGE_REGISTER,
  SHOW_MESSAGE_LOGIN,
  DECONNECT,
  CHANGE_UPDATE_USER,
  FETCH_EVENT_DETAILS,
  GET_EVENT_DETAILS,
  SHOW_ADVANCED_FORM,
  TRIGGER_MIDDLEWARE,
  FETCH_NAME_REQUEST_DATA,
  ALL_EVENTS,
  NEXT_EVENTS,
  FETCH_NEXT_EVENTS,
  FETCH_EVENTS_BY_LOCATION,
  SEND_LOCATION_SEARCH_DATA,
  ADD_FILTERS,
  TEST_FILTERS_MID,
  ADD_ADDRESS_VALUE,
  EMPTY_FORM_VALUE,
  FILL_FILTER_LIST,
} from './types';


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
export const fetchUserInfos = (user) => ({
  type: FETCH_USER_INFOS,
  user,
});
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
export const connect = () => ({
  type: DO_CONNECT,
});
export const checkConnect = () => ({
  type: CHECK_CONNECT,
});
export const emptyFieldsRegister = () => ({
  type: EMPTY_FIELDS_REGISTER,
});
export const showMessageRegister = (messageType, messageContent) => ({
  type: SHOW_MESSAGE_REGISTER,
  messageType,
  messageContent,
});
export const showMessageLogin = (messageType, messageContent) => ({
  type: SHOW_MESSAGE_LOGIN,
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
export const deconnect = () => ({
  type: DECONNECT,
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

// EVENTS : Home.js
export const fetchNextEvents = (data) => ({
  type: FETCH_NEXT_EVENTS,
  data,
});

// Events Middlewares
export const triggerMiddleware = () => ({
  type: TRIGGER_MIDDLEWARE,
});
export const nextEvents = () => ({
  type: NEXT_EVENTS,
});

// == EventDetails : CheckButtons.js
export const switchModals = () => ({
  type: SWITCH_MODALS,
});

// == EventDetails : middleware
export const getEventDetails = (id = 10) => ({
  type: GET_EVENT_DETAILS,
  id,
});
export const fetchEventDetails = (data) => ({
  type: FETCH_EVENT_DETAILS,
  data,
});

// User : Update
export const changeUpdateUser = (user) => ({
  type: CHANGE_UPDATE_USER,
  user,
});

// == App : Footer.js
export const fetchEventsByLocation = (location) => ({
  type: FETCH_EVENTS_BY_LOCATION,
  location,
});
export const sendLocationSearchData = (data) => ({
  type: SEND_LOCATION_SEARCH_DATA,
  data,
});


// Events Middlewares
export const fetchNameRequestData = (data) => ({
  type: FETCH_NAME_REQUEST_DATA,
  data,
});
export const allEvents = () => ({
  type: ALL_EVENTS,
});
export const addFilters = (filters) => ({
  type: ADD_FILTERS,
  filters,
});
export const testFiltersMid = () => ({
  type: TEST_FILTERS_MID,
});
export const addAddressValue = (value) => ({
  type: ADD_ADDRESS_VALUE,
  value,
});

// Events : Form.js
export const emptyFormValue = () => ({
  type: EMPTY_FORM_VALUE,
});
export const fillFilterList = (filterList) => ({
  type: FILL_FILTER_LIST,
  filterList,
});
