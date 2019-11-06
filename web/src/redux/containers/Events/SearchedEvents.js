// == Import : npm
import { connect } from 'react-redux';


// == Import : local
import SearchedEvents from 'src/components/Events/SearchedEvents';


// == Import : Action Creators
import {
  fetchEventsByLocation,
  handleQuickSearch,
  handleSubmit,
  addFilters,
} from '../../actions/creators';


const mapStateToProps = (state) => ({
  locationSearchData: state.app.data,
  undefinedData: state.form.caseNoData,
  quickSearchData: state.home.quickSearchData,
  homeFormData: state.form.data,
});


const mapDispatchToProps = (dispatch) => ({
  fetchEvents: (location) => dispatch(fetchEventsByLocation(location)),
  handleQuickSearch: (value) => dispatch(handleQuickSearch(value)),
  handleSubmit: () => dispatch(handleSubmit()),
  addFilters: (filters) => dispatch(addFilters(filters)),
});


// == Export
export default connect(mapStateToProps, mapDispatchToProps)(SearchedEvents);
