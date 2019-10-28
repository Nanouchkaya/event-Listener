// == Import : npm
import React from 'react';
import { NavLink } from 'react-router-dom';


// == Import : local
import image from 'src/assets/images/test_evt.png';
import iconPlus from 'src/assets/images/icons/icons8-plus-50.png';


// == CSS
const style = (image) => {
  const bannerStyle = {
    backgroundImage: `url(${image})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
};


// == Composant Event
const Event = (props) => {
  const {
    title,
    url_image: urlImage,
    address,
    date_start: dateStart,
  } = props;
  return (
    <div className="menu-item list">
      <div className="menu-item-top" style={style(urlImage)}>
        {urlImage}
      </div>
      <div className="menu-item-middle">
        <h3 className="menu-item-middle-title">{title}</h3>
        {/* <p className="menu-item-middle-content">
          Petit texte de contenu
        </p> */}
        <NavLink to="/evenements/1">
          <img src={iconPlus} alt="plus" className="icon" />
        </NavLink>
      </div>
      <div className="menu-item-bot">
        <p className="menu-item-bot-location">{address}</p>
        <p className="menu-item-bot-date">{dateStart}</p>
      </div>
    </div>
  );
};


// == Export
export default Event;
