import {
  CHANGE_SEARCH_FORM_VALUE,
  HANDLE_SEARCH_CHANGE,
  ADD_FILTERS,
  EMPTY_SEARCH_FORM_VALUE,
  HANDLE_SEARCH_SUBMIT,
  FETCH_NEXT_EVENTS,
  CHANGE_LEFT_FOR_SLIDER,
  HANDLE_QUICK_SEARCH_DATA,
  FETCH_EVENT_IN_PROGRESS,
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
  eventInProgress: {},
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
        dataFilter: action.filter,
      };
    case EMPTY_SEARCH_FORM_VALUE:
      return {
        ...state,
        title: '',
        address: '',
        filterList: [],
      };
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
      };
    case FETCH_EVENT_IN_PROGRESS:
      return {
        ...state,
        eventInProgress: {
          ...action.event,
        },
      };
    default:
      return state;
  }
};
