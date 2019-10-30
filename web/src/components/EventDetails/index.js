// import npm
import React from 'react';
import PropTypes from 'prop-types';

// import sous-composants
import Header from 'src/redux/containers/EventDetails/Header';
import CheckButtons from 'src/components/EventDetails/CheckButtons';
import Datetime from 'src/redux/containers/EventDetails/Datetime';
import Address from 'src/redux/containers/EventDetails/Address';
import Description from 'src/redux/containers/EventDetails/Description';
import Tags from './Tags';

// import local
import './eventdetails.scss';

// Composant EventDetails
class EventDetails extends React.Component {
  componentDidMount() {
    const { match: { params }, getEventDetails } = this.props;
    getEventDetails(params.eventId);
  }

  render() {
    const { banner } = this.props;
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
};

EventDetails.defaultProps = {
  banner: '',
};


export default EventDetails;
