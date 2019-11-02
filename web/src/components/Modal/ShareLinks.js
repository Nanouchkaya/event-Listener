// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { FacebookShareButton, TwitterShareButton, EmailShareButton } from 'react-share';


// == Import : local
import './modal.scss';
import cancelIcon from 'src/assets/images/icons/icons8-cancel-50.png';
import facebookIcon from 'src/assets/images/icons/icons8-facebook-50.png';
import twitterIcon from 'src/assets/images/icons/icons8-twitter-50.png';
import mailIcon from 'src/assets/images/icons/mail.png';




// == Composant ShareLinks
const ShareLinks = ({ closeModal }) => {

const shareUrl = `eventListener.eu${location.pathname}`;
const shareText = `Viens découvrir cet événement : ${shareUrl}. Plus d'infos sur eventListener.eu`;

return (
  <div className="share-links-modal">
    <div>
    {/* Fermeture de la modal au click */}
      <button>
        <img onClick={closeModal} className="share-links-modal-close" alt="close-icon" src={cancelIcon} />
      </button>

      <FacebookShareButton
        url={shareUrl}
        quote={shareText}
      >
        <button>
          <img alt="fb-icon" src={facebookIcon} />
        </button>
      </FacebookShareButton>

      <TwitterShareButton
        url={shareUrl}
        title={shareText}
      >
        <button>
          <img alt="twi-icon" src={twitterIcon} />
        </button>
      </TwitterShareButton>
      
      <EmailShareButton
        subject={"Check out this event on eventlistener.eu"}
        body={`${shareText}: ${shareUrl}`}
      >
        <button>
          <img alt="mail-icon" src={mailIcon} />
        </button>
      </EmailShareButton>
      
      <h5>Partager avec les amis</h5>
    </div>
  </div>
);  
}




// == PropTypes
ShareLinks.propTypes = {
  closeModal: PropTypes.func.isRequired,
};


// == Export
export default ShareLinks;
