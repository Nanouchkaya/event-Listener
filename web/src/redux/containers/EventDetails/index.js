 
import { connect } from 'react-redux';
import EventDetails from 'src/components/EventDetails';


// action creators
import {
  getEventDetails,
  fetchUserPreferencesToTheEvent,
} from '../../actions/creators';

const mapStateToProps = (state) => ({
  banner: state.eventDetails.data.url_image,
  latitude: state.eventDetails.data.latitude,
  longitude: state.eventDetails.data.longitude,
  isConnected: state.app.isConnected,
  eventsLike: state.user.eventsLike,
  eventsInterest: state.user.eventsInterest,
  eventsParticipate: state.user.eventsParticipate,
  event: state.eventDetails.data,
});

const mapDispatchToProps = (dispatch) => ({
  getEventDetails: (id) => dispatch(getEventDetails(id)),
  fetchUserPreferencesToTheEvent: (liked, interested, participation) => dispatch(fetchUserPreferencesToTheEvent(liked, interested, participation)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventDetails);
