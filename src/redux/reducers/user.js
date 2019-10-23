import {
  CHANGE_INPUT_VALUE,
  CHANGE_MODAL_STATUS,
  CHANGE_CHECK_INPUT_VALUE,
  CHANGE_EDITOR_MODE,
} from '../actions/types';

const initialState = {
  pseudo: 'Teriyaki',
  urlAvatar: undefined,
  firstname: 'Guillaume',
  lastname: 'Terrien',
  email: 'guillaume.terrien.gt@gmail.com',
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
    default:
      return state;
  }
};
