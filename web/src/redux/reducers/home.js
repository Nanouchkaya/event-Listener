import {
  HANDLE_SEARCH_CHANGE,
  HANDLE_SEARCH_SUBMIT,
  FETCH_NEXT_EVENTS,
} from '../actions/types';

const initialState = {
  value: '',
  data: [],
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
    case FETCH_NEXT_EVENTS:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};
