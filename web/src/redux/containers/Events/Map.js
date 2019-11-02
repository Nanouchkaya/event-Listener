import { connect } from 'react-redux';
import Test from 'src/components/Events/Map';


// action creators
import {} from '../../actions/creators';

const mapStateToProps = (state) => ({
  data: state.form.data,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Test);
