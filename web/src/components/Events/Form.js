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
<<<<<<< HEAD:src/components/Events/Form.js
  formValue,
  advanced,
  triggerMiddleware,
  addFilters,
  fillFilterList,
  filterList,
  emptyFormValue,
=======
  value,
  advanced,
  triggerMiddleware,
>>>>>>> 394ba5dda0f515c9edc902e1156b3c35ed73175e:web/src/components/Events/Form.js
}) => {
  const _onSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
    emptyFormValue();
    addFilters(filterList);
    handleSubmit();
  };
  const _onChange = (event) => {
    handleFormChange(event.target.value);
    triggerMiddleware();
  };
<<<<<<< HEAD:src/components/Events/Form.js
  const _onBlur = (event) => {
    const { value, name } = event.target;
    handleFormChange(value);
    const filter = {
      [name]: `'%${formValue}%'`,
    };
    fillFilterList(filter);
  };
  return (
    <>
      <h3>Formulaire</h3>
      <form onSubmit={_onSubmit} className="form" method="POST">
=======

  return (
    <>
      <form onSubmit={_onSubmit} className="form">
>>>>>>> 394ba5dda0f515c9edc902e1156b3c35ed73175e:web/src/components/Events/Form.js
        <input
          type="text"
          className="form-input"
          placeholder="Que recherchez-vous ?"
<<<<<<< HEAD:src/components/Events/Form.js
          value={formValue}
          name="title"
          onChange={_onChange}
          onBlur={_onBlur}
        />
        <h3 onClick={showAdvancedForm}>Recherche avancée</h3>
=======
          value={value}
          onChange={_onChange}
        />
        <button type="button" onClick={showAdvancedForm} className="form-button">
          Voir plus de filtres
        </button>
>>>>>>> 394ba5dda0f515c9edc902e1156b3c35ed73175e:web/src/components/Events/Form.js
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
<<<<<<< HEAD:src/components/Events/Form.js
  formValue: PropTypes.string,
  triggerMiddleware: PropTypes.func.isRequired,
  addFilters: PropTypes.func,
  fillFilterList: PropTypes.func,
  filterList: PropTypes.array.isRequired,
=======
  value: PropTypes.string,
  triggerMiddleware: PropTypes.func.isRequired,
>>>>>>> 394ba5dda0f515c9edc902e1156b3c35ed73175e:web/src/components/Events/Form.js
};
Form.defaultProps = {
  formValue: '',
  addFilters: undefined,
  fillFilterList: undefined,
};


// == Export
export default Form;
