import {
  HANDLE_SEARCH_CHANGE,
  HANDLE_SEARCH_SUBMIT,
} from '../actions/types';

const initialState = {
  value: '',
};

export const home = (state = initialState, action = {}) => {
  switch (action.type) {
    case HANDLE_SEARCH_CHANGE:
      return {
        ...state,
        value: action.value,
      };
    case HANDLE_SEARCH_SUBMIT:
      return {
        ...state,
        value: '',
      };
    default:
      return state;
  }
};
