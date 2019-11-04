/* eslint-disable react/no-danger */
// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify';
import moment from 'moment';


// == Composant Event
const Event = ({
  id,
  title,
  url_image: urlImage,
  address,
  date_start: dateStart,
  jsxFor,
}) => {
  const eventDate = moment(dateStart, "YYYY-MM-DD").format('DD MMM YYYY');
  const pureAddress = <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(address) }} />;

  return (
    <div
      className="event"
      style={{
        backgroundImage: `url(${urlImage})`,
        backgroundRepeat: 'no-repeat',
      }}
    >
    { jsxFor === "card" && (
    <div className="card-view">
      <Link to={`/evenement/${id}`} className="event-link">
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
    ) || jsxFor === "list" && (
      <div className="list-view">
        <div className="event-title">
          {title}
        </div>
        <div className="event-address">
          {pureAddress}
        </div>
        <div className="event-date">
          {eventDate}
        </div>
        <Link to={`/evenement/${id}`} className="event-link">
          plus
        </Link>
      </div>
    )}

    </div>
  );
};


Event.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  url_image: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  date_start: PropTypes.string.isRequired,
  jsxFor: PropTypes.string.isRequired,
};
// == Export
export default Event;
