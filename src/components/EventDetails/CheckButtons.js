// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';


// == Composant CheckButtons
const CheckButtons = ({ openNavModal, switchModals }) => {
  const openModals = (name) => {
    openNavModal(name);
    switchModals();
  };
  return (
    <>
      <div className="check-buttons">
        <button onClick={() => openModals('login')} type="button"> Je suis intéressé(e)</button>
        <button onClick={() => openModals('register')} type="button"> Je participe</button>
      </div>
    </>
  );
};


CheckButtons.propTypes = {
  openNavModal: PropTypes.func.isRequired,
  switchModals: PropTypes.func.isRequired,
};

// == Export
export default CheckButtons;
