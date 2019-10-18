import React from 'react';
import SearchForm from './SearchForm';
import Contact from './Contact';
import Events from '../Events/Event';

import './home.scss';

// == Composant
const Home = () => (
  <>
    <header>
      <canvas className="header_background" />
      <div className="header-content">
        <p className="header-content-text">
          Accroche à définir qui sera trop mega cool (ou pas)
        </p>
        <SearchForm />
      </div>
    </header>

    <main>
      <Events />
      <Contact />
    </main>
  </>
);

// == Export
export default Home;
