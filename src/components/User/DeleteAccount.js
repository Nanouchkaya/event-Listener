// import npm
import React from 'react';
import PropTypes from 'prop-types';

// import local
import './user.scss';

// composant
const DeleteAccount = ({ changeModalStatus }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Account delete');
    changeModalStatus();
  };

  return (
    <div className="delete-account">
      <form className="delete-account-modal" onSubmit={handleSubmit}>
        <button className="delete-account-modal-close-cross" type="button" onClick={changeModalStatus}>&#215;</button>
        <p className="delete-account-modal-message">
          Voulez-vous vraiment supprimer définitivement votre compte de ce site ?
        </p>
        <div className="delete-account-modal-buttons">
          <button className="button button--delete" type="submit">Supprimer mon compte</button>
          <button className="button button--cancel" type="button" onClick={changeModalStatus}>Annuler</button>
        </div>
      </form>
    </div>
  );
};

DeleteAccount.propTypes = {
  changeModalStatus: PropTypes.func.isRequired,
};

DeleteAccount.defaultProps = {

};

// export
export default DeleteAccount;