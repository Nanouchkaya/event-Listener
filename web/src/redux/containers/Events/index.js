// == Import : npm
import { connect } from 'react-redux';


// == Import : local
import Events from 'src/components/Events';


// == Import : Action Creators
import {
  allEvents,
} from '../../actions/creators';


const mapStateToProps = (state) => ({
  data: state.form.data,
  value: state.form.value,
});


const mapDispatchToProps = (dispatch) => ({
  showEvents: () => dispatch(allEvents()),
});


// == Export
export default connect(mapStateToProps, mapDispatchToProps)(Events);