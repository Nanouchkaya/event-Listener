// == Import : npm
import React from 'react';
import Proptypes from 'prop-types';


// == Composant LoginForm
const LoginForm = ({ handleclose, show, switchModals }) => {
  /* Affichade conditionnel de la modal */
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <h2 className="modal-title">Connexion</h2>
        <form className="modal-form">
          <input
            className="modal-form-element"
            required
            placeholder="Adresse email*"
            type="mail"
            autoComplete="new-password"
          />
          <input
            className="modal-form-element"
            required
            placeholder="Mot de passe*"
            type="password"
            autoComplete="new-password"
          />

          <button
            className="modal-form--submit"
            type="submit"
          >
          Se connecter
          </button>
        </form>
        <label className="modal--checkbox-label">
          <input type="checkbox" className="modal-checkbox" />
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
  handleclose: Proptypes.func.isRequired,
  show: Proptypes.bool.isRequired,
  switchModals: Proptypes.bool.isRequired,
};


// == Export
export default LoginForm;
