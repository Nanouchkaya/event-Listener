// Global import
import { connect } from 'react-redux';

// Local import
import Event from 'src/components/Events/Event';

// Actions import
import {
  getEventDetails,
} from 'src/redux/actions/event';

// Selectors import
import {
  getCity,
} from 'src/redux/selectors';


const mapStateToProps = () => ({
  getCity,
});

const mapDispatchToProps = (dispatch) => ({
  getEventDetails: (id) => dispatch(getEventDetails(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Event);
