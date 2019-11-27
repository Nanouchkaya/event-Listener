// Global import
import { connect } from 'react-redux';

// Local import
import Footer from 'src/components/App/Footer';

// Actions import
import {
  fetchEventsByLocation,
} from 'src/redux/actions/temp';


const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  fetchEvents: (location) => dispatch(fetchEventsByLocation(location)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
