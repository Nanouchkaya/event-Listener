import React from 'react';

import './legalmentions.scss';

const LegalMentions = () => (
  <section className="legal-mentions">
    <h2 className="legal-mentions-title">Mentions légales</h2>
    <p className="legal-mentions-paragraph">
      Conformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004
      pour la Confiance dans l'économie numérique, dite L.C.E.N., nous portons à la connaissance
      des utilisateurs et visiteurs du site les informations suivantes :
    </p>
    <h3 className="legal-mentions-subtitle">Éditeur :</h3>
    <p className="legal-mentions-paragraph">
      Le site <a href="#">eventlistener.eu</a> est la propriété exclusive de eventListener, qui l'édite.
    </p>
    <ul className="legal-mentions-list text">
      <li className="legal-mentions-list-item">Tél : <strong>00.06.66.06.66</strong></li>
      <li className="legal-mentions-list-item">Adresse : <strong>25 rue de l'event, 44000 Nantes</strong></li>
      <li className="legal-mentions-list-item">Adresse de courrier électronique : <strong><a href="#">admin@eventlistener.eu</a></strong></li>
      <li className="legal-mentions-list-item">Directeur de la publication : <strong>Yuna</strong></li>
      <li className="legal-mentions-list-item">Contactez le responsable de la publication : <strong><a href="#">yuna@eventlistener.eu</a></strong></li>
    </ul>
    <h3 className="legal-mentions-subtitle">Hébergement :</h3>
    <p className="legal-mentions-paragraph">
      Le site est hébergé par AWS.
    </p>
  </section>
);
export default LegalMentions;
