// == Import : npm
import React from 'react';
import Proptypes from 'prop-types';


// == Composant RegisterForm
const RegisterForm = ({
  handleclose,
  show,
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
}) => {
  /* Affichage conditionnel de la modal */
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

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
    <div className={showHideClassName}>
      <section className="modal-main">
        <h2 className="modal-title">Inscription</h2>
        <form className="modal-form" onSubmit={handleSubmit}>
          <input
            className="modal-form-element"
            required
            name="pseudo"
            value={pseudo}
            onChange={handleChangeValue}
            placeholder="Pseudo*"
            type="text"
          />
          <input
            className="modal-form-element"
            required
            name="email"
            value={email}
            onChange={handleChangeValue}
            placeholder="Adresse email*"
            type="email"
          />
          <input
            className="modal-form-element"
            required
            name="password"
            value={password}
            onChange={handleChangeValue}
            placeholder="Mot de passe*"
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
          <button
            className="modal-form--submit"
            type="submit"
          >
            Créer le compte
          </button>
        </form>
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
  show: Proptypes.bool.isRequired,
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
};
// == Export
export default RegisterForm;
