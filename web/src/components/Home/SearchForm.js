// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import { addFilters } from '../../redux/actions/creators';


// == Composant SearchForm
const SearchForm = ({
  locationValue,
  keywordValue,
  handleSubmit,
  dataFilter,
  changeSearchFormValue,
}) => {
  const _onSubmit = (event) => {
    console.log('ok')
    event.preventDefault();
    const filter = [
      {address: locationValue},
      {title: keywordValue,}
    ]
    
    addFilters(filter);
    handleSubmit();
  };
  const _onChange = (event) => {
    const { value, name } = event.target;
    changeSearchFormValue(value, name);
  };
  console.log(locationValue, keywordValue)
  return (
    <div className="header-searchform">
      <h2 className="header-searchform-h2">
        A la recherche d'un événement ?
      </h2>
      <form className="header-searchform-form" onSubmit={_onSubmit}>
        <input
          type="text"
          placeholder="Lieu"
          className="header-searchform-input"
          name="address"
          value={locationValue}
          onChange={_onChange}

        />

        <input
          className="header-searchform-input"
          placeholder="Mots clés"
          name="title"
          value={keywordValue}
          onChange={_onChange}
        />
        <button className="header-searchform-submit" type="submit">Rechercher</button>

        {/* { dataFilter.length > 0 && <Route path="evenements/:address/:title" />} */}
      </form>
    </div>
  );
};


// == PropTypes
SearchForm.propTypes = {
  locationValue: PropTypes.string,
  keywordValue: PropTypes.string,
  changeSearchFormValue: PropTypes.func.isRequired,
};
SearchForm.defaultProps = {
  locationValue: '',
  keywordValue: '',
};

// == Export
export default SearchForm;
