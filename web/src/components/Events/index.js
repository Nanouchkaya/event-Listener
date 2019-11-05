// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

// == Import : local
import './events.scss';
import Form from 'src/redux/containers/Events/Form';
import Event from 'src/redux/containers/Events/Event';
import EventsMap from 'src/redux/containers/Events/Map';


// == Composant Events
class Events extends React.Component {
  state = {
    styleForm: {
      position: 'relative',
      top: '0',
    },
  }
  componentDidMount() {
    const { value, showEvents, fetchEvents } = this.props;
    const param = this.props.location.pathname.split('/');
    if (value.trim().length === 0) {
      // fetch all events when no search by filter
      showEvents();
      // fetch all events by city
      fetchEvents(param[2]);
    }

    // pour fixer les filtres au scroll
    window.addEventListener('scroll', this.stickyForm)
  }

  stickyForm = () => {
    const formTopY = document.querySelector('.events-left').getBoundingClientRect().y;
    const formHeight = document.querySelector('.events-left').clientHeight;
    if (window.scrollY > formTopY - formHeight) {
      this.setState({
        styleForm: {
          position: 'fixed',
          top: '100px',
        },
      })
    }

    window.removeEventListener('scroll', this.stickyForm);
  }


  render() {
    const {
      data,
      locationSearchData,
      undefinedData,
    } = this.props;

    const { styleForm } = this.state;
    
    return (
      <section className="events">

        <h2 className="events-title">
          Tous les événements
        </h2>

        <div className="events-view-list">
          <Switch>
            <Route exact path="/tous-les-evenements">
              <div className="events-right">          
                { data.map((event) =>  <Event key={event.id} {...event} jsxFor="list" />)}
              </div>

              <div className="events-left" style={{styleForm}}>
                <Form />
                { data.length > 0 && <EventsMap />} 
              </div>
               
              { data.length !== 0 && <p>{undefinedData}</p>}                   
            </Route>

            <Route exact path={this.props.location.pathname}>
              {
                (() => {
                  if (locationSearchData.length === 0) {
                    return(
                      <p>Aucun événement trouvé</p>
                    ) 
                  } else if (data.length > 0) {
                    return ( 
                      <>
                        <div className="events-left" style={{styleForm}}>
                          <EventsMap />
                        </div>
        
                        <div className="events-right">          
                          { data.map((event) =>  <Event key={event.id} {...event} jsxFor="list" />)}
                        </div>
                      </>
                    )   
                  } else if (data.length === 0) {
                    return (
                      <p>Aucun événement ne correspond à votre recherche</p>
                    )
                  } else {
                    return (
                      <>
                        <div className="events-left" style={{styleForm}}>
                          <EventsMap />
                        </div>
        
                        <div className="events-right">          
                          { data.map((event) =>  <Event key={event.id} {...event} jsxFor="list" />)}
                        </div>
                      </>
                    )
                  }
                })()
              }
            </Route>

          </Switch>

        </div>

      </section>
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
