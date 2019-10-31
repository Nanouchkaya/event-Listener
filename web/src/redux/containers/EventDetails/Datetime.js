import { connect } from 'react-redux';
import Datetime from 'src/components/EventDetails/Datetime';
import { getEventDate } from '../../actions/selectors';

const mapStateToProps = (state) => ({
  dateStart: state.eventDetails.data.date_start,
  dateEnd: state.eventDetails.data.date_end,
  getEventDate,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Datetime);
