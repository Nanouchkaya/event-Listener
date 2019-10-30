import {
  HANDLE_CHANGE,
} from '../actions/types';

const initialState = {
  value: '',
};

export const home = (state = initialState, action = {}) => {
  switch (action.type) {
    case HANDLE_CHANGE:
      return {
        ...state,
        value: action.value,
      };
    default:
      return state;
  }
};
