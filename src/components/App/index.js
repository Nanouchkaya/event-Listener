// == Import : npm
import React from 'react';
import { Route } from 'react-router-dom';

// == Import : local
import './app.scss';
import User from 'src/components/User';
import Home from 'src/components/Home';
import EventDetails from 'src/components/EventDetails';
import LegalMentions from 'src/components/LegalMentions';
import PrivatePolicy from 'src/components/PrivatePolicy';
import Nav from './Nav';
import Footer from './Footer';

// == Composant
const App = () => (
  <div id="wrapper">
    <Nav />
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/evenement/:id">
      <EventDetails />
    </Route>
    <Route path="/profil">
      <User />
    </Route>
    <Route path="/mentions-legales">
      <LegalMentions />
    </Route>
    <Route path="/politique-de-confidentialite">
      <PrivatePolicy />
    </Route>
    <footer>
      <Footer />
    </footer>
  </div>
);

// == Export
export default App;
