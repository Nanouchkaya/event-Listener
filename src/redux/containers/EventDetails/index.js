import { connect } from 'react-redux';

import EventDetails from 'src/components/EventDetails';

const mapStateToProps = (state) => ({
  isConnected: state.app.isConnected,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(EventDetails);
