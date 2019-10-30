// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';


// == Import : local
import Advanced from './Advanced';


// == Composant Form
const Form = ({
  handleFormChange,
  handleSubmit,
  showAdvancedForm,
  value,
  advanced,
  triggerMiddleware,
}) => {
  const _onSubmit = (event) => {
    event.preventDefault();
    handleSubmit();
  };
  const _onChange = (event) => {
    handleFormChange(event.target.value);
    triggerMiddleware();
  };

  return (
    <>
      <form onSubmit={_onSubmit} className="form">
        <input
          type="text"
          className="form-input"
          placeholder="Que recherchez-vous ?"
          value={value}
          onChange={_onChange}
        />
        <button type="button" onClick={showAdvancedForm} className="form-button">
          Voir plus de filtres
        </button>
        { advanced && <Advanced /> }
      </form>
    </>
  );
};


// == PropTypes
Form.propTypes = {
  handleFormChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  showAdvancedForm: PropTypes.func.isRequired,
  advanced: PropTypes.bool.isRequired,
  value: PropTypes.string,
  triggerMiddleware: PropTypes.func.isRequired,
};
Form.defaultProps = {
  value: '',
};


// == Export
export default Form;
