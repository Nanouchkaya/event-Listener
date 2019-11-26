// Global import
import { connect } from 'react-redux';

// Local import
import DeleteAccount from 'src/components/User/DeleteAccount';

// Actions import
import {
  deleteUser,
} from 'src/redux/actions/user';


const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  deleteUser: () => dispatch(deleteUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteAccount);
