// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { css } from '@emotion/core';
import ClipLoader from 'react-spinners/ClipLoader';


// == Import : local
import './events.scss';
import Form from 'src/containers/Events/Form';
import Event from 'src/containers/Events/Event';
import EventsMap from 'src/containers/Events/Map';


const override = css`
  display: block;
  margin: 20rem auto;
  border-color: #6942e4;
`;


// == Composant Events
class Events extends React.Component {
  state = {
    styleForm: {},
    styleFakeDiv: {},
    loading: true,
  }

  componentDidMount() {
    // props
    const {
      value,
      showEvents,
      data,
    } = this.props;
    if (value.trim().length === 0) {
      // fetch all events when no search by filter
      showEvents();
    }
    // pour fixer les filtres au scroll
    if (window.innerWidth >= 768) {
      const formTopY = document.querySelector('.events-right').getBoundingClientRect().y;
      const formHeight = document.querySelector('.events-right').clientHeight;
      const pos = formTopY - formHeight;
      window.addEventListener('scroll', () => this.stickyForm(pos));
    }

    if (data.length === 0) {
      this.setState({
        loading: false,
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.stickyForm);
  }

  stickyForm = (pos) => {
    this.setState({
      styleForm: {
        position: (window.scrollY >= pos) ? 'fixed' : 'static',
        top: '70px',
        left: '50%',
        paddingRight: (window.scrollY >= pos) ? '1rem' : '0',
      },
      styleFakeDiv: {
        display: (window.scrollY >= pos) ? 'block' : 'none',
      },
    });
  }

  render() {
    const {
      data,
      undefinedData,
    } = this.props;
    const { styleForm, styleFakeDiv, loading } = this.state;
    return (
      <section className="events">

        <h2 className="events-title">
          Tous les événements
        </h2>

        <div className="events-view-list">
          <Route exact path="/tous-les-evenements">
            <div className="events-left">
              { data.map((event) => <Event key={event.id} {...event} jsxFor="list" />)}
              { data.length === 0 && <p>{undefinedData}</p>}
            </div>
            { data.length === 0 && (
              <div className="sweet-loading">
                <ClipLoader
                  css={override}
                  sizeUnit="px"
                  size={150}
                  color="#123abc"
                  loading={loading}
                />
              </div>
            )}
            <div id="fake-div" style={styleFakeDiv} />
            <div className="events-right" style={styleForm}>
              <Form />
              { data.length > 0 && <EventsMap />}
            </div>
          </Route>
        </div>
      </section>
    );
  }
}


Events.propTypes = {
  data: PropTypes.array,
  value: PropTypes.string,
  showEvents: PropTypes.func.isRequired,
  undefinedData: PropTypes.string,
};
Events.defaultProps = {
  value: '',
  data: undefined,
  undefinedData: '',
};


// == Export
export default Events;
