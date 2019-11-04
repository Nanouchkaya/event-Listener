// == Import : npm
import { connect } from 'react-redux';


// == Import : local
import NextEvents from 'src/components/Home/NextEvents';


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
export default connect(mapStateToProps, mapDispatchToProps)(NextEvents);
