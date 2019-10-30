// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';


// == Composant Inputs
class Inputs extends React.Component {
  handleChange = (event) => {
    const { addFilters } = this.props;
    const { name, checked } = event.target;
    const filter = {
      [name]: false,
    };
    addFilters(filter);
  };

  render() {
    const {
      children,
      name,
    } = this.props;
    return (
      <>
        <input onChange={this.handleChange} type="checkbox" id={children} className="advanced-filter-input" name={name} data-test={children} value={children} />
        <label htmlFor={children}>{children}</label>
      </>
    );
  }
}

// == PropTypes
Inputs.propTypes = {
  children: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};


// == Export
export default Inputs;
