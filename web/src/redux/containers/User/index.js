import { connect } from 'react-redux';

import {
  fetchNewUserInfos,
  closeNavMenu,
} from 'src/redux/actions/creators';

import User from 'src/components/User';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  fetchNewUserInfos: () => dispatch(fetchNewUserInfos()),
  closeNavMenu: () => dispatch(closeNavMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
