// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';


// == Composant Inputs
const Inputs = ({ children }) => (
  <>
    <input type="checkbox" id={children} className="advanced-filter-input" name={children} value={children} />
    <label htmlFor={children}>{children}</label>
  </>
);


// == PropTypes
Inputs.propTypes = {
  children: PropTypes.string.isRequired,
};


// == Export
export default Inputs;
