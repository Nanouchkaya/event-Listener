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
  formValue,
  advanced,
  triggerMiddleware,
  addFilters,
  fillFilterList,
  filterList,
  emptyFormValue,
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
        <input
          type="text"
          className="form-input"
          placeholder="Que recherchez-vous ?"
          value={formValue}
          name="title"
          onChange={_onChange}
          onBlur={_onBlur}
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
  formValue: PropTypes.string,
  triggerMiddleware: PropTypes.func.isRequired,
  addFilters: PropTypes.func,
  fillFilterList: PropTypes.func,
  filterList: PropTypes.array.isRequired,
};
Form.defaultProps = {
  formValue: '',
  addFilters: undefined,
  fillFilterList: undefined,
};


// == Export
export default Form;
