// Global import
import { connect } from 'react-redux';

// Local import
import RegisterForm from 'src/components/Modal/RegisterForm';

// Actions import
import {
  changeInputValueInModal,
  changeCheckValueInModal,
  submitRegister,
} from 'src/redux/actions/user';


const mapStateToProps = (state) => ({
  pseudo: state.app.registerContent.pseudo,
  email: state.app.registerContent.email,
  password: state.app.registerContent.password,
  confirmPassword: state.app.registerContent.confirmPassword,
  notifNewEvent: state.app.registerContent.notifNewEvent,
  notifNewUpdate: state.app.registerContent.notifNewUpdate,
  message: state.app.registerContent.message,
});

const mapDispatchToProps = (dispatch) => ({
  changeValue: (name, value) => dispatch(changeInputValueInModal('register', name, value)),
  changeCheckInputValue: (name) => dispatch(changeCheckValueInModal('register', name)),
  submitRegister: () => dispatch(submitRegister()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
