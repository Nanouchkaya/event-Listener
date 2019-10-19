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
    <Route path="/event">
      <EventDetails />
    </Route>
    <Route path="/profile">
      <User />
    </Route>
    <Route path="/profile">
      <User />
    </Route>
    <Route path="/legal-mentions">
      <LegalMentions />
    </Route>
    <Route path="/private-policy">
      <PrivatePolicy />
    </Route>
    <footer>
      <Footer />
    </footer>
  </div>
);

// == Export
export default App;
