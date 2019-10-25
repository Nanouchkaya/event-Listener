import { connect } from 'react-redux';

import CheckButtons from 'src/components/EventDetails/CheckButtons';

// action creators
import {
  openNavModal,
  switchModals,
} from '../../actions/creators';


const mapStateToProps = (state) => ({
  showLogin: state.app.login,
  showRegister: state.app.register,
});

const mapDispatchToProps = (dispatch) => ({
  openNavModal: (name) => dispatch(openNavModal(name)),
  switchModals: () => dispatch(switchModals()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckButtons);
