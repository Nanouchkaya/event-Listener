import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Now extends React.Component {
  componentDidMount() {
    const { getEventInProgress } = this.props;
    getEventInProgress();
  }

  render() {
    const {
      event: {
        id,
        title,
        url_image: urlImage,
        is_online: isOnline,
        url_live: urlLive,
      },
      event,
    } = this.props;
    return (
      <section className="now">
        <h2 className="now-title">
          En ce moment
        </h2>
        { (Object.keys(event).length > 0) && (
          <>
            <img
              src={urlImage}
              alt={title}
              className="image"
            />
            <div className="now-content">
              <Link
                to={`/evenement/${id}`}
                className="link"
              >
                Découvrir l'événement
              </Link>
              { !!isOnline && (
                <a
                  href={urlLive}
                  className="link"
                >
                  Live
                </a>
              )}
            </div>
          </>
        )}
        { (Object.keys(event).length > 0) || (
          <div className="now-content">
            Aucun événement pour le moment.
          </div>
        )}
      </section>
    );
  }
}

Now.propTypes = {
  getEventInProgress: PropTypes.func.isRequired,
  event: PropTypes.object,
};

Now.defaultProps = {
  event: {},
};

export default Now;
