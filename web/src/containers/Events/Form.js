// Global import
import { connect } from 'react-redux';

// Local import
import Form from 'src/components/Events/Form';

// Actions import
import {
  handleFormChange,
  handleSubmit,
  showAdvancedForm,
  triggerMiddleware,
  testFiltersMid,
  addFilters,
  emptyFormValue,
  fillFilterList,
} from 'src/redux/actions/temp';


const mapStateToProps = (state) => ({
  formValue: state.form.value,
  advanced: state.form.advanced,
  data: state.form.data,
  filterList: state.form.filterList,
  value: state.form.value,
});

const mapDispatchToProps = (dispatch) => ({
  handleFormChange: (value) => dispatch(handleFormChange(value)),
  handleSubmit: () => dispatch(handleSubmit()),
  showAdvancedForm: () => dispatch(showAdvancedForm()),
  triggerMiddleware: () => dispatch(triggerMiddleware()),
  testFiltersMid: () => dispatch(testFiltersMid()),
  addFilters: (filters) => dispatch(addFilters(filters)),
  emptyFormValue: () => dispatch(emptyFormValue()),
  fillFilterList: (filterList) => dispatch(fillFilterList(filterList)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
