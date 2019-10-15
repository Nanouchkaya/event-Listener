import React from 'react';
import { NavLink } from 'react-router-dom';


// == Composant
const Nav = () => (
  <nav>
    <NavLink
      to="/"
      exact
      className="navigation-item--left"
    >
      eventListener
    </NavLink>

    <div>
      <NavLink
        to="/events"
        exact
        activeClassName="navigation-item--active"
        className="navigation-item--right"
      >
        Tous les événements
      </NavLink>

      <NavLink
        to="/register"
        exact
        activeClassName="navigation-item--active"
      >
        <button type="button" className="navigation-item--right">
          Inscription
        </button>
      </NavLink>

      <NavLink
        to="/login"
        exact
        activeClassName="navigation-item--active"
      >
        <button type="button" className="navigation-item--right">
          Connexion
        </button>
      </NavLink>
    </div>
  </nav>
);

// == Export
export default Nav;
