import { connect } from 'react-redux';

import Nav from 'src/components/App/Nav';

import {
  openNavModal,
  activeNavMenu,
  deconnect,
} from '../../actions/creators';

const mapStateToProps = (state) => ({
  menuBurger: state.app.menuBurger,
  menuIcon: state.app.menuIcon,
  showLogin: state.app.login,
  showRegister: state.app.register,
  cancelIcon: state.app.cancelIcon,
  isConnected: state.app.isConnected,
  pseudo: state.user.pseudo,
});

const mapDispatchToProps = (dispatch) => ({
  openNavModal: (name) => dispatch(openNavModal(name)),
  activeNavMenu: () => dispatch(activeNavMenu()),
  deconnect: () => dispatch(deconnect()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
