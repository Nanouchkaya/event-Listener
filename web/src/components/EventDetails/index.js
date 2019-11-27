// import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';


// import sous-composants
import Header from 'src/containers/EventDetails/Header';
import CheckButtons from 'src/containers/EventDetails/CheckButtons';
import Datetime from 'src/containers/EventDetails/Datetime';
import Address from 'src/containers/EventDetails/Address';
import Description from 'src/containers/EventDetails/Description';
import EventDetailsMap from 'src/containers/EventDetails/Map';
import Tags from 'src/containers/EventDetails/Tags';


// import local
import config from 'src/config';
import './eventdetails.scss';


// Composant EventDetails
class EventDetails extends React.Component {
  componentDidMount() {
    const {
      match: {
        params,
      },
      getEventDetails,
    } = this.props;

    if (isNaN(Number(params.eventId))) {
      window.location = `${config.url}/not-found`;
    }
    else {
      getEventDetails(params.eventId);
    }
  }

  componentDidUpdate() {
    const {
      fetchUserPreferencesToTheEvent,
      eventsLike,
      eventsInterest,
      eventsParticipate,
      event,
      isConnected,
    } = this.props;

    if (isConnected) {
      const alreadyExistPreferences = (objectsArray, object) => {
        let alreadyExist = false;

        objectsArray.forEach((currentObject) => {
          if (currentObject.id === object.id) {
            alreadyExist = true;
          }
        });

        return alreadyExist;
      };
      fetchUserPreferencesToTheEvent(
        alreadyExistPreferences(eventsLike, event),
        alreadyExistPreferences(eventsInterest, event),
        alreadyExistPreferences(eventsParticipate, event),
      );
    }
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
                { latitude && longitude !== undefined && <EventDetailsMap /> }
              </aside>
              <div className="event-flyer-description description">
                <Description />
                <Tags />
              </div>
            </article>
            { isConnected && (
              <CheckButtons />
            )}
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
  latitude: PropTypes.number,
  longitude: PropTypes.number,
};

EventDetails.defaultProps = {
  banner: '',
  latitude: null,
  longitude: null,
};


export default EventDetails;
