import { connect } from 'react-redux';

import Preferences from 'src/components/User/Preferences';

// import action creactors
import {
  changeInputValue,
  changeModalStatus,
  changeCheckInputValue,
  handleChangEditorModeDisabled,
  changeUpdateUser,
} from '../../actions/creators';

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
  editorModeDisabled: state.user.editorModeDisabled,
  modalStatus: state.user.modalStatus,
});

const mapDispatchToProps = (dispatch) => ({
  changeValue: (name, value) => dispatch(changeInputValue(name, value)),
  changeModalStatus: () => dispatch(changeModalStatus()),
  changeCheckInputValue: (name) => dispatch(changeCheckInputValue(name)),
  handleChangEditorMode: () => dispatch(handleChangEditorModeDisabled()),
  updateValueUser: (user) => dispatch(changeUpdateUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Preferences);
