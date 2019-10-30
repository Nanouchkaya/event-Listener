/* eslint-disable react/no-danger */
// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify';
import moment from 'moment';


// == Import : local
import iconPlus from 'src/assets/images/icons/icons8-plus-50.png';


// == Composant Event
const Event = ({
  id,
  title,
  url_image: urlImage,
  address,
  date_start: dateStart,
}) => {
  const eventDate = moment(dateStart).format('DD MMM YYYY');
  const pureAddress = <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(address) }} />;

  return (
    <div
      className="event"
      style={{
        backgroundImage: `url(${urlImage})`,
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Link to={`/evenements/${id}`} className="event-link">
        <div className="event-gradient">
          <div className="event-title">
            {title}
          </div>
          <div className="event-address">
            {pureAddress}
          </div>
          <div className="event-date">
            {eventDate}
          </div>
        </div>
      </Link>
    </div>
  );
};


Event.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  url_image: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  date_start: PropTypes.string.isRequired,
};
// == Export
export default Event;
