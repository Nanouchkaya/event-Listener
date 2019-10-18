import React from 'react';

class QuickSearchBar extends React.Component {
  state = {
    searchBar: true,
  }

  render() {
    const { searchBar } = this.state;
    const searchBarClass = searchBar ? 'searchbar-visible' : 'searchbar';

    return (
      <form className={searchBarClass}>
        <input
          type="search"
          className="searchbar-input"
          placeholder="Rechercher..."
        / >
      </form>
    )
  }
};

export default QuickSearchBar;