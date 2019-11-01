// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

// == Import : local
import './events.scss';
import HeaderGradient from 'src/components/App/HeaderGradient';
import Form from 'src/redux/containers/Events/Form';
import Event from 'src/redux/containers/Events/Event';
import Test from 'src/redux/containers/EventDetails/Test';


// == Composant Events
class Events extends React.Component {
  componentDidMount() {
    const { value, showEvents, fetchEvents } = this.props;
    const param = this.props.location.pathname.split('/');
    if (value.trim().length === 0) {
      showEvents();
      fetchEvents(param[2]);
    }
  }


  render() {
    const {
      data,
      locationSearchData,
    } = this.props;


    return (
      <>
        <HeaderGradient />
        <section className="events">
          <h2 className="events-title">
            Tous les événements
          </h2>
          <Form />
          <div className="events-view-list">
            <div className="events-container">
          <Switch>
            <Route exact path="/tous-les-evenements">
              { data.map((event) => <Event key={event.id} {...event} />)}
              <Test />
            </Route>
            <Route exact path={this.props.location.pathname}>
              { locationSearchData.length === 0
                ? <p>Aucuns événements trouvés</p>
                : locationSearchData.map((event) => <Event key={event.id} {...event} />) }
            </Route>
          </Switch>
          </div>
          </div>
        </section>
      </>
    );
  }
}


Events.propTypes = {
  data: PropTypes.array,
  value: PropTypes.string,
  showEvents: PropTypes.func.isRequired,
  fetchEvents: PropTypes.func.isRequired,
  locationSearchData: PropTypes.array.isRequired,
};
Events.defaultProps = {
  value: '',
  data: undefined,
};


// == Export
export default Events;
