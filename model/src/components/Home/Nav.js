import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';


class Nav extends React.Component {
  state = {
    searchBar: false,
    menuBurger: false,
    menuIcon: 'https://img.icons8.com/nolan/50/000000/xbox-menu.png',
  }

  activeMenu = () => {
    const bool = this.state.menuBurger ? false : true;
    const icon = bool ? 'https://img.icons8.com/nolan/50/000000/cancel.png' : 'https://img.icons8.com/nolan/50/000000/xbox-menu.png';
    this.setState({
      menuBurger: bool,
      menuIcon: icon,
    });
  }

  render() {
    const { menuBurger, menuIcon, searchBar } = this.state;
    const searchBarClass = searchBar ? 'searchbar-visible' : 'searchbar';
    const menuBurgerClass = menuBurger ? 'menu-visible' : 'menu';
    return (
      <nav className="navigation-item">
        <div className="navigation-item--left">
          <NavLink
            to="/"
            exact
          >
          eventListener
          </NavLink>
          <form className={searchBarClass}>
            <input
              type="search"
              className="searchbar-input"
              placeholder="Rechercher..."
            / >
          </form>
        </div>

        <img
          src={menuIcon}
          className="menu-burger"
          onClick={this.activeMenu}
        />

        <div className={menuBurgerClass}>
          <NavLink
            to="/events"
            exact
            activeClassName="navigation-item--active"
            className="navigation-item--right"
          >
            Tous les événements
          </NavLink>

          <NavLink
            to="/register"
            exact
            activeClassName="navigation-item--active"
          >
            <button type="button" className="navigation-item--right button">
              Inscription
            </button>
          </NavLink>

          <NavLink
            to="/login"
            exact
            activeClassName="navigation-item--active"
          >
            <button type="button" className="navigation-item--right button">
              Connexion
            </button>
          </NavLink>
        </div>
      </nav>
    );
  }
}

// == Export
export default Nav;
