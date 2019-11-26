// Global import
import { connect } from 'react-redux';

// Local import
import NextEvents from 'src/components/Home/NextEvents';

// Actions import
import {
  nextEvents,
} from 'src/redux/actions/event';
import {
  changeLeftForSlider,
} from 'src/redux/actions';

// Selectors import
import {
  slider,
} from 'src/redux/selectors';


const mapStateToProps = (state) => ({
  data: state.home.data,
  slide: state.home.slide,
  slider,
});

const mapDispatchToProps = (dispatch) => ({
  showNextEvents: () => dispatch(nextEvents()),
  changeLeftForSlider: (value) => dispatch(changeLeftForSlider(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NextEvents);
