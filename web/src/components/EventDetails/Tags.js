import React from 'react';

import iconTag from 'src/assets/images/icons/icons8-mots-clés-50.png';

const Tags = () => (
  <div className="tags">
    <h3 className="subtitle">
      <img className="icon" src={iconTag} alt="icon-tag" />
      Tags
    </h3>
    <p>
      <span>Événements France</span>
      <span>Événements Paris</span>
      <span>Paris Expos</span>
    </p>
  </div>
);

export default Tags;
