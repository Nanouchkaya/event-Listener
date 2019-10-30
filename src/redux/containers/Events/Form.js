// == Import : npm
import { connect } from 'react-redux';


// == Import : local
import Form from 'src/components/Events/Form';


// == Import : Action Creators
import {
  handleFormChange,
  handleSubmit,
  showAdvancedForm,
  triggerMiddleware,
  testFiltersMid,
  addFilters,
  emptyFormValue,
} from '../../actions/creators';


const mapStateToProps = (state) => ({
  formValue: state.form.value,
  advanced: state.form.advanced,
  data: state.form.data,
});


const mapDispatchToProps = (dispatch) => ({
  handleFormChange: (value) => dispatch(handleFormChange(value)),
  handleSubmit: () => dispatch(handleSubmit()),
  showAdvancedForm: () => dispatch(showAdvancedForm()),
  triggerMiddleware: () => dispatch(triggerMiddleware()),
  testFiltersMid: () => dispatch(testFiltersMid()),
  addFilters: (filters) => dispatch(addFilters(filters)),
  emptyFormValue: () => dispatch(emptyFormValue()),
});


// == Export
export default connect(mapStateToProps, mapDispatchToProps)(Form);
