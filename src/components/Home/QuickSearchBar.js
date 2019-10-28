// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';


// == Composant QuickSearchBar
const QuickSearchBar = ({
  value,
  handleSearchChange,
}) => (
  <form className="searchbar-visible">
    <input
      type="search"
      className="searchbar-input"
      placeholder="Recherche..."
      value={value}
      /* Récupération de la valeur entrée dans l'input */
      onChange={(event) => handleSearchChange(event.target.value)}
    />
  </form>
);


// == PropTypes
QuickSearchBar.propTypes = {
  value: PropTypes.string,
  handleSearchChange: PropTypes.func.isRequired,
};
QuickSearchBar.defaultProps = {
  value: '',
};


// == Export
export default QuickSearchBar;
