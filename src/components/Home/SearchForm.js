// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';


// == Composant SearchForm
const SearchForm = ({
  locationValue,
  keywordValue,
  handleSubmit,
  dataFilter,
  changeSearchFormValue,
}) => {
  const _onSubmit = (event) => {
    event.preventDefault();
    handleSubmit();
  };
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
        {/* <select className="header-searchform-input select">
          <option selected disabled value="All">Toutes les catégories</option>
          <option defaultValue="Catégorie 1">Catégorie 1</option>
          <option defaultValue="Catégorie 2">Catégorie 2</option>
          <option defaultValue="Catégorie 3">Catégorie 3</option>
        </select> */}
        <input
          className="header-searchform-input"
          placeholder="Mots clés"
          name="title"
          value={keywordValue}
          onChange={_onChange}
        />
        <Link to="/tous-les-evenements/paris/data" className="header-searchform-submit" type="submit">
          Rechercher
        </Link>
        { dataFilter.length > 0 && <Route exact path="/tous-les-evenements" />}
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
