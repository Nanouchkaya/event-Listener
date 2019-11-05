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
  state = {
    styleForm: {},
    styleFakeDiv: {},
  }

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
    // pour fixer les filtres au scroll
    if (window.innerWidth >= 768) {
      const formTopY = document.querySelector('.events-left').getBoundingClientRect().y;
      const formHeight = document.querySelector('.events-left').clientHeight;
      const pos = formTopY - formHeight;
      window.addEventListener('scroll', () => this.stickyForm(pos));
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
      locationSearchData,
    } = this.props;

    const { styleForm, styleFakeDiv } = this.state;

    return (
      <section className="events">

        <h2 className="events-title">
          Tous les événements
        </h2>

        <div className="events-view-list">
          <Switch>
            <Route exact path="/tous-les-evenements">
              <div className="events-right">
                { data.length === 0 && (
                  <div className="sweet-loading">
                    <ClipLoader
                      css={override}
                      sizeUnit="px"
                      size={150}
                      color="#123abc"
                      loading
                    />
                  </div>
                )}
                { data.map((event) => <Event key={event.id} {...event} jsxFor="list" />)}
              </div>

              <div id="fake-div" style={styleFakeDiv} />
              <div className="events-left" style={styleForm}>
                <Form />
                { data.length > 0 && <EventsMap />}
              </div>
            </Route>

            <Route exact path={this.props.location.pathname}>
              {
                (() => {
                  if (locationSearchData.length === 0) {
                    return (
                      <p>Aucun événement trouvé</p>
                    );
                  } if (data.length > 0) {
                    return (
                      <>
                        <div className="events-left" style={styleForm}>
                          <EventsMap />
                        </div>

                        <div className="events-right">
                          { data.map((event) => <Event key={event.id} {...event} jsxFor="list" />)}
                        </div>
                      </>
                    );
                  } if (data.length === 0) {
                    return (
                      <p>Aucun événement ne correspond à votre recherche</p>
                    );
                  }
                  return (
                    <>
                      <div className="events-left" style={{ styleForm }}>
                        <EventsMap />
                      </div>

                      <div className="events-right">
                        { data.map((event) => <Event key={event.id} {...event} jsxFor="list" />)}
                      </div>
                    </>
                  );
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
  undefinedData: PropTypes.string,
};
Events.defaultProps = {
  value: '',
  data: undefined,
  undefinedData: '',
};


// == Export
export default Events;
