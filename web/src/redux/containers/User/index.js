import { connect } from 'react-redux';

import { fetchNewUserInfos } from 'src/redux/actions/creators';

import User from 'src/components/User';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  fetchNewUserInfos: () => dispatch(fetchNewUserInfos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
