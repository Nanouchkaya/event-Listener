import { connect } from 'react-redux';

import UserEvents from 'src/components/User/UserEvents';

// import action creactors
import {
} from '../../actions/creators';

const mapStateToProps = (state) => ({
  eventsLike: state.user.eventsLike,
  eventsInterest: state.user.eventsInterest,
  eventsParticipate: state.user.eventsParticipate,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(UserEvents);
