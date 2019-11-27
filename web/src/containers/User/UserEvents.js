// Global import
import { connect } from 'react-redux';

// Local import
import UserEvents from 'src/components/User/UserEvents';


const mapStateToProps = (state) => ({
  eventsLike: state.user.eventsLike,
  eventsInterest: state.user.eventsInterest,
  eventsParticipate: state.user.eventsParticipate,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(UserEvents);
