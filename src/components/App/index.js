// == Import : npm
import React from 'react';
import { Route } from 'react-router-dom';

// == Import : local
import './app.scss';
import User from 'src/components/User';
import Home from 'src/components/Home';
import Nav from './Nav';
import Footer from './Footer';

// == Composant
const App = () => (
  <div id="wrapper">
    <Nav />
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/profile">
      <User />
    </Route>
    <footer>
      <Footer />
    </footer>
  </div>
);

// == Export
export default App;
