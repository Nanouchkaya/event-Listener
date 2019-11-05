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
  addFilters,
  changeSearchFormValue,
}) => {
  const _onSubmit = (event) => {
    event.preventDefault();
    // creates an array of filters with the values entered by the user
    const filter = [
      {address: `'%${locationValue}%'`},
      {title: `'%${keywordValue}%'`},
    ]
    // sends it to the store
    addFilters(filter);
    // triggers the middleware -> sends a request to the back with the array of filters
    handleSubmit();
    // redirects the user to /evenements/:whatwastyped/:whatwastyped
    window.location.pathname = `/evenements/${locationValue} /${keywordValue} `
  };
  // allows to change inputs values
  const _onChange = (event) => {
    const { value, name } = event.target;
    changeSearchFormValue(value, name);
  };

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
      </form>
    </div>
  );
};


// == PropTypes
SearchForm.propTypes = {
  locationValue: PropTypes.string,
  keywordValue: PropTypes.string,
  changeSearchFormValue: PropTypes.func.isRequired,
  addFilters: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
SearchForm.defaultProps = {
  locationValue: '',
  keywordValue: '',
};

// == Export
export default SearchForm;
