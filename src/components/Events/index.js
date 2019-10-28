// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './events.scss';
import HeaderGradient from 'src/components/App/HeaderGradient';
import Form from 'src/redux/containers/Events/Form';
import Event from './Event';


// == Composant Events
const Events = ({ data, value }) => (
  <>
    <HeaderGradient />
    <section className="events">
      <h2 className="events-title">
        Tous les événements
      </h2>
      <Form />
      <h2 className="events-title">
        Octobre
      </h2>
      { value.trim().length > 0
      && (data.map((event) => <Event key={event.id} {...event} />))}
    </section>
  </>
);


Events.propTypes = {
  data: PropTypes.array.isRequired,
  value: PropTypes.string,
};
Events.defaultProps = {
  value: '',
};


// == Export
export default Events;
