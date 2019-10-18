import React from 'react';

const Header = () => (
  <div className="header-event">
    <div className="header-event-bg" />
    <div className="header-event-infos">
      <time className="header-event-infos-date">NOV.<br />12</time>
      <br />
      <p className="header-event-infos-name">
            DataJob Paris 2019
        <br />
        <span>par DataJob</span>
        <button type="button">Suivre</button>
      </p>
      <br />
      <p className="header-event-infos-price">Payant</p>
    </div>
    <div className="header-event-bottom">
      <div className="header-event-bottom-icons">
        <img alt="share" src="https://img.icons8.com/nolan/24/000000/share.png" />
        <img alt="like" src="https://img.icons8.com/nolan/24/000000/like.png" />
      </div>
      <div className="header-event-bottom-status">
        <p>A venir</p>
      </div>
    </div>
  </div>
);

export default Header;
