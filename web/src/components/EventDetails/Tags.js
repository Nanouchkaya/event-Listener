import React from 'react';
import PropTypes from 'prop-types';

import iconTag from 'src/assets/images/icons/icons8-mots-clés-50.png';

const Tags = ({ tags }) => (
  <div className="tags">
    <h3 className="subtitle">
      <img className="icon" src={iconTag} alt="icon-tag" />
      Tags
    </h3>
    <p>
      { tags.map((currentTag) => (
        <span>{currentTag.name}</span>
      )) }
    </p>
  </div>
);

Tags.propTypes = {
  tags: PropTypes.array,
};
Tags.defaultProps = {
  tags: [],
};

export default Tags;
