// == Import : npm
import { connect } from 'react-redux';


// == Import : local
import Events from 'src/components/Events';


// == Import : Action Creators
import {} from '../../actions/creators';


const mapStateToProps = (state) => ({
  data: state.form.data,
  value: state.form.value,
});


const mapDispatchToProps = (dispatch) => ({});


// == Export
export default connect(mapStateToProps, mapDispatchToProps)(Events);
