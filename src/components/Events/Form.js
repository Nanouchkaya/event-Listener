// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';


// == Import : local
import Advanced from 'src/redux/containers/Events/Advanced';


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
      <h3>Formulaire</h3>
      <form onSubmit={_onSubmit} className="form" method="POST">
        <input
          type="text"
          className="form-input"
          placeholder="Que recherchez-vous ?"
          value={value}
          onChange={_onChange}
        />
        <h3 onClick={showAdvancedForm}>Recherche avancée</h3>
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
