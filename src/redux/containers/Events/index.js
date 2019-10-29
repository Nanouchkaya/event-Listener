// == Import : npm
import { connect } from 'react-redux';


// == Import : local
import Events from 'src/components/Events';


// == Import : Action Creators
import {
  allEvents,
  fetchEventsByLocation,
} from '../../actions/creators';


const mapStateToProps = (state) => ({
  data: state.form.data,
  value: state.form.value,
  locationSearchData: state.app.data,
});


const mapDispatchToProps = (dispatch) => ({
  showEvents: () => dispatch(allEvents()),
  fetchEvents: (location) => dispatch(fetchEventsByLocation(location)),
});


// == Export
export default connect(mapStateToProps, mapDispatchToProps)(Events);
