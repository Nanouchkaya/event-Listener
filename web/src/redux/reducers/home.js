import {
  CHANGE_SEARCH_FORM_VALUE,
  HANDLE_SEARCH_CHANGE,
  ADD_FILTERS,
  EMPTY_SEARCH_FORM_VALUE,
  FILL_FILTER_LIST,
  HANDLE_SEARCH_SUBMIT,
  FETCH_NEXT_EVENTS,
  CHANGE_LEFT_FOR_SLIDER,
  HANDLE_QUICK_SEARCH_DATA,
} from '../actions/types';

const initialState = {
  value: '',
  address: '',
  title: '',
  filterList: [],
  dataFilter: [],
  data: [],
  slide: 0,
  quickSearchData: [],
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
        [action.name]: action.value,
      };  
  case HANDLE_SEARCH_CHANGE:
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
    case CHANGE_LEFT_FOR_SLIDER:
      return {
        ...state,
        slide: action.value,
      };
    case HANDLE_QUICK_SEARCH_DATA:
      return {
        ...state,
        quickSearchData: action.data,
      }
    default:
      return state;
  }
};
