import React from 'react';
import Nav from './Nav';
import SearchForm from './SearchForm';
import Contact from './Contact';
import Events from '../Events/Event';

import './home.scss';
import Footer from './Footer';

// == Composant
const Home = () => (
  <div id="wrapper">
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

    <main>
      <Events />
      <Contact />
    </main>

    <footer>
      <Footer />
    </footer>
  </div>
);

// == Export
export default Home;
