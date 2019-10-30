// import npm
import React from 'react';
import PropTypes from 'prop-types';

// import sous-composants
import Header from 'src/redux/containers/EventDetails/Header';
import CheckButtons from 'src/redux/containers/EventDetails/CheckButtons';
import Datetime from './Datetime';
import Address from './Address';
import Description from './Description';
import Tags from './Tags';

// import local
import './eventdetails.scss';

// Composant EventDetails
const EventDetails = ({ isConnected }) => (
  <>
    <div className="blurred-banner" />
    <div className="event">

      <section className="event-flyer">
        <Header />

        <article className="event-flyer-description">
          <aside className="event-flyer-infos">
            <Datetime />
            <Address />
            { isConnected && (
              <CheckButtons />
            ) }
          </aside>
          <div className="event-flyer-description description">
            <Description />
            <Tags />
          </div>
        </article>

      </section>

    </div>
  </>
);

EventDetails.propTypes = {
  isConnected: PropTypes.bool.isRequired,
};

export default EventDetails;
