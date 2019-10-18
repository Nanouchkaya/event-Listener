// import npm
import React from 'react';

// import sous-composants
import Header from './Header';
import Datetime from './Datetime';
import Address from './Address';
import Description from './Description';
import Tags from './Tags';
import CheckButtons from './CheckButtons';

// import local
import './eventdetails.scss';

// Composant EventDetails
const EventDetails = () => (
  <>
    <div className="full-page">
      <div className="flyer-container">
        <Header />
        <div className="description-zone">
          <div className="date-loc-display">
            <Datetime />
            <Address />
          </div>
          <Description />
        </div>
        <Tags />
        <CheckButtons />
      </div>
    </div>
  </>
);

export default EventDetails;
