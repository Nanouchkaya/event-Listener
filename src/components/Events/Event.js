// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


// == Import : local
import iconPlus from 'src/assets/images/icons/icons8-plus-50.png';


// == Composant Event
const Event = (props) => {
  const {
    title,
    url_image: urlImage,
    address,
    date_start: dateStart,
  } = props;
  const date = new Date(dateStart);
  const eventDate = `${date.getDate()}/${(date.getMonth() + 1)}/${date.getFullYear()}`;
  return (
    <div className="menu-item list">
      <div
        className="menu-item-top"
        style={{
          backgroundImage: `url(${urlImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {urlImage}
      </div>
      <div className="menu-item-middle">
        <h3 className="menu-item-middle-title">{title}</h3>
        <NavLink to="/evenements/1">
          <img src={iconPlus} alt="plus" className="icon" />
        </NavLink>
      </div>
      <div className="menu-item-bot">
        <p className="menu-item-bot-location">{address}</p>
        <p className="menu-item-bot-date">{eventDate}</p>
      </div>
    </div>
  );
};


Event.propTypes = {
  title: PropTypes.string.isRequired,
  url_image: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  date_start: PropTypes.string.isRequired,
};
// == Export
export default Event;
