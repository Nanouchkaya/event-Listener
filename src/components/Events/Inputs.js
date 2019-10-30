// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';


// == Composant Inputs
class Inputs extends React.Component {
  handleChange = (event) => {
    const { fillFilterList } = this.props;
    const { name } = event.target;
    const filter = {
      [name]: event.target.value,
    };
    fillFilterList(filter);
  };

  render() {
    const {
      children,
      name,
      status,
    } = this.props;
    return (
      <>
        <input onChange={this.handleChange} type="checkbox" id={children} className="advanced-filter-input" name={name} value={status} />
        <label htmlFor={children}>{children}</label>
      </>
    );
  }
}

// == PropTypes
Inputs.propTypes = {
  children: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  fillFilterList: PropTypes.func.isRequired,
};


// == Export
export default Inputs;
