// import npm
import React from 'react';
import PropTypes from 'prop-types';

// import local
import './user.scss';

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

      {/*<div className="events-view-card">
        <div className="events-container">
          {data.map((event) => <Event key={event.id} {...event} />)}
        </div>
      </div>*/}
      
      <h3 className="preferences-events-content-subtitle">
        Suivis
      </h3>

      {/*<div className="events-view-card">
        <div className="events-container">
          {data.map((event) => <Event key={event.id} {...event} />)}
        </div>
      </div>*/}
      
    </div>
  </section>
);

UserEvents.propTypes = {

};

UserEvents.defaultProps = {

};

// export
export default UserEvents;
