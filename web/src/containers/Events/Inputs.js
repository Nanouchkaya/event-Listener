// Global import
import { connect } from 'react-redux';

// Local import
import Inputs from 'src/components/Events/Inputs';

// Actions import
import {
  addFilters,
  fillFilterList,
} from 'src/redux/actions/temp';


const mapStateToProps = (state) => ({
  stateTest: state.form.dataFilter,
});

const mapDispatchToProps = (dispatch) => ({
  addFilters: (filters) => dispatch(addFilters(filters)),
  fillFilterList: (filterList) => dispatch(fillFilterList(filterList)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Inputs);
