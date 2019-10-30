// == Import : npm
import React from 'react';


// == Composant SearchForm
const SearchForm = () => (
  <div className="header-searchform">
    <h2 className="header-searchform-h2">
      A la recherche d'un événement ?
    </h2>
    <form className="header-searchform-form">
      <input
        type="text"
        placeholder="Lieu"
        className="header-searchform-input"
      />
      <select className="header-searchform-input select">
        <option disabled value="All">Toutes les catégories</option>
        <option defaultValue="Catégorie 1">Catégorie 1</option>
        <option defaultValue="Catégorie 2">Catégorie 2</option>
        <option defaultValue="Catégorie 3">Catégorie 3</option>
      </select>
      <input
        className="header-searchform-input"
        placeholder="Mots clés"
      />
      <button className="header-searchform-submit" type="submit">
        Rechercher
      </button>
    </form>
  </div>
);
// == Export
export default SearchForm;
