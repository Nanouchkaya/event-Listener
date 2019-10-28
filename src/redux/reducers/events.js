import {
  HANDLE_FORM_CHANGE,
  HANDLE_SUBMIT,
  SHOW_ADVANCED_FORM,
} from '../actions/types';

const initialState = {
  value: '',
  advanced: false,
};


export const form = (state = initialState, action = {}) => {
  switch (action.type) {
    case HANDLE_FORM_CHANGE:
      return {
        ...state,
        value: action.value,
      };
    case SHOW_ADVANCED_FORM:
      return {
        ...state,
        advanced: !state.advanced,
      };
    case HANDLE_SUBMIT:
      return {
        ...state,
        value: '',
      };
    default:
      return state;
  }
};
