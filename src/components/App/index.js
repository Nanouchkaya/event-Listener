// == Import : npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import : local
import './app.scss';
import Events from 'src/redux/containers/Events';
import User from 'src/components/User';
import Home from 'src/components/Home';
import EventDetails from 'src/components/EventDetails';
import LegalMentions from 'src/components/LegalMentions';
import PrivatePolicy from 'src/components/PrivatePolicy';
import Errors from 'src/components/Errors';
import Nav from 'src/redux/containers/App/Nav';
import Footer from 'src/redux/containers/App/Footer';

// == Composant
const App = () => (
  <div id="wrapper">
    <Nav />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/(tous-les-evenements|tous-les-evenements/:slug)">
        <Events />
      </Route>
      <Route path="/evenements/:id">
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
      <Route path="*">
        <Errors />
      </Route>
    </Switch>
    <footer>
      <Footer />
    </footer>
  </div>
);

// == Export
export default App;
