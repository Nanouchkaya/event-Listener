import { HANDLE_CHANGE, HANDLE_SUBMIT } from '../actions/types';

const initialState = {
  value: '',
};


export const form = (state = initialState, action = {}) => {
  switch (action.type) {
    case HANDLE_CHANGE:
      return {
        ...state,
        value: action.value,
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
