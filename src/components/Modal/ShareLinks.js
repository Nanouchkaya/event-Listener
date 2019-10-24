import React from 'react';
import PropTypes from 'prop-types';

import './modal.scss';

const ShareLinks = ({ closeModal }) => (
  <div className="share-links-modal">
    <div>
      <h3>Partager avec les amis</h3>
      <img onClick={closeModal} className="share-links-modal-close" alt="close-icon" src="https://img.icons8.com/ios-filled/50/000000/close-window.png" />
      <img alt="fb-icon" src="https://img.icons8.com/nolan/64/000000/facebook-new.png" />
      <img alt="fb-mes-icon" src="https://img.icons8.com/nolan/64/000000/facebook-messenger.png" />
      <img alt="twi-icon" src="https://img.icons8.com/nolan/64/000000/twitter.png" />
      <img alt="mail-icon" src="https://img.icons8.com/nolan/64/000000/important-mail.png" />
    </div>
  </div>
);

ShareLinks.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default ShareLinks;
