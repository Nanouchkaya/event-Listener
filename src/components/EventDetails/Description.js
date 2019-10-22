/* eslint-disable max-len */
/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';

import iconInfo from 'src/assets/images/icons/icons8-info-50.png';

const Description = () => (
  <div className="description">
    <div className="description-content">
      <h3 className="description-subtitle">
        <img className="icon" src={iconInfo} alt="icon-info" />
        Description :
      </h3>

      <h2 className="description-title">
        DataJob, le salon de référence pour trouver le job de vos rêves
      </h2>

      <p>
        Retrouvez-nous le mardi 12 novembre 2019 à la Cité des Sciences et de l'Industrie de 9h à 19h.
        <strong>OUVERTURE DES PORTES à 8h30</strong>
      </p>
      <p>
        En 2018, DataJob a réunit plus de 3 000 participants, 80 entreprises et plus de 30 conférences/workshops.
      </p>

      <h4 className="description-subtitle">
        En 2019, DataJob c'est :
      </h4>

      <ul className="description-list">
        <li>
          90 entreprises à la recherche de leurs nouveaux talents tels que Quantmetry, Criteo, Louis Vuitton, le Groupe Crédit Agricole, la Caisse des Dépôts et <a href="https://www.datajob.fr/exposants-2019">bien d'autres</a>...
        </li>

        <li>30 conférences avec des speakers de Facebook (Angela FAN), INRIA (Alexandre GRAMFORT), Ubisoft (Thomas SAIAG) . Programme à découvrir dès octobre !</li>

        <li>2 meetups le soir : Paris Data Ladies et AI Engineering</li>
      </ul>

      <p className="description-more">
        Plus d'info : <a href="https://www.datajob.fr/">www.datajob.fr</a>
      </p>
    </div>
  </div>
);

export default Description;
