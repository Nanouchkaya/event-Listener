// == Import : npm
import { connect } from 'react-redux';


// == Import : local
import Advanced from 'src/components/Events/Advanced';


// == Import : Action Creators
import {
  addFilters,
  addAddressValue,
} from '../../actions/creators';


const mapStateToProps = (state) => ({
  stateTest: state.form.dataFilter,
  addressValue: state.form.addressValue,
});


const mapDispatchToProps = (dispatch) => ({
  addFilters: (filters) => dispatch(addFilters(filters)),
  addAddressValue: (value) => dispatch(addAddressValue(value)),
});


// == Export
export default connect(mapStateToProps, mapDispatchToProps)(Advanced);
