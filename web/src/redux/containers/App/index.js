import { connect } from 'react-redux';

import App from '../../../components/App';

import {
  checkConnect,
  closeNavMenu,
} from '../../actions/creators';

const mapStateToProps = (state) => ({
  isConnected: state.app.isConnected,
});

const mapDispatchToProps = (dispatch) => ({
  checkConnect: () => dispatch(checkConnect()),
  closeNavMenu: () => dispatch(closeNavMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
