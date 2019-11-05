// == Import : npm
import { connect } from 'react-redux';


// == Import : local
import Event from 'src/components/Events/Event';


// == Import : Action Creators
import {
  getEventDetails,
} from '../../actions/creators';

import {
  getCity,
} from '../../actions/selectors';


const mapStateToProps = (state) => ({
  getCity,
});


const mapDispatchToProps = (dispatch) => ({
  getEventDetails: (id) => dispatch(getEventDetails(id)),
});


// == Export
export default connect(mapStateToProps, mapDispatchToProps)(Event);
