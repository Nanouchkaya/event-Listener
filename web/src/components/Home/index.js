import React from 'react';
import PropTypes from 'prop-types';

import Event from 'src/redux/containers/Events/Event';
import iconArrowLeft from 'src/assets/images/icons/icons8-undefined-50-9.png';
import iconArrowRight from 'src/assets/images/icons/icons8-undefined-50-7.png';
import SearchForm from 'src/redux/containers/Home/SearchForm';
import Contact from './Contact';
import HomeMap from './Map';
import './home.scss';
import 'src/components/Events/events.scss';


// == Composant
class Home extends React.Component {

  componentDidMount() {
    const { showNextEvents } = this.props;
    showNextEvents();
  }

  render() {
    const {
      data,
      slide,
      slider,
      changeLeftForSlider, 
    } = this.props;
    const numberOfElement = data.length - 1;

    return (
      <>
        <header>
          <div className="header-content">
            <p className="header-content-text">
              Accroche à définir qui sera trop mega cool (ou pas)
            </p>
            <SearchForm />
          </div>
        </header>

        <main>
          <h2 className="events-title">
            En ce moment
          </h2>
          <div>
            ici on présente l'événement le plus populaire en cours
          </div>

          <h2 className="events-title">
            Prochains événements
          </h2>

          <div className="events-view-card">
            <div className="events-container" style={{ left: `${slide}px` }}>
              {data.map((event) => <Event key={event.id} {...event} />)}
            </div>
          </div>

          <div className="arrow">
            <button type="button" className="arrow-left" onClick={() => slider(numberOfElement, slide, 236, changeLeftForSlider, 'left')}>
              <img src={iconArrowLeft} alt="prev" className="icon" />
            </button>

            <button type="button" className="arrow-right" onClick={() => slider(numberOfElement, slide, 236, changeLeftForSlider, 'right')}>
              <img src={iconArrowRight} alt="next" className="icon" />
            </button>
          </div>

          <Contact />

          <h2 className="events-title">
            Où nous trouver
          </h2>
          <HomeMap />
        </main>
      </>
    );
  }
}

Home.propTypes = {
  showNextEvents: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
};

// == Export
export default Home;
