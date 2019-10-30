import {
  CHANGE_SEARCH_FORM_VALUE,
  HANDLE_SEARCH_FORM_CHANGE,
  ADD_FILTERS,
  EMPTY_SEARCH_FORM_VALUE,
  FILL_FILTER_LIST,
  HANDLE_SEARCH_SUBMIT,
  FETCH_NEXT_EVENTS,
} from '../actions/types';

const initialState = {
  value: '',
  address: '',
  title: '',
  filterList: [],
  dataFilter: [],
  data: [],
};

export const home = (state = initialState, action = {}) => {
  switch (action.type) {
    case HANDLE_SEARCH_SUBMIT:
      return {
        ...state,
        value: '',
      };
    case CHANGE_SEARCH_FORM_VALUE:
      return {
        ...state,
        [action.name]: [action.value],
      };
    case HANDLE_SEARCH_FORM_CHANGE:
      return {
        ...state,
        value: action.value,
      };
    case ADD_FILTERS:
      return {
        ...state,
        dataFilter: action.filters,
      };
    case EMPTY_SEARCH_FORM_VALUE:
      return {
        ...state,
        title: '',
        address: '',
        filterList: [],
      };
    // case FILL_FILTER_LIST:
    //   return {
    //     ...state,
    //     filterList: action.filterList,
    //   };
    case FETCH_NEXT_EVENTS:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};
