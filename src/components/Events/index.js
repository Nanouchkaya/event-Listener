// == Import : npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './events.scss';
import HeaderGradient from 'src/components/App/HeaderGradient';
import Form from 'src/redux/containers/Events/Form';
import Event from './Event';


// == Composant Events
const Events = ({
  data,
  value,
  showEvents,
}) => {
  useEffect(() => {
    if (value.trim().length === 0) {
      showEvents();
    }
  });
  return (
    <>
      <HeaderGradient />
      <section className="events">
        <h2 className="events-title">
          Tous les événements
        </h2>
        <Form />
        {data.map((event) => <Event key={event.id} {...event} />)}
      </section>
    </>
  );
};


Events.propTypes = {
  data: PropTypes.array.isRequired,
  value: PropTypes.string,
  showEvents: PropTypes.func.isRequired,
};
Events.defaultProps = {
  value: '',
};


// == Export
export default Events;
