import { connect } from 'react-redux';

import RegisterForm from 'src/components/Modal/RegisterForm';

// action creators
import {
  changeInputValue,
  changeCheckInputValue,
  submitRegister,
} from '../../actions/creators';

const mapStateToProps = (state) => ({
  pseudo: state.registerForm.pseudo,
  email: state.registerForm.email,
  password: state.registerForm.password,
  confirmPassword: state.registerForm.confirmPassword,
  notifNewEvent: state.registerForm.notifNewEvent,
  notifNewUpdate: state.registerForm.notifNewUpdate,
});

const mapDispatchToProps = (dispatch) => ({
  changeValue: (name, value) => dispatch(changeInputValue(name, value)),
  changeCheckInputValue: (name) => dispatch(changeCheckInputValue(name)),
  submitRegister: () => dispatch(submitRegister()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
