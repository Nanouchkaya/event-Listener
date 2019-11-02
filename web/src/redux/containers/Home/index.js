// == Import : npm
import { connect } from 'react-redux';


// == Import : local
import Home from 'src/components/Home';


// == Import : Action Creators
import {
  nextEvents,
  changeLeftForSlider,
} from '../../actions/creators';

import {
  slider,
} from '../../actions/selectors';


const mapStateToProps = (state) => ({
  data: state.home.data,
  slide: state.home.slide,
  slider,
});


const mapDispatchToProps = (dispatch) => ({
  showNextEvents: () => dispatch(nextEvents()),
  changeLeftForSlider: (value) => dispatch(changeLeftForSlider(value)),
});


// == Export
export default connect(mapStateToProps, mapDispatchToProps)(Home);
