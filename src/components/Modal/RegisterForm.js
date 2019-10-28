// == Import : npm
import React from 'react';
import Proptypes from 'prop-types';


// == Composant RegisterForm
const RegisterForm = ({
  handleclose,
  show,
}) => {
  /* Affichage conditionnel de la modal */
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <h2 className="modal-title">Inscription</h2>
        <form className="modal-form">
          <input
            className="modal-form-element"
            required
            placeholder="Pseudo*"
            type=""
          />
          <input
            className="modal-form-element"
            required
            placeholder="Adresse email*"
            type="mail"
          />
          <input
            className="modal-form-element"
            required
            placeholder="Mot de passe*"
            type="password"
          />
          <input
            className="modal-form-element"
            required
            placeholder="Confirmer mot de passe *"
            type="password"
          />
          <label className="modal-form-label">
            <input type="checkbox" className="modal-checkbox" />
            Recevoir un email pour chaque nouvel événement
          </label>

          <label className="modal-form-label">
            <input type="checkbox" className="modal-checkbox" />
            Recevoir un email à la modification d'un événement
          </label>
          <button
            className="modal-form--submit"
            type="submit"
          >
            Créer le compte
          </button>
        </form>
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
  show: Proptypes.bool.isRequired,
  switchModals: Proptypes.bool.isRequired,
};
// == Export
export default RegisterForm;
