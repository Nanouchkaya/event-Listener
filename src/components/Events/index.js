import React from 'react';
import { NavLink } from 'react-router-dom';

import './events.scss';

// == Composant
const Events = () => (
  <section className="events">
    <h1 className="events-title">
      Prochains événements
    </h1>
    <NavLink
      to="/evenement"
    >
      Voir le détail d'un événement
    </NavLink>
  </section>
);

// == Export
export default Events;
