// Global import
import { connect } from 'react-redux';

// Local import
import Tags from 'src/components/EventDetails/Tags';


const mapStateToProps = (state) => ({
  tags: state.eventDetails.data.tags,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Tags);
