import {
  HANDLE_CHANGE_QSB,
} from '../actions/types';

const initialState = {
  value: '',
};

export const home = (state = initialState, action = {}) => {
  switch (action.type) {
    case HANDLE_CHANGE_QSB:
      return {
        ...state,
        value: action.value,
      };
    default:
      return state;
  }
};
