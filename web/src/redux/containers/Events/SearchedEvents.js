// == Import : npm
import { connect } from 'react-redux';


// == Import : local
import SearchedEvents from 'src/components/Events/SearchedEvents';


// == Import : Action Creators
import {
  fetchEventsByLocation,
  handleQuickSearch,
} from '../../actions/creators';


const mapStateToProps = (state) => ({
  data: state.form.data,
  value: state.form.value,
  locationSearchData: state.app.data,
  undefinedData: state.form.caseNoData,
  quickSearchValue: state.home.value,
  quickSearchData: state.home.quickSearchData,
});


const mapDispatchToProps = (dispatch) => ({
  showEvents: () => dispatch(allEvents()),
  fetchEvents: (location) => dispatch(fetchEventsByLocation(location)),
  handleQuickSearch: (value) => dispatch(handleQuickSearch(value)),
});


// == Export
export default connect(mapStateToProps, mapDispatchToProps)(SearchedEvents);
