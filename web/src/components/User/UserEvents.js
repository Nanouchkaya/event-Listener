// import npm
import React from 'react';
import PropTypes from 'prop-types';

// import local
import Event from 'src/components/Events/Event';
import './user.scss';

// composant
const UserEvents = ({
  eventsInterest,
  eventsParticipate,
}) => (
  <section className="preferences-events">
    <h2 className="preferences-events-title">
      Mes événements
    </h2>
    <div className="preferences-events-content">
      <h3 className="preferences-events-content-subtitle">
        Participations
      </h3>

      <div className="events-view-card">
        <div className="events-container">
          {eventsParticipate.map((event) => <Event key={event.id} {...event} view="list" />)}
        </div>
      </div>
      
      <h3 className="preferences-events-content-subtitle">
        Suivis
      </h3>

      <div className="events-view-card">
        <div className="events-container">
          {eventsInterest.map((event) => <Event key={event.id} {...event} view="list" />)}
        </div>
      </div>
      
    </div>
  </section>
);

UserEvents.propTypes = {
  eventsInterest: PropTypes.array.isRequired,
  eventsParticipate: PropTypes.array.isRequired,
};

// export
export default UserEvents;
