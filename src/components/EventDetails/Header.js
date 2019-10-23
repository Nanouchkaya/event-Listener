import React from 'react';
import PropTypes from 'prop-types';

import ShareLinks from 'src/components/Modal/ShareLinks';

/* imports locaux images */
import shareIcon from 'src/assets/images/icons/icons8-share-50.png';
import banner from 'src/assets/images/event.png';

const bannerStyle = {
  backgroundImage: `url(${banner})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
};

const Header = ({
  showModal,
  likeIcon,
  changeHeartIcon,
  openShareModal,
  closeShareModal,
}) => (
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
          <button
            type="button"
            onClick={(event) => changeHeartIcon(event.target.src)}
          >
            <img className="icon" alt="like" src={likeIcon} />
          </button>
          <button
            type="button"
            onClick={openShareModal}
          >
            <img className="icon" alt="share" src={shareIcon} />
          </button>
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

Header.propTypes = {
  showModal: PropTypes.bool.isRequired,
  likeIcon: PropTypes.string.isRequired,
  changeHeartIcon: PropTypes.func.isRequired,
  openShareModal: PropTypes.func.isRequired,
  closeShareModal: PropTypes.func.isRequired,
};

export default Header;
