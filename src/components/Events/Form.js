// == Import : npm
import React from 'react';

// == Import : local
import './events.scss';
import Advanced from './Advanced';

// == Composant
//function ButtonClickAdvanced(e) {
//    e.preventDefault();
//    console.log('bouton 2 cliqué ');
//    // effectuer ici la recherche avancée
//}

//function handleChange(event) {
//    this.setState({value: event.target.value});
//}

//function handleSubmit(event) {
//    console.log('this.state.value');
//    event.preventDefault();
//}

// https://fr.reactjs.org/docs/forms.html
// https://www.apprendre-react.fr/tutorial/debutant/les-composants/


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value : '' };

    this.buttonClick = this.buttonClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log(this.state.value);
    event.preventDefault();
  }

  buttonClick = () => {
    console.log('bouton cliqué');
    this.setState({
      clicked : !this.state.clicked
    });
    console.log(this);
    // effectuer ici une recherche par mot-clef
  }

  render() {
    let Form = this.props.Form;
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <h3>Formulaire </h3>
        <input
          type="text"
          className="form-input"
          placeholder="Que recherchez-vous ?"
          value={this.state.search}
          onChange={this.handleChange}
        />

        <Advanced />
            
        <input
          type="submit"
          className="form-button"
          onClick={this.buttonClick}
          value="Rechercher"
        />
      </form>
    );
  }
}

// == Export
export default Form;
