import React from 'react';

const RegisterForm = ({ handleclose, show }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <h1 className="modal-h1">Inscription</h1>
        <form className="modal-form">
          <input
            className="modal-form--input"
            required
            placeholder="Pseudo *"
            type=""
          />
          <input
            className="modal-form--input"
            required
            placeholder="Adresse email *"
            type="email"
          />
          <input
            className="modal-form--input"
            required
            placeholder="Mot de passe *"
            type="password"
          />
          <input
            className="modal-form--input"
            required
            placeholder="Confirmer mot de passe *"
            type="password"
          />
        </form>
        <div className="modal-checkbox">
          <input type="checkbox" />
          <p>Recevoir des newsletters</p>
        </div>
        <div className="modal-button">
          <button
            className="modal-submit"
            type="submit"
          >
            S'inscrire
          </button>
          <button
            type="button"
            className="modal-cancel"
            onClick={handleclose}
          >
            Annuler
          </button>
        </div>
      </section>
    </div>
  );
};
export default RegisterForm;
