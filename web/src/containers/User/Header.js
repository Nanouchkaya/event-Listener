// Global import
import { connect } from 'react-redux';

// Local import
import Header from 'src/components/User/Header';


const mapStateToProps = (state) => ({
  pseudo: state.user.pseudo,
  urlAvatar: state.user.urlAvatar,
  firstname: state.user.firstname,
  lastname: state.user.lastname,
  email: state.user.email,
  password: state.user.password,
  confirmePassword: state.user.confirmePassword,
  notifNewEvent: state.user.notifNewEvent,
  notifNewUpdate: state.user.notifNewUpdate,
  editorModeDisabled: state.user.editorModeDisabled,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
