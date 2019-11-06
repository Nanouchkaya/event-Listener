import React from 'react';
import { Link } from 'react-router-dom';
import './errors.scss';

const Errors = () => (
  <section className="error">
    <div>
      Erreur 404, la page  recherchée n'existe pas ! <br />
      <Link to ="/" style={{color: '#3A7BDA'}}>Revenir sur la page d'accueil</Link>
    </div>
  </section>
);
export default Errors;

