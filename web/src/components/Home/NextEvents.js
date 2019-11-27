import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import ClipLoader from 'react-spinners/ClipLoader';

import Event from 'src/containers/Events/Event';
import iconArrowLeft from 'src/assets/images/icons/icons8-undefined-50-9.png';
import iconArrowRight from 'src/assets/images/icons/icons8-undefined-50-7.png';

import 'src/components/Events/events.scss';


const override = css`
  display: block;
  margin: 20rem auto;
  border-color: #6942e4;
`;

class NextEvents extends React.Component {
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
      <section className="nextevents">
        <h2 className="nextevents-title">
          Prochains événements
        </h2>

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

        <div className="events-view-card">
          <div className="events-container" style={{ left: `${slide}px` }}>
            {data.map((event) => <Event key={event.id} {...event} jsxFor="card" />)}
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

      </section>
    );
  }
}

NextEvents.propTypes = {
  showNextEvents: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
};

export default NextEvents;
