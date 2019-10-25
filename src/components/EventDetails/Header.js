import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import ShareLinks from 'src/components/Modal/ShareLinks';
import shareIcon from 'src/assets/images/icons/icons8-share-50.png';
import banner from 'src/assets/images/event.png';
import heartIcon from 'src/assets/images/icons/icons8-heart-50.png';
import heartCheckedIcon from 'src/assets/images/icons/icons8-heart-checked-50.png';

// == Composant Header
const Header = ({
  showModal,
  likeIcon,
  changeHeartIcon,
  openShareModal,
  closeShareModal,
}) => {
  /* CSS permettant d'avoir l'image d'un évènement en bannière */
  const bannerStyle = {
    backgroundImage: `url(${banner})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  };

  /* Si la props likeIcon vaut "true" je change d'icon */
  const iconHeart = likeIcon ? heartCheckedIcon : heartIcon;

  return (
    <div className="event-header">
      <div className="event-header-banner" style={bannerStyle}>
        Banniere-evenement
      </div>

      <div className="event-header-infos">
        <h1 className="event-header-infos-name">
        DataJob Paris 2019 <em>par DataJob</em>
        </h1>
        <div className="event-header-bottom">
          <div className="event-header-bottom-icons">

            {/* Passage de true/false au click sur l'icon */}
            <button
              type="button"
              onClick={changeHeartIcon}
            >
              <img alt="like" src={iconHeart} />
            </button>

            {/* Passage de false/true au click sur l'icon de partage */}
            <button
              type="button"
              onClick={openShareModal}
            >
              <img alt="share" src={shareIcon} />
            </button>

            {/* Affichage de la modal que si showModal vaut "true" */}
            { showModal && <ShareLinks closeModal={closeShareModal} /> }
          </div>
          <span className="event-header-bottom-price">Evenement Payant</span>
        </div>
      </div>

      <div className="event-header-status-date">
        <span>A venir</span>
        <time>Nov. 12</time>
      </div>
    </div>
  );
};


// == PropTypes
Header.propTypes = {
  showModal: PropTypes.bool.isRequired,
  likeIcon: PropTypes.bool.isRequired,
  changeHeartIcon: PropTypes.func.isRequired,
  openShareModal: PropTypes.func.isRequired,
  closeShareModal: PropTypes.func.isRequired,
};


// == Export
export default Header;
