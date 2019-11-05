// == Import : npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import ClipLoader from 'react-spinners/ClipLoader';

// == Import : local
import './app.scss';
import Home from 'src/redux/containers/Home';
import Events from 'src/redux/containers/Events';
import EventDetails from 'src/redux/containers/EventDetails';
import Nav from 'src/redux/containers/App/Nav';
import Footer from 'src/redux/containers/App/Footer';
import SearchedEvents from 'src/redux/containers/Events/SearchedEvents';
import User from 'src/redux/containers/User';
import LegalMentions from 'src/components/LegalMentions';
import PrivatePolicy from 'src/components/PrivatePolicy';
import Errors from 'src/components/Errors';

const override = css`
  display: block;
  margin: 20rem auto;
  border-color: #6942e4;
`;

// == Composant
class App extends React.Component {
  state = {
    loading: true,
  }

  componentDidMount() {
    this.props.checkConnect();
    this.setState({
      loading: false,
    });
  }

  render() {
    const { isConnected } = this.props;
    return (
      <div id="wrapper">
        <canvas className="header_background" />
        <Nav />
        { this.state.loading && (
        <div className='sweet-loading'>
          <ClipLoader
            css={override}
            sizeUnit={"px"}
            size={150}
            color={'#123abc'}
            loading={true}
          />
        </div>
      )}
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
          <Route path="/evenements/:search" component={SearchedEvents} />
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
