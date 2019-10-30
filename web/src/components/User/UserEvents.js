// import npm
import React from 'react';
import PropTypes from 'prop-types';

// import local
import './user.scss';
import ScrollEvents from 'src/components/Events/ScrollEvents';

// composant
const UserEvents = () => (
  <section className="preferences-events">
    <h2 className="preferences-events-title">
      Mes événements
    </h2>
    <div className="preferences-events-content">
      <h3 className="preferences-events-content-subtitle">
        Participations
      </h3>
      <ScrollEvents />
      <h3 className="preferences-events-content-subtitle">
        Suivis
      </h3>
      <ScrollEvents />
    </div>
  </section>
);

UserEvents.propTypes = {

};

UserEvents.defaultProps = {

};

// export
export default UserEvents;
