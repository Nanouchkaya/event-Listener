// Global import
import { connect } from 'react-redux';

// Local import
import App from 'src/components/App';

// Actions import
import {
  closeNavMenu,
} from 'src/redux/actions';
import {
  checkConnect,
} from 'src/redux/actions/user';


const mapStateToProps = (state) => ({
  isConnected: state.app.isConnected,
});

const mapDispatchToProps = (dispatch) => ({
  checkConnect: () => dispatch(checkConnect()),
  closeNavMenu: () => dispatch(closeNavMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
