// == Import : npm
import { connect } from 'react-redux';


// == Import : local
import Home from 'src/components/Home';


// == Import : Action Creators
import {
} from '../../actions/creators';

import {
} from '../../actions/selectors';


const mapStateToProps = (state) => ({
});


const mapDispatchToProps = (dispatch) => ({
});


// == Export
export default connect(mapStateToProps, mapDispatchToProps)(Home);
