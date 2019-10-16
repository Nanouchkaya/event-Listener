import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';


class Nav extends React.Component {
  state = {
    searchBar: false,
    menuBurger: false,
  }

  activeMenu = () => {
    const bool = this.state.menuBurger ? false : true;
    this.setState({
      menuBurger: bool,
    });
  }

  render() {
    const { menuBurger, searchBar } = this.state;
    // const searchBarClass = searchBar ? 'searchbar-visible' : 'searchbar';
    const menuBurgerClass = menuBurger ? 'menu-visible' : 'menu';
    return (
      <nav className="navigation-item">
        <NavLink
          to="/"
          exact
          className="navigation-item--left"
        >
          eventListener
        </NavLink>

        <FaBars className="menu-burger" onClick={this.activeMenu} />

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
