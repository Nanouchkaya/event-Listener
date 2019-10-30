import {
  CHANGE_INPUT_VALUE,
  CHANGE_MODAL_STATUS,
  CHANGE_CHECK_INPUT_VALUE,
  CHANGE_EDITOR_MODE,
  FETCH_USER_INFOS,
} from '../actions/types';

const initialState = {
  pseudo: '',
  urlAvatar: undefined,
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  confirmePassword: '',
  notifNewEvent: false,
  notifNewUpdate: true,
  editorModeDisabled: true,
  modalStatus: false,
};

export const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case CHANGE_MODAL_STATUS:
      return {
        ...state,
        modalStatus: !state.modalStatus,
      };
    case CHANGE_CHECK_INPUT_VALUE:
      return {
        ...state,
        [action.name]: !state[action.name],
      };
    case CHANGE_EDITOR_MODE:
      return {
        ...state,
        editorModeDisabled: !state.editorModeDisabled,
      };
    case FETCH_USER_INFOS: {
      const {
        pseudo,
        email,
        url_avatar: urlAvatar,
        firstname,
        lastname,
        notif_new_event: notifNewEvent,
        notif_new_update: notifNewUpdate,
      } = action.user;
      return {
        ...state,
        pseudo,
        email,
        urlAvatar,
        firstname: (firstname !== null) ? firstname : '',
        lastname: (lastname !== null) ? lastname : '',
        notifNewEvent: !!notifNewEvent, // convert to bool
        notifNewUpdate: !!notifNewUpdate, // convert to bool
      };
    }
    default:
      return state;
  }
};
