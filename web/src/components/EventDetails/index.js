// import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

// import sous-composants
import Header from 'src/redux/containers/EventDetails/Header';
import CheckButtons from 'src/redux/containers/EventDetails/CheckButtons';
import Datetime from 'src/redux/containers/EventDetails/Datetime';
import Address from 'src/redux/containers/EventDetails/Address';
import Description from 'src/redux/containers/EventDetails/Description';
import EventDetailsMap from 'src/redux/containers/EventDetails/Map';
import Tags from './Tags';


// import local
import './eventdetails.scss';

// Composant EventDetails
class EventDetails extends React.Component {
  componentDidMount() {
    const {
      match: {
        params,
      },
      isConnected,
      getEventDetails,
    } = this.props;
    getEventDetails(params.eventId);
  }
  
  componentDidUpdate() {
    const {
      fetchUserPreferencesToTheEvent,
      eventsLike,
      eventsInterest,
      eventsParticipate,
      event,
    } = this.props;

    const alreadyExistPreferences = (objectsArray, object) => {
      let alreadyExist = false;
  
      objectsArray.forEach((currentObject) => {
        if (currentObject.id === object.id) {
          alreadyExist = true;
        }
      });
  
      return alreadyExist;
    }
    fetchUserPreferencesToTheEvent(
      alreadyExistPreferences(eventsLike,event),
      alreadyExistPreferences(eventsInterest,event),
      alreadyExistPreferences(eventsParticipate,event),
    );
  }

  render() {
    const {
      banner,
      latitude,
      longitude,
      isConnected,
    } = this.props;
    return (
      <>
        <div
          className="blurred-banner"
          style={{ backgroundImage: `url(${banner})` }}
        />
        <div className="event">

          <section className="event-flyer">
            <Header />

            <article className="event-flyer-description">
              <aside className="event-flyer-infos">
                <Datetime />
                <Address />
                { isConnected && (
                  <CheckButtons />
                )}
              </aside>
              <div className="event-flyer-description description">
                <Description />
                <Tags />
                { latitude && longitude !== undefined && <EventDetailsMap /> }
                
              </div>
            </article>
          </section>

        </div>
      </>
    );
  }
}

EventDetails.propTypes = {
  getEventDetails: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      eventId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  banner: PropTypes.string,
  isConnected: PropTypes.bool.isRequired,
  fetchUserPreferencesToTheEvent: PropTypes.func.isRequired,
  eventsLike: PropTypes.array.isRequired,
  eventsInterest: PropTypes.array.isRequired,
  eventsParticipate: PropTypes.array.isRequired,
  event: PropTypes.object.isRequired,
};

EventDetails.defaultProps = {
  banner: '',
};


export default EventDetails;
