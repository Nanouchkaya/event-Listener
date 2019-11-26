// == Types == //
/* Action on * page */
export const CHECK_CONNECT = 'CHECK_CONNECT';
export const DECONNECT = 'DECONNECT';
/* Action on profil page */
export const SHOW_MESSAGE_UPDATE_USER = 'SHOW_MESSAGE_UPDATE_USER';
export const DELETE_SHOW_MESSAGE = 'DELETE_SHOW_MESSAGE';
export const CHANGE_EDITOR_MODE = 'CHANGE_EDITOR_MODE';
export const DELETE_USER = 'DELETE_USER';
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const CHANGE_MODAL_STATUS = 'CHANGE_MODAL_STATUS';
export const CHANGE_CHECK_INPUT_VALUE = 'CHANGE_CHECK_INPUT_VALUE';
/* Action in modals */
export const CHANGE_INPUT_VALUE_IN_MODAL = 'CHANGE_INPUT_VALUE_IN_MODAL';
export const CHANGE_CHECK_VALUE_IN_MODAL = 'CHANGE_CHECK_VALUE_IN_MODAL';
export const EMPTY_FIELDS_REGISTER = 'EMPTY_FIELDS_REGISTER';
export const SHOW_MESSAGE_REGISTER = 'SHOW_MESSAGE_REGISTER';
export const SHOW_MESSAGE_LOGIN = 'SHOW_MESSAGE_LOGIN';
/* Send data from * page */
export const SUBMIT_REGISTER = 'SUBMIT_REGISTER';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
/* Send data from profil page */
export const CHANGE_UPDATE_USER = 'CHANGE_UPDATE_USER';
export const CHANGE_USER_PREFERENCES_TO_THE_EVENT = 'CHANGE_USER_PREFERENCES_TO_THE_EVENT';
export const SEND_UPDATE_INFO = 'SEND_UPDATE_INFO';
/* Send data from event page */
export const CHANGE_LIKE_TO_THE_EVENT = 'CHANGE_LIKE_TO_THE_EVENT';
export const CHANGE_INTEREST_TO_THE_EVENT = 'CHANGE_INTEREST_TO_THE_EVENT';
export const CHANGE_PARTICIPATION_TO_THE_EVENT = 'CHANGE_PARTICIPATION_TO_THE_EVENT';
/* Get data for * page */
export const DO_CONNECT = 'DO_CONNECT';
/* Get data for profil page */
export const FETCH_USER_INFOS = 'FETCH_USER_INFOS';
export const FETCH_USER_PREFERENCES_TO_THE_EVENT = 'FETCH_USER_PREFERENCES_TO_THE_EVENT';
export const FETCH_NEW_USER_INFO = 'FETCH_NEW_USER_INFO';


// == Creators == //
export const checkConnect = () => ({ type: CHECK_CONNECT });
export const deconnect = () => ({ type: DECONNECT });
/* Action on profil page */
export const showMessageUpdateUser = (messageType, messageContent) => ({
  type: SHOW_MESSAGE_UPDATE_USER,
  messageType,
  messageContent,
});
export const deleteShowMessage = () => ({ type: DELETE_SHOW_MESSAGE });
export const handleChangEditorModeDisabled = () => ({ type: CHANGE_EDITOR_MODE });
export const deleteUser = () => ({ type: DELETE_USER });
export const changeInputValue = (name, value) => ({
  type: CHANGE_INPUT_VALUE,
  name,
  value,
});
export const changeModalStatus = () => ({ type: CHANGE_MODAL_STATUS });
export const changeCheckInputValue = (name) => ({
  type: CHANGE_CHECK_INPUT_VALUE,
  name,
});
/* Action in modals */
export const emptyFieldsRegister = () => ({ type: EMPTY_FIELDS_REGISTER });
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
/* Action on event page */
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

/* Send data from * page */
export const submitRegister = () => ({ type: SUBMIT_REGISTER });
export const submitLogin = () => ({ type: SUBMIT_LOGIN });
/* Send data from profil page */
export const changeUpdateUser = (user) => ({
  type: CHANGE_UPDATE_USER,
  user,
});
export const changeUserPreferencesToTheEvent = (preferenceName) => ({
  type: CHANGE_USER_PREFERENCES_TO_THE_EVENT,
  preferenceName,
});
export const sendUpdateInfos = () => ({ type: SEND_UPDATE_INFO });

/* Get data for * page */
export const connect = () => ({ type: DO_CONNECT });
/* Get data for profil page */
export const fetchUserInfos = (user) => ({
  type: FETCH_USER_INFOS,
  user,
});
export const fetchNewUserInfos = () => ({ type: FETCH_NEW_USER_INFO });
export const fetchUserPreferencesToTheEvent = (liked, interested, participation) => ({
  type: FETCH_USER_PREFERENCES_TO_THE_EVENT,
  liked,
  interested,
  participation,
});
