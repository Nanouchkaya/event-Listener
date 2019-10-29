import React from 'react';
import PropTypes from 'prop-types';
import { Link, Route } from 'react-router-dom';

import Events from 'src/redux/containers/Events';

// == Composant
const Footer = ({ fetchEvents }) => {
  const handleClick = (event) => {
    fetchEvents(event.target.dataset.city);
  };
  const cities = [
    'Paris',
    'Lyon',
    'Nantes',
    'Strasbourg',
    'Bordeaux',
  ];
  return (
    <section className="footer">
      <h1 className="footer-title">titre masqué</h1>
      <div>
        <div className="footer-events">
          <h2 className="footer-subtitle">Tous les événements</h2>
          {cities.map((city) => (<Link key={city} to={`/tous-les-evenements/${city}`} onClick={handleClick} data-city={city}> - {city}<br /> </Link>))}
        </div>

        <div className="footer-social">
          <img alt="facebook" src="https://img.icons8.com/nolan/64/000000/facebook-circled.png" />
          <img alt="twitter" src="https://img.icons8.com/nolan/64/000000/twitter.png" />
          <img alt="share" src="https://img.icons8.com/nolan/64/000000/share.png" />
        </div>

        <div className="footer-links">
          <h2 className="footer-subtitle">Liens utiles</h2>
          <ul>
            <li><a>Rechercher un événement</a></li>
            <li>
              <Link to="/politique-de-confidentialite">
                Politique de confidentialité
              </Link>
            </li>
            <li>
              <Link to="/mentions-legales">
                Mentions légales
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};


// == PropTypes
Footer.propTypes = {
  fetchEvents: PropTypes.func.isRequired,
};


// == Export
export default Footer;
