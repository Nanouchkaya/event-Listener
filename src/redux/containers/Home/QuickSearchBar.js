import { connect } from 'react-redux';

import QuickSearchBar from 'src/components/Home/QuickSearchBar';

// action creators
import {
  handleSearchChange,
} from '../../actions/creators';

const mapStateToProps = (state) => ({
  searchBar: state.home.searchBar,
  value: state.home.value,
});

const mapDispatchToProps = (dispatch) => ({
  handleSearchChange: (value) => dispatch(handleSearchChange(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuickSearchBar);
