import React from 'react';

import iconDate from 'src/assets/images/icons/icons8-calendar-50.png';

const Datetime = () => (
  <div className="datetime">
    <h3 className="subtitle">
      <img className="icon" src={iconDate} alt="icon-date" />
      Date et heure
    </h3>
    <p>
      <time>mar. 12 novembre 2019</time>
      <time>08:30 - 19:00 heure : France</time>
      <a href="#">Ajouter au calendrier</a>
    </p>
  </div>
);
export default Datetime;
