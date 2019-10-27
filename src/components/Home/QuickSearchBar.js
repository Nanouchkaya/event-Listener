// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';


// == Composant QuickSearchBar
const QuickSearchBar = ({
  value,
  handleChange,
}) => (
  <form className="searchbar-visible">
    <input
      type="search"
      className="searchbar-input"
      placeholder="Recherche..."
      value={value}
      /* Récupération de la valeur entrée dans l'input */
      onChange={(event) => handleChange(event.target.value)}
    />
  </form>
);


// == PropTypes
QuickSearchBar.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};
QuickSearchBar.defaultProps = {
  value: '',
};


// == Export
export default QuickSearchBar;
