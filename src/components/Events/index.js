// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

// == Import : local
import './events.scss';
import HeaderGradient from 'src/components/App/HeaderGradient';
import Form from 'src/redux/containers/Events/Form';
import Event from './Event';


// == Composant Events
class Events extends React.Component {
  componentDidMount() {
    const { value, showEvents } = this.props;
    if (value.trim().length === 0) {
      showEvents();
    }
  }

  render() {
    const {
      data,
      locationSearchData,
      location,
    } = this.props;

    return (
      <>
        <HeaderGradient />
        <section className="events">
          <h2 className="events-title">
            Tous les événements
          </h2>
          { console.log((location))}
          <Form />
          <Switch>
            <Route exact path="/tous-les-evenements">
              {data.map((event) => <Event key={event.id} {...event} />)}
            </Route>
            <Route exact path="/tous-les-evenements/Paris">
              {locationSearchData.map((event) => <Event key={event.id} {...event} />)}
            </Route>
          </Switch>
        </section>
      </>
    );
  }
}


Events.propTypes = {
  data: PropTypes.array.isRequired,
  value: PropTypes.string,
  showEvents: PropTypes.func.isRequired,
  locationSearchData: PropTypes.array.isRequired,
};
Events.defaultProps = {
  value: '',
};


// == Export
export default Events;
