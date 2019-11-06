/* eslint-disable react/no-danger */
import React from 'react';
import DOMPurify from 'dompurify';
import PropTypes from 'prop-types';

import iconInfo from 'src/assets/images/icons/icons8-info-50.png';

const Description = ({ description }) => {
  /* pour limiter le risque XSS */
  const pureDescription = (
    <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }} />
  );

  return (
    <div className="text">
      <h3 className="subtitle">
        <img className="icon" src={iconInfo} alt="icon-info" />
        Description :
      </h3>
      {pureDescription}
    </div>
  );
};

Description.propTypes = {
  description: PropTypes.string,
};
Description.defaultProps = {
  description: '',
};

export default Description;
