 import { connect } from 'react-redux';
import Test from 'src/components/EventDetails/Map';


// action creators
import {

} from '../../actions/creators';

const mapStateToProps = (state) => ({
  latitude: state.eventDetails.data.latitude,
  longitude: state.eventDetails.data.longitude,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Test);
