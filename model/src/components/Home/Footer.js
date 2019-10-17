import React from 'react';

// == Composant
const Footer = () => (
  <section className="footer">
    <h1 className="footer-title"></h1>
    <div>
      <div className="footer-events">
        <h2 className="footer-subtitle">Tous les événements</h2>
        <ul>
          <li><a>- Paris</a></li>
          <li><a>- Lyon</a></li>
          <li><a>- Marseille</a></li>
          <li><a>- Nantes</a></li>
          <li><a>- Strasbourg</a></li>
          <li><a>- Bordeaux</a></li>
        </ul>
      </div>

      <div className="footer-social">
        <img src="https://img.icons8.com/nolan/64/000000/facebook-circled.png" />
        <img src="https://img.icons8.com/nolan/64/000000/twitter.png" />
        <img src="https://img.icons8.com/nolan/64/000000/share.png" />
      </div>

      <div className="footer-links">
      <h2 className="footer-subtitle">Liens utiles</h2>
        <ul>
          <li><a>Rechercher un événement</a></li>
          <li><a>Politique de confidentialité</a></li>
          <li><a>Mentions légales</a></li>
        </ul>
      </div>
    </div>
  </section>
);

// == Export
export default Footer;
