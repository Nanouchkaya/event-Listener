// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { css } from '@emotion/core';
import ClipLoader from 'react-spinners/ClipLoader';


// == Import : local
import './events.scss';
import Form from 'src/redux/containers/Events/Form';
import Event from 'src/redux/containers/Events/Event';
import EventsMap from 'src/redux/containers/Events/Map';


const override = css`
  display: block;
  margin: 20rem auto;
  border-color: #6942e4;
`;


// == Composant Events
class Events extends React.Component {
  componentDidMount() {
    // props
    const { value, showEvents, fetchEvents, handleQuickSearch } = this.props;
    // allows to only get the desired parameters 
    const param = this.props.location.pathname.split('/');
    if (value.trim().length === 0) {
      // fetch all events when no search by filter
      showEvents();
      // fetch all events by city
      fetchEvents(param[2]);
      // fetch all events by pathname
      handleQuickSearch(param[2]);
    }
  }


  render() {
    const {
      data,
      locationSearchData,
      undefinedData,
    } = this.props;
    return (
      <>
        <section className="events">
          <h2 className="events-title">
            Tous les événements
          </h2>
          <Form />
          <div className="events-view-list">
            <div className="events-container">
          <Switch>
            <Route exact path="/tous-les-evenements">
            { data.length === 0 && (
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
              { data.map((event) => <Event key={event.id} {...event} />)}
              { data.length > 0 && <EventsMap />} 
              { data.length !== 0 && <p>{undefinedData}</p>}
            </Route>
            <Route  path={this.props.location.pathname}>   
              {          
                (() => {
                  if (locationSearchData.length === 0) {
                    return(<p>Aucuns événements trouvés</p>) 
                  } else if (data.length > 0) {
                    return ( 
                      <>
                      {data.map((event) => <Event key={event.id} {...event} />)}
                      <EventsMap />
                      </>
                    )   
                  } else if (data.length === 0) {
                    return (<p>Aucun événement ne correspond à votre recherche</p>)
                  } else {
                    return (
                      <>
                      {locationSearchData.map((event) => <Event key={event.id} {...event} />)}
                      <EventsMap />
                      </>
                    )
                  }     
                })()
              }
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
  undefinedData: PropTypes.string,
};
Events.defaultProps = {
  value: '',
  data: undefined,
  undefinedData: '',
};


// == Export
export default Events;
