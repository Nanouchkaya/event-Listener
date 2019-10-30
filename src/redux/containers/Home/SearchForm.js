import { connect } from 'react-redux';

import SearchForm from 'src/components/Home/SearchForm';

// action creators
import {
  changeSearchFormValue,
  handleSearchFormChange,
  emptyFormValue,
  handleSubmit,
  fillFilterList,
  addFilters,
} from '../../actions/creators';

const mapStateToProps = (state) => ({
  locationValue: state.home.address,
  keywordValue: state.home.title,
  filterList: state.form.filterList,
  dataFilter: state.form.dataFilter,
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchFormValue: (value, name) => dispatch(changeSearchFormValue(value, name)),
  handleSearchFormChange: (value) => dispatch(handleSearchFormChange(value)),
  handleSubmit: () => dispatch(handleSubmit()),
  addFilters: (filters) => dispatch(addFilters(filters)),
  emptyFormValue: () => dispatch(emptyFormValue()),
  fillFilterList: (filterList) => dispatch(fillFilterList(filterList)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
