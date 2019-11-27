// Global import
import { connect } from 'react-redux';

// Local import
import LoginForm from 'src/components/Modal/LoginForm';

// Actions import
import {
  changeInputValueInModal,
  changeCheckValueInModal,
  submitLogin,
} from 'src/redux/actions/user';


const mapStateToProps = (state) => ({
  email: state.app.loginContent.email,
  password: state.app.loginContent.password,
  stayLoggedIn: state.app.loginContent.stayLoggedIn,
  message: state.app.loginContent.message,
});

const mapDispatchToProps = (dispatch) => ({
  changeValue: (name, value) => dispatch(changeInputValueInModal('login', name, value)),
  changeCheckInputValue: (name) => dispatch(changeCheckValueInModal('login', name)),
  submitLogin: () => dispatch(submitLogin()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
