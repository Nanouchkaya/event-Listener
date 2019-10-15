import React from 'react';
import Nav from './Nav';
import SearchForm from './SearchForm';

import './home.scss';

// == Composant
const Home = () => (
  <header>
    <canvas
      className="header_background">
    </canvas>
    <Nav />
    <SearchForm />
  </header>
);

// == Export
export default Home;
