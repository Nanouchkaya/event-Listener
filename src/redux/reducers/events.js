import {
  HANDLE_FORM_CHANGE,
  HANDLE_SUBMIT,
  SHOW_ADVANCED_FORM,
  FETCH_NAME_REQUEST_DATA,
  ADD_FILTERS,
} from '../actions/types';

const initialState = {
  value: '',
  advanced: false,
  data: [],
  dataFilter: [],
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
    case FETCH_NAME_REQUEST_DATA:
      return {
        ...state,
        data: action.data,
      };
    case ADD_FILTERS:
      return {
        ...state,
        dataFilter: [
          ...state.dataFilter,
          action.filters,
        ],
      };
    default:
      return state;
  }
};
