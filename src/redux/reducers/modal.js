import {
  CHANGE_INPUT_VALUE,
  CHANGE_CHECK_INPUT_VALUE,
  EMPTY_FIELDS,
} from '../actions/types';

const initialState = {
  pseudo: '',
  email: '',
  password: '',
  confirmPassword: '',
  notifNewEvent: false,
  notifNewUpdate: false,
};

export const registerForm = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case CHANGE_CHECK_INPUT_VALUE:
      return {
        ...state,
        [action.name]: !state[action.name],
      };
    case EMPTY_FIELDS:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
