// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';


// == Import : local
import Advanced from './Advanced';


// == Composant Form
const Form = ({ handleChange, handleSubmit, value }) => {
  const _onSubmit = (event) => {
    event.preventDefault();
    handleSubmit();
  };

  return (
    <>
      <h3>Formulaire</h3>
      <form onSubmit={_onSubmit} className="form">
        <input
          type="text"
          className="form-input"
          placeholder="Que recherchez-vous ?"
          value={value}
          onChange={(event) => handleChange(event.target.value)}
        />

        { value.trim().length > 0 && <Advanced /> }

        <input
          type="submit"
          className="form-button"
          value="Rechercher"
        />
      </form>
    </>
  );
};


// == PropTypes
Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  value: PropTypes.string,
};
Form.defaultProps = {
  value: '',
};


// == Export
export default Form;
