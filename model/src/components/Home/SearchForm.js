import React from 'react';

// == Composant
const SearchForm = () => (
  <div className="header-searchform">
    <h1>A la recherche d'un événement ?</h1>
    <form className="header-searchform-form">
      <input
        type="text"
        placeholder="Lieu"
        className="header-searchform-input"
      />

      <select className="header-searchform-input">
        <option value="All">Toutes les catégories</option>
        <option value="Catégorie 1">Catégorie 1</option>
        <option value="Catégorie 2">Catégorie 2</option>
        <option value="Catégorie 3">Catégorie 3</option>
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
