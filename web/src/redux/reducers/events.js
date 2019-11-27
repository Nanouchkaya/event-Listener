// Actions import
import {
  HANDLE_FORM_CHANGE,
  HANDLE_SUBMIT,
  SHOW_ADVANCED_FORM,
  FETCH_REQUESTED_DATA,
  ADD_FILTERS,
  ADD_ADDRESS_VALUE,
  EMPTY_FORM_VALUE,
  FILL_FILTER_LIST,
} from '../actions/temp';


const initialState = {
  value: '',
  advanced: false,
  data: [],
  dataFilter: [],
  addressValue: '',
  filterList: [],
  latitude: 48.8566969,
  longitude: 2.3514616,
  caseNoData: '',
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
    case FETCH_REQUESTED_DATA: {
      if (action.data === undefined) {
        return {
          ...state,
          caseNoData: 'Aucun filtre n\'a été sélectionné',
          data: [],
        };
      }
      return {
        ...state,
        data: action.data,
      };
    }

    case ADD_FILTERS:
      return {
        ...state,
        dataFilter: action.filters,
      };
    case ADD_ADDRESS_VALUE:
      return {
        ...state,
        addressValue: action.value,
      };
    case EMPTY_FORM_VALUE:
      return {
        ...state,
        value: '',
        addressValue: '',
        filterList: [],
      };
    case FILL_FILTER_LIST:
      return {
        ...state,
        filterList: [
          ...state.filterList,
          action.filterList,
        ],
      };
    default:
      return state;
  }
};
