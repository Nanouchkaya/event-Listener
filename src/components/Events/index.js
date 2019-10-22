import React from 'react';

import './events.scss';
import ScrollEvents from './ScrollEvents';

// == Composant
const Events = () => (
  <section className="events">
    <h1 className="events-title">
      Prochains événements
    </h1>

    <ScrollEvents />
  </section>
);

// == Export
export default Events;
