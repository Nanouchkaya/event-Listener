import React from 'react';

import ShareLinks from 'src/components/Modal/ShareLinks';

/* imports locaux images */
import shareIcon from 'src/assets/images/icons/icons8-share-50.png';
import heartIcon from 'src/assets/images/icons/icons8-heart-50.png';
import heartCheckedIcon from 'src/assets/images/icons/icons8-heart-checked-50.png';
import banner from 'src/assets/images/event.png';

class Header extends React.Component {
state = {
  showModal: false,
  likeIcon: heartIcon,
};

handleClickHeart = (event) => {
  let currentIcon = event.target.src;
  currentIcon = !heartIcon ? heartCheckedIcon : heartIcon;
  this.setState({
    likeIcon: currentIcon,
  });
};

handleClickShare = () => {
  this.setState({
    showModal: true,
  });
};

closeShareModal = () => {
  this.setState({
    showModal: false,
  });
};


render() {
  const { showModal, likeIcon } = this.state;
  const bannerStyle = {
    backgroundImage: `url(${banner})`,
    backgroundPosition: 'center',
    backgroundSize: 'contain',
  };

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
            <button
              type="button"
              onClick={this.handleClickHeart}
            >
              <img className="icon" alt="like" src={likeIcon} />
            </button>
            <button
              type="button"
              onClick={this.handleClickHeart}
            >
              <img className="icon" alt="share" src={shareIcon} />
            </button>
            { showModal && <ShareLinks closeModal={this.closeShareModal} /> }
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
}
} 

export default Header;

