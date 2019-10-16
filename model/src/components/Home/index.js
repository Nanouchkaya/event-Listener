import React from 'react';
import Nav from './Nav';
import SearchForm from './SearchForm';

import './home.scss';

// == Composant
const Home = () => (
  <header>
    <canvas className="header_background" />

    <Nav />

    <div className="header-content">
      <p className="header-content-text">
        Accroche à définir qui sera trop mega cool (ou pas)
      </p>
      <SearchForm />
    </div>
  </header>
);

// == Export
export default Home;
