 import { connect } from 'react-redux';
import Test from 'src/components/EventDetails/Map';


// action creators
import {

} from '../../actions/creators';

const mapStateToProps = (state) => ({
  data: state.form.data,
  latitude: state.eventDetails.data.latitude,
  longitude: state.eventDetails.data.longitude,
  baseLatitude: state.form.latitude,
  baseLongitude: state.form.longitude,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Test);
