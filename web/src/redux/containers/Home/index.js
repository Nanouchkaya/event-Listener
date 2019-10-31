// == Import : npm
import { connect } from 'react-redux';


// == Import : local
import Home from 'src/components/Home';


// == Import : Action Creators
import {
  nextEvents,
} from '../../actions/creators';


const mapStateToProps = (state) => ({
  data: state.home.data,
});


const mapDispatchToProps = (dispatch) => ({
  showNextEvents: () => dispatch(nextEvents()),
});


// == Export
export default connect(mapStateToProps, mapDispatchToProps)(Home);
