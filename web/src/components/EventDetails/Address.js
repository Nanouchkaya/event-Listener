/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

import iconAdress from 'src/assets/images/icons/icons8-marqueur-50.png';

const Address = ({ address }) => {
  const pureAddress = <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(address) }} />;
  return (
    <div className="address">
      <h3 className="subtitle">
        <img className="icon" src={iconAdress} alt="icon-adress" />
        Adresse
      </h3>
      <address>
        {pureAddress}
      </address>
      <p>
        <a href="#map">Afficher la carte</a>
      </p>
    </div>
  );
};

Address.propTypes = {
  address: PropTypes.string,
};
Address.defaultProps = {
  address: '',
};

export default Address;
