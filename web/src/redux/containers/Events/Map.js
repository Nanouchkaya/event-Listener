import { connect } from 'react-redux';
import EventsMap from 'src/components/Events/Map';


// action creators
import {} from '../../actions/creators';

const mapStateToProps = (state) => ({
  data: state.form.data,
  quickSearchData: state.home.quickSearchData,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(EventsMap);
