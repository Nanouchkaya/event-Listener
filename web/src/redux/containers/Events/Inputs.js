// == Import : npm
import { connect } from 'react-redux';


// == Import : local
import Inputs from 'src/components/Events/Inputs';


// == Import : Action Creators
import {
  addFilters,
  fillFilterList,
} from '../../actions/creators';


const mapStateToProps = (state) => ({
  stateTest: state.form.dataFilter,
});


const mapDispatchToProps = (dispatch) => ({
  addFilters: (filters) => dispatch(addFilters(filters)),
  fillFilterList: (filterList) => dispatch(fillFilterList(filterList)),
});


// == Export
export default connect(mapStateToProps, mapDispatchToProps)(Inputs);
