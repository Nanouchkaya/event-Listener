// import npm
import React from 'react';
import PropTypes from 'prop-types';

// import local
import Event from 'src/containers/Events/Event';
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
      <div className="preferences-events-content-left">
        <h3 className="preferences-events-content-subtitle">
          Participations
        </h3>
        {
          (() => {
            if (eventsParticipate.length > 0) {
              return (
                <div className="events-view-list">
                  <div>
                    {eventsParticipate.map((event) => <Event key={event.id} {...event} jsxFor="list" />)}
                  </div>
                </div>
              );
            }
            return (
              <p className="preferences-events-content-text">
                Je ne participe à aucun événement pour le moment.
              </p>
            );
          })()
        }
      </div>

      <div className="preferences-events-content-right">
        <h3 className="preferences-events-content-subtitle">
          Suivis
        </h3>

        {
          (() => {
            if (eventsInterest.length > 0) {
              return (
                <div className="events-view-list">
                  <div>
                    {eventsInterest.map((event) => <Event key={event.id} {...event} jsxFor="list" />)}
                  </div>
                </div>
              );
            }
            return (
              <p className="preferences-events-content-text">
                Je ne suis aucun événement pour le moment.
              </p>
            );
          })()
        }
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
