// Global import
import { connect } from 'react-redux';

// Local import
import User from 'src/components/User';

// Actions import
import {
  fetchNewUserInfos,
} from 'src/redux/actions/user';
import {
  closeNavMenu,
} from 'src/redux/actions';


const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  fetchNewUserInfos: () => dispatch(fetchNewUserInfos()),
  closeNavMenu: () => dispatch(closeNavMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
