/* eslint-disable react/no-danger */
// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify';
import moment from 'moment';

import iconPlus from 'src/assets/images/icons/icons8-plus-50.png';


// == Composant Event
const Event = ({
  id,
  title,
  url_image: urlImage,
  address,
  date_start: dateStart,
  jsxFor,
  getCity,
}) => {
  let eventDate = new Date(dateStart);
  eventDate = moment(eventDate, 'YYYY-MM-DD').format('DD MMM YYYY');
  const pureAddress = <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(address) }} />;
  const city = getCity(address);

  return (
    <>
      { jsxFor === 'card' && (
        <div
          className="event-resume"
          style={{
            backgroundImage: `url(${urlImage})`,
            backgroundRepeat: 'no-repeat',
          }}
        >
          <Link to={`/evenement/${id}`} className="event-resume-link">
            <div className="event-resume-gradient">
              <div className="event-resume-title">
                {title}
              </div>
              <div className="event-resume-address">
                {pureAddress}
              </div>
              <div className="event-resume-date">
                {eventDate}
              </div>
            </div>
          </Link>
        </div>
      ) || jsxFor === "list" && (
        <div className="event-resume">
          <img className="event-resume-image" src={urlImage} alt="image_event" />
          <div className="event-resume--right">
            <h3 className="event-resume-title">
              {title}
            </h3>
            <div className="event-resume-infos">
              <div className="event-resume-date-location">
                <p>{eventDate}</p>
                <p>{city}</p>
              </div>
              <Link to={`/evenement/${id}`} className="event-resume-link">
                <img src={iconPlus} alt="Plus" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};


Event.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  url_image: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  date_start: PropTypes.string.isRequired,
  jsxFor: PropTypes.string.isRequired,
  getCity: PropTypes.func,
};

Event.defaultProps = {
  getCity: () => {},
};
// == Export
export default Event;
