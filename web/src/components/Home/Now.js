import React from 'react';
import { Link } from 'react-router-dom';

import universeBanner from 'src/assets/images/Universe.jpg';

const Now = () => (
  <section className="now">
    <h2 className="now-title">
      En ce moment
    </h2>
    <img
      src={universeBanner}
      alt="Projets Universe, sur twitch le 7 et 8 novembre"
      className="image"
    />
    <div className="now-content">
      <Link
        to="/evenement/11"
        className="link"
      >
        Découvrir l'événement
      </Link>
      <a
        href="https://www.twitch.tv/oclock_io"
        className="link"
      >
        Suivre sur twitch
      </a>
    </div>
  </section>
);

export default Now;
