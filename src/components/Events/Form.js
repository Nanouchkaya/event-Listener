// == Import : npm
import React from 'react';

// == Import : local
import Advanced from './Advanced';


class Form extends React.Component {
state = {
  value: '',
};


  handleChange = (event) => {
    const { value } = event.target;
    this.setState({
      value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      value: '',
    });
  }


  render() {
    const { value } = this.state;
    return (
      <>
        <h3>Formulaire</h3>
        <form onSubmit={this.handleSubmit} className="form">
          <input
            type="text"
            className="form-input"
            placeholder="Que recherchez-vous ?"
            value={value}
            onChange={this.handleChange}
          />

          { value.trim().length > 0 && <Advanced /> }

          <input
            type="submit"
            className="form-button"
            value="Rechercher"
          />
        </form>
      </>
    );
  }
}

// == Export
export default Form;
