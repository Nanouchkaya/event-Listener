import { connect } from 'react-redux';

import LoginForm from 'src/components/Modal/LoginForm';

// action creators
import {
  changeInputValueInModal,
  changeCheckValueInModal,
  submitLogin,
} from '../../actions/creators';

const mapStateToProps = (state) => ({
  email: state.app.loginContent.email,
  password: state.app.loginContent.password,
  stayLoggedIn: state.app.loginContent.stayLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  changeValue: (name, value) => dispatch(changeInputValueInModal('login', name, value)),
  changeCheckInputValue: (name) => dispatch(changeCheckValueInModal('login', name)),
  submitLogin: () => dispatch(submitLogin()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
