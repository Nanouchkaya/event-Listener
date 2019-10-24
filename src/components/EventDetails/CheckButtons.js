// == Import : npm
import React from 'react';

import LoginForm from 'src/components/Modal/LoginForm';
import RegisterForm from 'src/components/Modal/RegisterForm';


// == Composant CheckButtons
const CheckButtons = ({ showLogin, showRegister, openNavModal }) => {
  const closeModals = (event) => {
    console.log(event);
    openNavModal(event.target.name);
  };
  return (
    <div className="check-buttons">
      <button onClick={() => openNavModal('login')} type="button"> Je suis intéressé(e)</button>
      <button onClick={() => openNavModal('login')} type="button"> Je participe</button>
      { showLogin
        && (
        <LoginForm show={showLogin}>
          {/* <a href="#" onClick={() => openNavModal('register')}>Pas encore inscrit-e ?</a>
          { showRegister && <RegisterForm show={showRegister} handleClose={closeModals} /> } */}
        </LoginForm>
        )}
    </div>
  );
};


// == Export
export default CheckButtons;
