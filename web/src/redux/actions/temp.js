// App : Footer.js
export const FETCH_EVENTS_BY_LOCATION = 'FETCH_EVENTS_BY_LOCATION';
export const SEND_LOCATION_SEARCH_DATA = 'SEND_LOCATION_SEARCH_DATA';

// Home : QuickSearchBar.js
// Events : Form.js
export const HANDLE_QUICK_SEARCH = 'HANDLE_QUICK_SEARCH';
export const HANDLE_SEARCH_CHANGE = 'HANDLE_SEARCH_CHANGE';
export const HANDLE_SEARCH_SUBMIT = 'HANDLE_SEARCH_SUBMIT';
export const HANDLE_FORM_CHANGE = 'HANDLE_FORM_CHANGE';
export const HANDLE_SUBMIT = 'HANDLE_SUBMIT';
export const SHOW_ADVANCED_FORM = 'SHOW_ADVANCED_FORM';
export const ADD_FILTERS = 'ADD_FILTERS';
export const ADD_ADDRESS_VALUE = 'ADD_ADDRESS_VALUE';
export const EMPTY_FORM_VALUE = 'EMPTY_FORM_VALUE';
export const FILL_FILTER_LIST = 'FILL_FILTER_LIST';
export const TEST_FILTERS_MID = 'TEST_FILTERS_MID';
export const HANDLE_QUICK_SEARCH_DATA = 'HANDLE_QUICK_SEARCH_DATA';
// == Events Middlewares
export const TRIGGER_MIDDLEWARE = 'TRIGGER_MIDDLEWARE';
export const FETCH_REQUESTED_DATA = 'FETCH_REQUESTED_DATA';
export const ALL_EVENTS = 'ALL_EVENTS';
// == Home : SearchForm.js
export const CHANGE_SEARCH_FORM_VALUE = 'CHANGE_SEARCH_FORM_VALUE';
export const EMPTY_SEARCH_FORM_VALUE = 'EMPTY_SEARCH_FORM_VALUE';
export const HANDLE_SEARCH_FORM_CHANGE = 'HANDLE_SEARCH_FORM_CHANGE';


// App : Nav.js
// Home : QuickSearchBar.js
export const handleSearchChange = (value) => ({
  type: HANDLE_SEARCH_CHANGE,
  value,
});
export const handleSearchSubmit = () => ({
  type: HANDLE_SEARCH_SUBMIT,
});
export const handleQuickSearch = (value) => ({
  type: HANDLE_QUICK_SEARCH,
  value,
});
export const handleQuickSearchData = (data) => ({
  type: HANDLE_QUICK_SEARCH_DATA,
  data,
});
// Events : Form.js
export const handleFormChange = (value) => ({
  type: HANDLE_FORM_CHANGE,
  value,
});
export const handleSubmit = () => ({
  type: HANDLE_SUBMIT,
});
export const showAdvancedForm = () => ({
  type: SHOW_ADVANCED_FORM,
});
export const emptyFormValue = () => ({
  type: EMPTY_FORM_VALUE,
});
export const fillFilterList = (filterList) => ({
  type: FILL_FILTER_LIST,
  filterList,
});
// == App : Footer.js
export const fetchEventsByLocation = (location) => ({
  type: FETCH_EVENTS_BY_LOCATION,
  location,
});
export const sendLocationSearchData = (data) => ({
  type: SEND_LOCATION_SEARCH_DATA,
  data,
});
// Events Middlewares
export const triggerMiddleware = () => ({
  type: TRIGGER_MIDDLEWARE,
});
export const fetchRequestedData = (data) => ({
  type: FETCH_REQUESTED_DATA,
  data,
});
export const allEvents = () => ({
  type: ALL_EVENTS,
});
export const addFilters = (filters) => ({
  type: ADD_FILTERS,
  filters,
});
export const testFiltersMid = () => ({
  type: TEST_FILTERS_MID,
});
export const addAddressValue = (value) => ({
  type: ADD_ADDRESS_VALUE,
  value,
});
// == Home : SearchForm.js
export const changeSearchFormValue = (value, name) => ({
  type: CHANGE_SEARCH_FORM_VALUE,
  value,
  name,
});
export const emptySearchFormValue = () => ({
  type: EMPTY_SEARCH_FORM_VALUE,
});
export const handleSearchFormChange = (value) => ({
  type: HANDLE_SEARCH_FORM_CHANGE,
  value,
});
