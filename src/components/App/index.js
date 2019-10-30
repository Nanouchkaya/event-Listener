// == Import : npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import : local
import './app.scss';
import User from 'src/components/User';
import Home from 'src/components/Home';
import EventDetails from 'src/redux/containers/EventDetails';
import LegalMentions from 'src/components/LegalMentions';
import PrivatePolicy from 'src/components/PrivatePolicy';
import Errors from 'src/components/Errors';
import Nav from 'src/redux/containers/App/Nav';
import Footer from './Footer';
import Events from '../Events';

// == Composant
class App extends React.Component {
  componentDidMount() {
    this.props.checkConnect();
  }

  render() {
    const { isConnected } = this.props;
    return (
      <div id="wrapper">
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/evenements">
            <Events />
          </Route>
          <Route path="/evenements/:id">
            <EventDetails />
          </Route>
          { isConnected && (
            <Route path="/profil">
              <User />
            </Route>
          ) }
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
  }
}

App.propTypes = {
  checkConnect: PropTypes.func.isRequired,
  isConnected: PropTypes.bool.isRequired,
};

// == Export
export default App;
