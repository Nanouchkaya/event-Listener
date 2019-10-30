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
<<<<<<< HEAD:src/redux/containers/Events/Form.js
  testFiltersMid,
  addFilters,
  emptyFormValue,
  fillFilterList,
=======
>>>>>>> 394ba5dda0f515c9edc902e1156b3c35ed73175e:web/src/redux/containers/Events/Form.js
} from '../../actions/creators';


const mapStateToProps = (state) => ({
<<<<<<< HEAD:src/redux/containers/Events/Form.js
  formValue: state.form.value,
  advanced: state.form.advanced,
  data: state.form.data,
  filterList: state.form.filterList,
=======
  value: state.form.value,
  advanced: state.form.advanced,
  data: state.form.data,
>>>>>>> 394ba5dda0f515c9edc902e1156b3c35ed73175e:web/src/redux/containers/Events/Form.js
});


const mapDispatchToProps = (dispatch) => ({
  handleFormChange: (value) => dispatch(handleFormChange(value)),
  handleSubmit: () => dispatch(handleSubmit()),
  showAdvancedForm: () => dispatch(showAdvancedForm()),
  triggerMiddleware: () => dispatch(triggerMiddleware()),
<<<<<<< HEAD:src/redux/containers/Events/Form.js
  testFiltersMid: () => dispatch(testFiltersMid()),
  addFilters: (filters) => dispatch(addFilters(filters)),
  emptyFormValue: () => dispatch(emptyFormValue()),
  fillFilterList: (filterList) => dispatch(fillFilterList(filterList)),
=======
>>>>>>> 394ba5dda0f515c9edc902e1156b3c35ed73175e:web/src/redux/containers/Events/Form.js
});


// == Export
export default connect(mapStateToProps, mapDispatchToProps)(Form);

