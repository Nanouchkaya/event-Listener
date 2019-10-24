import { connect } from 'react-redux';

import QuickSearchBar from 'src/components/Home/QuickSearchBar';

// action creators
import {
  handleChange,
} from '../../actions/creators';

const mapStateToProps = (state) => ({
  searchBar: state.home.searchBar,
  value: state.home.value,
});

const mapDispatchToProps = (dispatch) => ({
  handleChange: (value) => dispatch(handleChange(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuickSearchBar);
