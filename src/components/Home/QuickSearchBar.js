import React from 'react';

class QuickSearchBar extends React.Component {
  state = {
    searchBar: true,
    value: '',
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    })
  }

  render() {
    const { searchBar, value } = this.state;
    const searchBarClass = searchBar ? 'searchbar-visible' : 'searchbar';

    return (
      <form className={searchBarClass}>
        <input
          type="search"
          className="searchbar-input"
          placeholder="Rechercher..."
          value= {value}
          onChange={this.handleChange}
        />
      </form>
    )
  }
};

export default QuickSearchBar;