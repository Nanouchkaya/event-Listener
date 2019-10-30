import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import ShareLinks from 'src/components/Modal/ShareLinks';
import shareIcon from 'src/assets/images/icons/icons8-share-50.png';
import heartIcon from 'src/assets/images/icons/icons8-heart-50.png';
import heartCheckedIcon from 'src/assets/images/icons/icons8-heart-checked-50.png';

// == Composant Header
const Header = ({
  showModal,
  likeIcon,
  changeHeartIcon,
  openShareModal,
  closeShareModal,
  banner,
  title,
  price,
  dateStart,
  dateEnd,
  getEventStatus,
  urlLive,
  isOnline,
}) => {
  /* Si la props likeIcon vaut "true" je change d'icon */
  const iconHeart = likeIcon ? heartCheckedIcon : heartIcon;
  const payant = price ? 'Payant' : 'Gratuit';
  const eventStatut = getEventStatus(dateStart, dateEnd);
  const onlineClass = isOnline ? 'event-link-online' : 'event-link-offline';

  return (
    <div className="event-header">
      <div
        className="event-header-banner"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        Banniere-evenement
      </div>

      <div className="event-header-infos">
        <h1 className="event-header-infos-name">
          {title}
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
          <span className="event-header-bottom-price">{payant}</span>
        </div>
      </div>

      <div className="event-header-status">
        <span>{eventStatut}</span>
        <a href={urlLive} className={onlineClass}>Diffusion online</a>
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
  getEventStatus: PropTypes.func.isRequired,
  price: PropTypes.number,
  banner: PropTypes.string,
  title: PropTypes.string,
  dateStart: PropTypes.string,
  dateEnd: PropTypes.string,
  urlLive: PropTypes.string,
  isOnline: PropTypes.number,
};
Header.defaultProps = {
  price: 0,
  banner: '',
  title: '',
  dateStart: '',
  dateEnd: '',
  urlLive: '',
  isOnline: 0,
};


// == Export
export default Header;
