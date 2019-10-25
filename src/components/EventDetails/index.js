// import npm
import React from 'react';

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
const EventDetails = () => (
  <>
    <div className="blurred-banner" />
    <div className="event">

      <section className="event-flyer">
        <Header />

        <article className="event-flyer-description">
          <aside className="event-flyer-infos">
            <Datetime />
            <Address />
            <CheckButtons />
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

export default EventDetails;
