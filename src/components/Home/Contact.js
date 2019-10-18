import React from 'react';

// == Composant
const Contact = () => (
  <section className="contact">
    <h1 className="contact-title">
      Nous contacter
    </h1>
    <form className="contact-form" autoComplete="off">
      <input
        type="text"
        className="contact-form-element input"
        placeholder="Prénom Nom"
      />
      <input
        type="mail"
        required
        className="contact-form-element input"
        placeholder="E-mail*"
      />
      <select className="contact-form-element topic">
        <option selected disabled value="default">Sujet du message</option>
        <option value="sujet 1">Sujet 1</option>
        <option value="sujet 2">Sujet 2</option>
        <option value="sujet 3">Sujet 3</option>
        <option value="sujet 4">Sujet 4</option>
      </select>

      <textarea
        defaultValue="Votre message*"
        required
        className="contact-form-element message"
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

// == Export
export default Contact;
