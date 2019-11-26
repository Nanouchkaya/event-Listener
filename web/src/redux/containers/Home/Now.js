// == Import : npm
import { connect } from 'react-redux';


// == Import : local
import Now from 'src/components/Home/Now';


// == Import : Action Creators
import {
  getEventInProgress,
} from '../../actions/creators';

import {
} from '../../actions/selectors';


const mapStateToProps = (state) => ({
  event: state.home.eventInProgress,
});


const mapDispatchToProps = (dispatch) => ({
  getEventInProgress: () => dispatch(getEventInProgress()),
});


// == Export
export default connect(mapStateToProps, mapDispatchToProps)(Now);
