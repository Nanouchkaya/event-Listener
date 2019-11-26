// Global import
import { connect } from 'react-redux';

// Local import
import Now from 'src/components/Home/Now';

// Actions import
import {
  getEventInProgress,
} from 'src/redux/actions/event';


const mapStateToProps = (state) => ({
  event: state.home.eventInProgress,
});

const mapDispatchToProps = (dispatch) => ({
  getEventInProgress: () => dispatch(getEventInProgress()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Now);
