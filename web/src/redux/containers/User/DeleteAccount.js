import { connect } from 'react-redux';

import DeleteAccount from 'src/components/User/DeleteAccount';

// import action creactors
import {
  deleteUser,
} from '../../actions/creators';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  deleteUser: () => dispatch(deleteUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteAccount);
