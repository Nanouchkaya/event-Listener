import React from 'react';

const LoginForm = ({ handleClose, show }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <h1 className="modal-h1">Connexion</h1>
        <form className="modal-form">
          <input
            className="modal-form--input"
            required
            placeholder="Adresse email *"
            type="mail"
            autoComplete="new-password"
          />
          <input
            className="modal-form--input"
            required
            placeholder="Mot de passe *"
            type="password"
            autoComplete="new-password"
          />
        </form>

        <div className="modal-checkbox">
          <input type="checkbox" />
          <p>Rester connecté</p>
        </div>

        <div className="modal-button">
          <button
            className="modal-submit"
            type="submit"
          >
            Se connecter
          </button>
          <label className="modal-link">
            Mot de passe oublié ?
          </label>
          <button
            type="button"
            className="modal-cancel"
            onClick={handleClose}
          >
            Annuler
          </button>
        </div>
      </section>
    </div>
  );
};

export default LoginForm;
