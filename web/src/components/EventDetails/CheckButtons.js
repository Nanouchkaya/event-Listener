// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'


// == Composant CheckButtons
const CheckButtons = ({
  interested,
  participation,
  changeInterestToTheEvent,
  changeParticipationToTheEvent,
}) => {
  const handleChangeInterestToTheEvent = () => {
    changeInterestToTheEvent(interested)
  };
  const handleChangeParticipationToTheEvent = () => {
    changeParticipationToTheEvent(participation)
  };

  const interest = (interested) ? 'Je ne suis plus intéressé·e' : 'Je suis intéressé·e';
  const participate = (participation) ? 'Je ne participe plus' : 'Je participe';
  return (
    <>
      <div className="check-buttons">
        <button
          type="button"
          className={classNames("button", { 'button--negative': interested })}
          onClick={handleChangeInterestToTheEvent}
        >
          {interest}
        </button>
        <button
          type="button"
          className={classNames("button", { 'button--negative': participation })}
          onClick={handleChangeParticipationToTheEvent}
        >
          {participate}
        </button>
      </div>
    </>
  );
};

CheckButtons.propTypes = {
  interested: PropTypes.bool.isRequired,
  participation: PropTypes.bool.isRequired,
  changeInterestToTheEvent: PropTypes.func.isRequired,
  changeParticipationToTheEvent: PropTypes.func.isRequired,
}

// == Export
export default CheckButtons;
