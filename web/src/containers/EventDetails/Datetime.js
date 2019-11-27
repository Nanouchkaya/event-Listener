// Global import
import { connect } from 'react-redux';

// Local import
import Datetime from 'src/components/EventDetails/Datetime';

// Selectors import
import {
  getEventDate,
} from 'src/redux/selectors';


const mapStateToProps = (state) => ({
  dateStart: state.eventDetails.data.date_start,
  dateEnd: state.eventDetails.data.date_end,
  getEventDate,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Datetime);
