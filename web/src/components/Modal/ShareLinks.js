// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';


// == Import : local
import './modal.scss';
import cancelIcon from 'src/assets/images/icons/icons8-cancel-50.png';
import facebookIcon from 'src/assets/images/icons/icons8-facebook-50.png';
import facebookMessenger from 'src/assets/images/icons//facebook-messenger.png';
import twitterIcon from 'src/assets/images/icons/icons8-twitter-50.png';
import mailIcon from 'src/assets/images/icons/mail.png';


// == Composant ShareLinks
const ShareLinks = ({ closeModal }) => (
  <div className="share-links-modal">
    <div>
    {/* Fermeture de la modal au click */}
      <img onClick={closeModal} className="share-links-modal-close" alt="close-icon" src={cancelIcon} />
      <img alt="fb-icon" src={facebookIcon} />
      <img alt="fb-mes-icon" src={facebookMessenger} />
      <img alt="twi-icon" src={twitterIcon} />
      <img alt="mail-icon" src={mailIcon} />
      <h5>Partager avec les amis</h5>
    </div>
  </div>
);


// == PropTypes
ShareLinks.propTypes = {
  closeModal: PropTypes.func.isRequired,
};


// == Export
export default ShareLinks;
