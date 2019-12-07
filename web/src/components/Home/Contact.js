// Import global
import React from 'react';
import axios from 'axios';

// Imoport local
import config from 'src/config';


class Contact extends React.Component {
  state = {
    emailInput: '',
    objectInput: '',
    messageText: '',
    isSent: '',
    response: false,
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (event) => {
    const {
      emailInput,
      objectInput,
      messageText,
    } = this.state;

    event.preventDefault();
    axios.post(`${config.api}/contact/send`, {
      email: emailInput,
      object: objectInput,
      message: messageText,
    })
      .then((response) => {
        this.setState({
          emailInput: '',
          objectInput: '',
          messageText: '',
          isSent: 'Votre message a bien été envoyé',
          response: true,
        });
      })
      .catch((error) => {
        // console.error(error);
      });
  }

  hiddenSendMessage = () => {
    this.setState({
      isSent: '',
      response: false,
    });
  }

  render() {
    const {
      emailInput,
      objectInput,
      messageText,
      response,
      isSent,
    } = this.state;

    return (
      <section className="contact">
        <h2 className="contact-title">
          Nous contacter
        </h2>
        <form onSubmit={this.handleSubmit} className="contact-form" autoComplete="off" method="POST">
          <input
            type="mail"
            required
            className="contact-form-element input"
            placeholder="E-mail *"
            name="emailInput"
            value={emailInput}
            onChange={this.handleChange}
          />
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
            placeholder="Votre message *"
            name="messageText"
            value={messageText}
            onChange={this.handleChange}
          />
          { response && (
            <button type="submit" className="contact-form-element button" onClick={this.hiddenSendMessage}>
              {isSent}
            </button>
          ) }
          { response || (
            <button type="submit" className="contact-form-element button">
              Envoyer
            </button>
          ) }

          <p className="contact-form--note">
            Les champs marqués par un * (astérix) sont obligatoires.
          </p>
        </form>
      </section>
    );
  }
}


// == Export
export default Contact;
