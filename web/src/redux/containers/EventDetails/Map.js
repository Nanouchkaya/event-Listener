import { connect } from 'react-redux';
import EventDetailsMap from 'src/components/EventDetails/Map';


// action creators
import {} from '../../actions/creators';

const mapStateToProps = (state) => ({
  data: state.form.data,
  latitude: state.eventDetails.data.latitude,
  longitude: state.eventDetails.data.longitude,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(EventDetailsMap);
