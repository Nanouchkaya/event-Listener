// import npm
import React from 'react';
import PropTypes from 'prop-types';

// import local
import './user.scss';
import avatarImg from 'src/assets/images/avatar_eventListener.png';

// composant
const Header = ({ pseudo, urlAvatar }) => (
  <header className="header">
    <div className="header-pseudo">
      Hello {pseudo}!
    </div>
    <img className="header-avatar" src={urlAvatar ? urlAvatar : avatarImg} alt="avatar" />
  </header>
);

Header.propTypes = {
  pseudo: PropTypes.string.isRequired,
  urlAvatar: PropTypes.string,
};

Header.defaultProps = {
  urlAvatar: avatarImg,
};

// export
export default Header;
