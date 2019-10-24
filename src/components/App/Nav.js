import React from 'react';
import { NavLink } from 'react-router-dom';

/* imports locaux */
import '../Modal/modal.scss';
import QuickSearchBar from '../Home/QuickSearchBar';
import LoginForm from '../Modal/LoginForm';
import RegisterForm from '../Modal/RegisterForm';


class Nav extends React.Component {
  state = {
    menuBurger: false,
    menuIcon: 'https://img.icons8.com/nolan/50/000000/xbox-menu.png',
    showLogin: false,
    showRegister: false,
  }

  modalLogin = () => {
    const modalState = !this.state.showLogin;
    this.setState({ showLogin: modalState });
  };

  modalRegister = () => {
    const modalState = !this.state.showRegister;
    this.setState({ showRegister: modalState });
  };

  activeMenu = () => {
    const bool = !this.state.menuBurger;
    const icon = bool ? 'https://img.icons8.com/nolan/50/000000/cancel.png' : 'https://img.icons8.com/nolan/50/000000/xbox-menu.png';
    this.setState({
      menuBurger: bool,
      menuIcon: icon,
      showLogin: false,
      showRegister: false,
    });
  }

  render() {
    const {
      menuBurger,
      menuIcon,
      showLogin,
      showRegister,
    } = this.state;
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
          <QuickSearchBar />
        </div>

        <img
          src={menuIcon}
          alt="Menu"
          className="menu-burger"
          onClick={this.activeMenu}
        />

        <div className={menuBurgerClass}>
          <div className="menu-main">
            <NavLink
              to="/evenements"
              exact
              activeClassName="navigation-item--active"
              className="navigation-item--right"
            >
              Tous les événements
            </NavLink>

            <div
              activeClassName="navigation-item--active"
            >
              <RegisterForm
                show={showRegister}
                handleclose={this.modalRegister}
              />
              <button
                type="button"
                className="navigation-item--right button"
                onClick={this.modalRegister}
              >
                Inscription
              </button>
            </div>

            <div
              activeClassName="navigation-item--active"
            >
              <LoginForm
                show={showLogin}
                handleclose={this.modalLogin}
              />
              <button
                type="button"
                className="navigation-item--right button"
                onClick={this.modalLogin}
              >
                Connexion
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

// == Export
export default Nav;
