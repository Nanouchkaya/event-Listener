// Global import
import { connect } from 'react-redux';

// Local import
import QuickSearchBar from 'src/components/Home/QuickSearchBar';

// Actions import
import {
  handleSearchChange,
  handleSearchSubmit,
  handleQuickSearch,
} from 'src/redux/actions/temp';


const mapStateToProps = (state) => ({
  searchBar: state.home.searchBar,
  value: state.home.value,
});

const mapDispatchToProps = (dispatch) => ({
  handleSearchChange: (value) => dispatch(handleSearchChange(value)),
  handleSearchSubmit: () => dispatch(handleSearchSubmit()),
  handleQuickSearch: () => dispatch(handleQuickSearch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuickSearchBar);
