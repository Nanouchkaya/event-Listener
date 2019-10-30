// == Import : npm
import React from 'react';
import Proptypes from 'prop-types';


// == Composant RegisterForm
const RegisterForm = ({
  handleclose,
  switchModals,
  pseudo,
  email,
  password,
  confirmPassword,
  notifNewEvent,
  notifNewUpdate,
  changeValue,
  changeCheckInputValue,
  submitRegister,
  message,
}) => {
  const handleChangeValue = (event) => {
    const { name, value } = event.target;

    changeValue(name, value);
  };

  const handleCheckInputValue = (event) => {
    const { name } = event.target;

    changeCheckInputValue(name);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitRegister();
  };

  return (
    <div className="modal display-block">
      <section className="modal-main">
        <h2 className="modal-title">Inscription</h2>
        { !message.success && (
          <form className="modal-form" onSubmit={handleSubmit}>
            <input
              className="modal-form-element"
              required
              name="pseudo"
              value={pseudo}
              onChange={handleChangeValue}
              placeholder="Pseudo * (Minimum 4 caractères)"
              type="text"
            />
            <input
              className="modal-form-element"
              required
              name="email"
              value={email}
              onChange={handleChangeValue}
              placeholder="Adresse email *"
              type="email"
            />
            <input
              className="modal-form-element"
              required
              name="password"
              value={password}
              onChange={handleChangeValue}
              placeholder="Mot de passe * (Minimum 7 caractères)"
              type="password"
            />
            <input
              className="modal-form-element"
              required
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChangeValue}
              placeholder="Confirmer mot de passe *"
              type="password"
            />
            <label className="modal-form-label">
              <input
                type="checkbox"
                name="notifNewEvent"
                checked={notifNewEvent}
                onChange={handleCheckInputValue}
                className="modal-checkbox"
              />
              Recevoir un email pour chaque nouveau événement
            </label>

            <label className="modal-form-label">
              <input
                type="checkbox"
                name="notifNewUpdate"
                checked={notifNewUpdate}
                onChange={handleCheckInputValue}
                className="modal-checkbox"
              />
              Recevoir un email à la modification d'un événement
            </label>
            { message.error && (
              <div className="modal-form-message modal-form-message--error">
                { message.content.map((currentMessage) => (
                  <p key={currentMessage}>{currentMessage}</p>
                )) }
              </div>
            ) }
            <button
              className="modal-form--submit"
              type="submit"
              onSubmit={handleSubmit}
            >
              Créer le compte
            </button>
          </form>
        ) }
        { message.success && (
          <div className="modal-form-message modal-form-message--success">
            {message.content}
          </div>
        ) }
        { switchModals && <a href="#">Déja inscrit-e ?</a>}
        {/* Fermeture de la modal au click */}
        <a
          className="modal--back"
          name="register"
          onClick={handleclose}
        >
          Retour
        </a>
      </section>
    </div>
  );
};

// == PropTypes
RegisterForm.propTypes = {
  handleclose: Proptypes.func.isRequired,
  switchModals: Proptypes.bool.isRequired,
  pseudo: Proptypes.string.isRequired,
  email: Proptypes.string.isRequired,
  password: Proptypes.string.isRequired,
  confirmPassword: Proptypes.string.isRequired,
  notifNewEvent: Proptypes.bool.isRequired,
  notifNewUpdate: Proptypes.bool.isRequired,
  changeValue: Proptypes.func.isRequired,
  changeCheckInputValue: Proptypes.func.isRequired,
  submitRegister: Proptypes.func.isRequired,
  message: Proptypes.shape({
    error: Proptypes.bool,
    success: Proptypes.bool,
    content: Proptypes.array,
  }),
};

RegisterForm.defaultProps = {
  message: {
    error: false,
    success: false,
    content: null,
  },
};

// == Export
export default RegisterForm;
