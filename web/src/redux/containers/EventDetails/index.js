 
import { connect } from 'react-redux';
import EventDetails from 'src/components/EventDetails';


// action creators
import {
  getEventDetails,
} from '../../actions/creators';

const mapStateToProps = (state) => ({
  banner: state.eventDetails.data.url_image,
  latitude: state.eventDetails.data.latitude,
  longitude: state.eventDetails.data.longitude,
});

const mapDispatchToProps = (dispatch) => ({
  getEventDetails: (id) => dispatch(getEventDetails(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventDetails);
