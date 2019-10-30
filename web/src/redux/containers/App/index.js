import { connect } from 'react-redux';

import App from 'src/components/App';

import {
  checkConnect,
} from '../../actions/creators';

const mapStateToProps = (state) => ({
  isConnected: state.app.isConnected,
});

const mapDispatchToProps = (dispatch) => ({
  checkConnect: () => dispatch(checkConnect()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
