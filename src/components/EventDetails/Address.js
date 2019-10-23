import React from 'react';

import iconAdress from 'src/assets/images/icons/icons8-marqueur-50.png';

const Address = () => (
  <div className="address">
    <h3 className="subtitle">
      <img className="icon" src={iconAdress} alt="icon-adress" />
      Adresse
    </h3>
    <p>
      <address>
        Cité des sciences et de l'industrie - Centre des Congrès <br />
        30 Avenue Corentin Cariou
        75019 Paris <br />
      </address>
      <a href="#">Afficher la carte</a>
    </p>
  </div>
);
export default Address;
