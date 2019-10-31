import { connect } from 'react-redux';
import Address from 'src/components/EventDetails/Address';

const mapStateToProps = (state) => ({
  address: state.eventDetails.data.address,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Address);
