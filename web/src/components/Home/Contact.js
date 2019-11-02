// == Import : npm
import React from 'react';
import axios from 'axios';


// == Composant Contact
class Contact extends React.Component {
  state = {
    nameInput: '',
    emailInput: '',
    objectInput: '',
    messageText: '',
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }
  handleSubmit = (event) => {
    const { nameInput, emailInput, objectInput, messageText } = this.state;
    event.preventDefault();
    axios.post("http://localhost:3000/contact/send", {
        name: nameInput,
        email: emailInput,
        object: objectInput,
        message: messageText
    })
      .then((response) => {
        console.log(response);
        this.setState({
          nameInput: '',
          emailInput: '',
          objectInput: '',
          messageText: '',
        });
      })
      .catch((error) => console.error(error));
  }

  render() {
    const { 
      nameInput, 
      emailInput, 
      objectInput, 
      messageText 
  } = this.state;
    return (
      <section className="contact">
        <h1 className="contact-title">
          Nous contacter
        </h1>
        <form onSubmit={this.handleSubmit} className="contact-form" autoComplete="off" method="POST">
          <input
            type="text"
            className="contact-form-element input"
            placeholder="Prénom Nom"
            name="nameInput"
            value={nameInput}
            onChange={this.handleChange}
          />
          <input
            type="mail"
            required
            className="contact-form-element input"
            placeholder="E-mail*"
            name="emailInput"
            value={emailInput}
            onChange={this.handleChange}
          />
          {/* <select className="contact-form-element topic">
            <option disabled value="default">Sujet du message</option>
            <option value="sujet 1">Sujet 1</option>
            <option value="sujet 2">Sujet 2</option>
            <option value="sujet 3">Sujet 3</option>
            <option value="sujet 4">Sujet 4</option>
          </select> */}
          <input
            type="text"
            className="contact-form-element input"
            placeholder="Objet"
            name="objectInput"
            value={objectInput}
            onChange={this.handleChange}
          />

          <textarea
            required
            rows="6"
            className="contact-form-element message"
            placeholder="Votre message*"
            name="messageText"
            value={messageText}
            onChange={this.handleChange}
          />

          <button type="submit" className="contact-form-element button">
            Envoyer
          </button>

          <p className="contact-form--note">
            Les champs marqués par un astérix sont obligatoires.
          </p>
        </form>
      </section>
    ); 
  }  
}


// == Export
export default Contact;
