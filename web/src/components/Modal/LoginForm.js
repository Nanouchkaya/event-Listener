// == Import : npm
import React from 'react';
import Proptypes from 'prop-types';


// == Composant LoginForm
const LoginForm = ({
  email,
  password,
  stayLoggedIn,
  handleclose,
  changeValue,
  changeCheckInputValue,
  submitLogin,
  switchModals,
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
    submitLogin();
  };
  return (
    <div className="modal display-block">
      <section className="modal-main">
        <h2 className="modal-title">Connexion</h2>
        <form className="modal-form" onSubmit={handleSubmit}>
          <input
            className="modal-form-element"
            required
            placeholder="Adresse email*"
            type="email"
            name="email"
            value={email}
            onChange={handleChangeValue}
          />
          <input
            className="modal-form-element"
            required
            placeholder="Mot de passe*"
            type="password"
            name="password"
            value={password}
            onChange={handleChangeValue}
          />
          { message.error && (
            <div className="modal-form-message modal-form-message--error">
              {message.content}
            </div>
          ) }
          <button
            className="modal-form--submit"
            type="submit"
          >
          Se connecter
          </button>
        </form>
        <label className="modal--checkbox-label">
          <input
            type="checkbox"
            className="modal-checkbox"
            name="stayLoggedIn"
            checked={stayLoggedIn}
            onChange={handleCheckInputValue}
          />
          Rester connecté
        </label>
        { switchModals && <a href="#">Pas encore inscrit-e?</a> }
        {/* Fermeture de la modal au click */}
        <a
          className="modal--back"
          name="login"
          onClick={handleclose}
        >
          Retour
        </a>
      </section>
    </div>
  );
};


// == PropTypes
LoginForm.propTypes = {
  email: Proptypes.string.isRequired,
  password: Proptypes.string.isRequired,
  stayLoggedIn: Proptypes.bool.isRequired,
  handleclose: Proptypes.func.isRequired,
  changeValue: Proptypes.func.isRequired,
  changeCheckInputValue: Proptypes.func.isRequired,
  submitLogin: Proptypes.func.isRequired,
  switchModals: Proptypes.bool.isRequired,
  message: Proptypes.shape({
    error: Proptypes.bool,
    content: Proptypes.string,
  }),
};

LoginForm.defaultProps = {
  message: {
    error: false,
    content: null,
  },
};

// == Export
export default LoginForm;
