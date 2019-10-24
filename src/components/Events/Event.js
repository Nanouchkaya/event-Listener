// == Import : npm
import React from 'react';
import { NavLink } from 'react-router-dom';

// == Import : local
import image from 'src/assets/images/test_evt.png';
import iconPlus from 'src/assets/images/icons/icons8-plus-50.png';


// == Composant
const bannerStyle = {
  backgroundImage: `url(${image})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const Event = () => (
  <div className="menu-item list">
    <div className="menu-item-top" style={bannerStyle}>
        Image événement
    </div>
    <div className="menu-item-middle">
      <h3 className="menu-item-middle-title">Titre</h3>
      <p className="menu-item-middle-content">
        Petit texte de contenu
      </p>
      <NavLink to="/evenements/1">
        <img src={iconPlus} alt="plus" className="icon" />
      </NavLink>
    </div>
    <div className="menu-item-bot">
      <p className="menu-item-bot-location">Lieu</p>
      <p className="menu-item-bot-date">Date</p>
    </div>
  </div>
);

// == Export
export default Event;
