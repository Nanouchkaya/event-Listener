// == Import : npm
import { connect } from 'react-redux';


// == Import : local
import Advanced from 'src/components/Events/Advanced';


// == Import : Action Creators
import {
  addFilters,
} from '../../actions/creators';


const mapStateToProps = (state) => ({
  stateTest: state.form.dataFilter,
});


const mapDispatchToProps = (dispatch) => ({
  addFilters: (filters) => dispatch(addFilters(filters)),
});


// == Export
export default connect(mapStateToProps, mapDispatchToProps)(Advanced);
