// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';


// == Import : local
import './user.scss';
import DeleteAccount from 'src/containers/User/DeleteAccount';

// == Composant Preferences
const Preferences = ({
  user,
  firstname,
  lastname,
  email,
  password,
  confirmPassword,
  notifNewEvent,
  notifNewUpdate,
  message,
  changeCheckInputValue,
  changeValue,
  modalStatus,
  changeModalStatus,
  editorModeDisabled,
  handleChangEditorMode,
  updateValueUser,
  deleteShowMessage,
}) => {
  /* Passade de true/false pour affichage des modals */
  const handleChangeModalStatus = () => {
    changeModalStatus();
  };

  const handleChangEditorModeDisabled = (event) => {
    event.preventDefault();
    handleChangEditorMode();
  };

  /* Permet de récupérer la valeur entrée dans l'input */
  const handleChangeValue = (event) => {
    const { value, name } = event.target;
    changeValue(name, value);
  };

  /* Passage de true/false sur les checkbox */
  const handleChangeCheckValue = (event) => {
    const { name } = event.target;
    changeCheckInputValue(name);
  };

  /* Update User*/
  const handleUpdateUser = (event) => {
    event.preventDefault();
    updateValueUser(user);
  };

  const handleDeleteMessage = () => {
    deleteShowMessage();
  };

  return (
    <section className="preferences">
      <h2 className="preferences-title">
        Mes informations
      </h2>
      <form className="preferences-infos" onSubmit={handleUpdateUser}>
        <div className="preferences-infos-container">
          <div className="content content--left">

            <label
              className="content-input-label-field"
              htmlFor="lastnameInput"
            >
              Nom :
            </label>
            <input
              className="content-input-field"
              id="lastnameInput"
              name="lastname"
              type="text"
              placeholder="À modifier"
              value={lastname}
              disabled={editorModeDisabled}
              onChange={handleChangeValue}
            />

            <label
              className="content-input-label-field"
              htmlFor="firstnameInput"
            >
              Prenom :
            </label>
            <input
              className="content-input-field"
              id="firstnameInput"
              name="firstname"
              type="text"
              placeholder="À modifier"
              value={firstname}
              disabled={editorModeDisabled}
              onChange={handleChangeValue}
            />

            <label
              className="content-input-label-field"
              htmlFor="emailInput"
            >
              Adresse mail :
            </label>
            <input
              className="content-input-field"
              id="emailInput"
              name="email"
              type="email"
              value={email}
              disabled={editorModeDisabled}
              onChange={handleChangeValue}
            />
            { !editorModeDisabled && (
              <>
                <label
                  className="content-input-label-field"
                  htmlFor="passwordInput"
                >
                  Mot de passe :
                </label>
                <input
                  className="content-input-field"
                  id="passwordInput"
                  name="password"
                  type="password"
                  value={password}
                  onChange={handleChangeValue}
                />
                <label
                  className="content-input-label-field"
                  htmlFor="confirmPasswordInput"
                >
                  Confirmer :
                </label>
                <input
                  className="content-input-field"
                  id="confirmPasswordInput"
                  name="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={handleChangeValue}
                />
              </>
            ) }
          </div>

          <div className="content content--right">
            <div className="content-input-checkbox">
              <input
                className="checkbox"
                id="notifNewEvent"
                name="notifNewEvent"
                type="checkbox"
                disabled={editorModeDisabled}
                checked={notifNewEvent}
                onClick={handleChangeCheckValue}
              />
              <label
                className="label"
                htmlFor="notifNewEvent"
              >
                Recevoir un email pour chaque nouvel événement
              </label>
            </div>

            <div className="content-input-checkbox">
              <input
                className="checkbox"
                id="notifNewUpdate"
                name="notifNewUpdate"
                type="checkbox"
                disabled={editorModeDisabled}
                checked={notifNewUpdate}
                onChange={handleChangeCheckValue}
              />
              <label
                className="label"
                htmlFor="notifNewUpdate"
              >
                Recevoir un email à la modification d'un événement
              </label>
            </div>
            <div className="preferences-infos-buttons">
              { editorModeDisabled && (
                <button
                  className="button button--mode-editor"
                  type="button"
                  onClick={handleChangEditorModeDisabled}
                >
                  Modifier mes informations
                </button>
              ) }
              { !editorModeDisabled && (
                <button
                  className="button button--validate-preferences"
                  type="submit"
                >
                  Valider mes modifications
                </button>
              ) }
              <button
                className="button button--delete-account"
                type="button"
                onClick={handleChangeModalStatus}
              >
                Supprimer mon compte
              </button>
            </div>
            { message.content && (
              (
                <div className={`content-message content-message--${message.type}`} onClick={handleDeleteMessage}>
                  {message.content}
                </div>
              )
            ) }
          </div>
        </div>
      </form>
      { modalStatus && (
        <DeleteAccount changeModalStatus={handleChangeModalStatus} />
      ) }
    </section>
  );
};


// == PropTypes
Preferences.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string,
  confirmPassword: PropTypes.string,
  notifNewEvent: PropTypes.bool.isRequired,
  notifNewUpdate: PropTypes.bool.isRequired,
  message: PropTypes.object.isRequired,
  changeValue: PropTypes.func.isRequired,
  changeCheckInputValue: PropTypes.func.isRequired,
  modalStatus: PropTypes.bool.isRequired,
  changeModalStatus: PropTypes.func.isRequired,
  editorModeDisabled: PropTypes.bool.isRequired,
  handleChangEditorMode: PropTypes.func.isRequired,
  updateValueUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  deleteShowMessage: PropTypes.func.isRequired,
};

Preferences.defaultProps = {
  password: '',
  confirmPassword: '',
};

// == Export
export default Preferences;
