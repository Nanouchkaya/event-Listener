// Global import
import { connect } from 'react-redux';

// Local import
import Preferences from 'src/components/User/Preferences';

// Actions import
import {
  changeInputValue,
  changeModalStatus,
  changeCheckInputValue,
  handleChangEditorModeDisabled,
  changeUpdateUser,
  deleteShowMessage,
} from 'src/redux/actions/user';


const mapStateToProps = (state) => ({
  user: state.user,
  pseudo: state.user.pseudo,
  urlAvatar: state.user.urlAvatar,
  firstname: state.user.firstname,
  lastname: state.user.lastname,
  email: state.user.email,
  password: state.user.password,
  confirmPassword: state.user.confirmPassword,
  notifNewEvent: state.user.notifNewEvent,
  notifNewUpdate: state.user.notifNewUpdate,
  message: state.user.message,
  editorModeDisabled: state.user.editorModeDisabled,
  modalStatus: state.user.modalStatus,
});

const mapDispatchToProps = (dispatch) => ({
  changeValue: (name, value) => dispatch(changeInputValue(name, value)),
  changeModalStatus: () => dispatch(changeModalStatus()),
  changeCheckInputValue: (name) => dispatch(changeCheckInputValue(name)),
  handleChangEditorMode: () => dispatch(handleChangEditorModeDisabled()),
  updateValueUser: (user) => dispatch(changeUpdateUser(user)),
  deleteShowMessage: () => dispatch(deleteShowMessage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Preferences);
