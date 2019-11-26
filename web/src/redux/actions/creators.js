// == Import : Action Types
import {
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
  FETCH_REQUESTED_DATA,
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
  CHANGE_SEARCH_FORM_VALUE,
  EMPTY_SEARCH_FORM_VALUE,
  HANDLE_SEARCH_FORM_CHANGE,
  CHANGE_LEFT_FOR_SLIDER,
  SEND_UPDATE_INFO,
  SHOW_MESSAGE_UPDATE_USER,
  DELETE_SHOW_MESSAGE,
  DELETE_USER,
  HANDLE_QUICK_SEARCH,
  HANDLE_QUICK_SEARCH_DATA,
  CHANGE_INTEREST_TO_THE_EVENT,
  CHANGE_PARTICIPATION_TO_THE_EVENT,
  CHANGE_USER_PREFERENCES_TO_THE_EVENT,
  FETCH_USER_PREFERENCES_TO_THE_EVENT,
  CHANGE_LIKE_TO_THE_EVENT,
  CHANGE_SHARE_LINKS_MODAL,
  FETCH_NEW_USER_INFO,
  CLOSE_NAV_MENU,
  FETCH_EVENT_IN_PROGRESS,
  GET_EVENT_IN_PROGRESS,
} from './types';

// Home
export const fetchEventInProgress = (event) => ({
  type: FETCH_EVENT_IN_PROGRESS,
  event,
});
export const getEventInProgress = () => ({
  type: GET_EVENT_IN_PROGRESS,
});

// EventDetails : Header.js
export const changeShareLinksModal = () => ({
  type: CHANGE_SHARE_LINKS_MODAL,
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
export const sendUpdateInfos = () => ({
  type: SEND_UPDATE_INFO,
});
export const showMessageUpdateUser = (messageType, messageContent) => ({
  type: SHOW_MESSAGE_UPDATE_USER,
  messageType,
  messageContent,
});
export const deleteShowMessage = () => ({
  type: DELETE_SHOW_MESSAGE,
});
export const deleteUser = () => ({
  type: DELETE_USER,
});
export const fetchNewUserInfos = () => ({
  type: FETCH_NEW_USER_INFO,
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
export const closeNavMenu = () => ({
  type: CLOSE_NAV_MENU,
});

// Home : QuickSearchBar.js
export const handleSearchChange = (value) => ({
  type: HANDLE_SEARCH_CHANGE,
  value,
});
export const handleSearchSubmit = () => ({
  type: HANDLE_SEARCH_SUBMIT,
});
export const handleQuickSearch = (value) => ({
  type: HANDLE_QUICK_SEARCH,
  value,
});
export const handleQuickSearchData = (data) => ({
  type: HANDLE_QUICK_SEARCH_DATA,
  data,
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
export const emptyFormValue = () => ({
  type: EMPTY_FORM_VALUE,
});
export const fillFilterList = (filterList) => ({
  type: FILL_FILTER_LIST,
  filterList,
});


// EVENTS : Home.js
export const fetchNextEvents = (data) => ({
  type: FETCH_NEXT_EVENTS,
  data,
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
export const fetchUserPreferencesToTheEvent = (liked, interested, participation) => ({
  type: FETCH_USER_PREFERENCES_TO_THE_EVENT,
  liked,
  interested,
  participation,
});
export const changeLikeToTheEvent = (isLiked) => ({
  type: CHANGE_LIKE_TO_THE_EVENT,
  isLiked,
});
export const changeInterestToTheEvent = (isInterested) => ({
  type: CHANGE_INTEREST_TO_THE_EVENT,
  isInterested,
});
export const changeParticipationToTheEvent = (participate) => ({
  type: CHANGE_PARTICIPATION_TO_THE_EVENT,
  participate,
});
export const changeUserPreferencesToTheEvent = (preferenceName) => ({
  type: CHANGE_USER_PREFERENCES_TO_THE_EVENT,
  preferenceName,
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
export const triggerMiddleware = () => ({
  type: TRIGGER_MIDDLEWARE,
});
export const nextEvents = () => ({
  type: NEXT_EVENTS,
});

export const fetchRequestedData = (data) => ({
  type: FETCH_REQUESTED_DATA,
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


// == Home : SearchForm.js
export const changeSearchFormValue = (value, name) => ({
  type: CHANGE_SEARCH_FORM_VALUE,
  value,
  name,
});
export const emptySearchFormValue = () => ({
  type: EMPTY_SEARCH_FORM_VALUE,
});
export const handleSearchFormChange = (value) => ({
  type: HANDLE_SEARCH_FORM_CHANGE,
  value,
});


// Slider : Events
export const changeLeftForSlider = (value) => ({
  type: CHANGE_LEFT_FOR_SLIDER,
  value,
});
