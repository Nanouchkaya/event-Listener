import React from 'react';
import Proptypes from 'prop-types';

import iconDate from 'src/assets/images/icons/icons8-calendar-50.png';

class Datetime extends React.Component {
  state = {}

  render() {
    const { dateStart, dateEnd, getEventDate } = this.props;
    const date = getEventDate(dateStart, dateEnd);
    console.log(date);

    return (
      <div className="datetime">
        <h3 className="subtitle">
          <img className="icon" src={iconDate} alt="icon-date" />
          Date
        </h3>
        <p>
          <time>{date}</time>
          <a href="#">Ajouter au calendrier</a>
        </p>
      </div>
    );
  }
}

Datetime.propTypes = {
  dateStart: Proptypes.string,
  dateEnd: Proptypes.string,
  getEventDate: Proptypes.func.isRequired,
};
Datetime.defaultProps = {
  dateStart: '',
  dateEnd: '',
};

export default Datetime;
