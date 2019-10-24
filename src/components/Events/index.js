import React from 'react';

import './events.scss';
import HeaderGradient from 'src/components/App/HeaderGradient';
import Form from 'src/redux/containers/Events/Form';
import Event from './Event';


// == Composant
const Events = () => (
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
      <Event />
    </section>
  </>
);

// == Export
export default Events;
