import React from 'react';
import { Link } from 'react-router-dom';
import './errors.scss';

const Errors = () => (
  <section className="error">
    <div className="glitch" data-text="404">
      404
    </div>
    <div className="message">
       Oups ! La page  recherchée n'existe pas.
      <Link to="/" className="link">
        Revenir sur la page d'accueil
      </Link>
    </div>
  </section>
);
export default Errors;

