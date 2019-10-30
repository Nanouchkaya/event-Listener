import React from 'react';

import errorPage from 'src/assets/images/404.png';

const Errors = () => (
  <>
    <img src={errorPage} alt="404" />
    <button type="button">Page d'accueil</button>
  </>
);
export default Errors;
