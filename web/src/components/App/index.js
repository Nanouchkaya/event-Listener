// == Import : npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import : local
import './app.scss';
import Home from 'src/redux/containers/Home';
import Events from 'src/redux/containers/Events';
import EventDetails from 'src/redux/containers/EventDetails';
import Nav from 'src/redux/containers/App/Nav';
import Footer from 'src/redux/containers/App/Footer';
import User from 'src/components/User';
import LegalMentions from 'src/components/LegalMentions';
import PrivatePolicy from 'src/components/PrivatePolicy';
import Errors from 'src/components/Errors';


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
          <Route path="/(tous-les-evenements|tous-les-evenements/:slug)" component={Events} />
          <Route path="/evenement/:eventId" component={EventDetails} />
          { isConnected && (
            <Route path="/profil">
              <User />
            </Route>
          ) }
          <Route exact path="/mentions-legales">
            <LegalMentions />
          </Route>
          <Route exact path="/politique-de-confidentialite">
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
