// Global import
import { connect } from 'react-redux';

// Local import
import Description from 'src/components/EventDetails/Description';


const mapStateToProps = (state) => ({
  description: state.eventDetails.data.description,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Description);
