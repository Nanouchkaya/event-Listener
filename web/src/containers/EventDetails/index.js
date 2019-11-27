// Global import
import { connect } from 'react-redux';

// Local import
import EventDetails from 'src/components/EventDetails';

// Actions import
import {
  getEventDetails,
} from 'src/redux/actions/event';
import {
  fetchUserPreferencesToTheEvent,
} from 'src/redux/actions/user';


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
