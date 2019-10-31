/* eslint-disable max-len */
// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Route } from 'react-router-dom';


// == Import : local
import '../Modal/modal.scss';
import menuBurgerOpenIcon from 'src/assets/images/icons/icons8-xbox-menu-50.png';
import menuBurgerCloseIcon from 'src/assets/images/icons/icons8-cancel-50.png';
import profileIcon from 'src/assets/images/icons/icons8-settings-50.png';
import logoutIcon from 'src/assets/images/icons/icons8-exit-50.png';

import QuickSearchBar from 'src/redux/containers/Home/QuickSearchBar';
import RegisterForm from 'src/redux/containers/Modal/RegisterForm';
import LoginForm from 'src/redux/containers/Modal/LoginForm';


// == Composant Nav
const Nav = ({
  menuBurger,
  openNavModal,
  activeNavMenu,
  showLogin,
  showRegister,
  isConnected,
  pseudo,
  deconnect,
}) => {
  /* Fonction qui gère l'ouverture des deux modals Connexion et Inscription */
  const handleNavModals = (event) => {
    openNavModal(event.target.name);
  };

  const menuburgerIcon = !menuBurger ? menuBurgerOpenIcon : menuBurgerCloseIcon;

  /* Constante qui gère l'apparition du menu burger */
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
        <Route path="/(evenements|profil|mentions-legales|politique-de-confidentialite)">
          <QuickSearchBar />
        </Route>
      </div>

      {/* Au click sur l'icon du menu burger, la props "menuBurger" passe à "true" et donc la propriété CSS change ET l'icone change également */}
      <img
        src={menuburgerIcon}
        alt="Menu"
        className="menu-burger"
        onClick={activeNavMenu}
      />

      <div className={menuBurgerClass}>
        <div className="menu-main">
          <NavLink
            to="/tous-les-evenements"
            exact
            activeClassName="navigation-item--active"
            className="navigation-item--right"
          >
            Tous les événements
          </NavLink>

          {/* Gestion de l'affichage de la nav si l'utilisateur est connecté ou non */}
          { isConnected && (
            <>
              <div className="navigation-item--right">
                <NavLink
                  to="/profil"
                  exact
                  activeClassName="navigation-item--active"
                  className="navigation-item--right online"
                >
                  <span className="pseudo">{pseudo}</span>
                  <span>
                    <img src={profileIcon} alt="modifier profil" className="icon" />
                  </span>
                </NavLink>
              </div>

              <div className="navigation-item--right">
                <NavLink
                  to="/"
                  exact
                  className="navigation-item--right online"
                  onClick={deconnect}
                >
                  <span>Déconnexion</span>
                  <span>
                    <img src={logoutIcon} alt="deconnexion" className="icon" />
                  </span>
                </NavLink>
              </div>
            </>
          )}

          { !isConnected && (
            <>
              <div className="navigation-item--active">
                { showRegister && (
                  <RegisterForm handleclose={handleNavModals} />
                )}
                <button
                  type="button"
                  className="navigation-item--right button"
                  name="register"
                  onClick={handleNavModals}
                >
                  Inscription
                </button>
              </div>

              <div className="navigation-item--active">
                { showLogin && (
                  <LoginForm handleclose={handleNavModals} />
                )}
                <button
                  type="button"
                  className="navigation-item--right button"
                  name="login"
                  onClick={handleNavModals}
                >
                  Connexion
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};


// == PropTypes
Nav.propTypes = {
  menuBurger: PropTypes.bool.isRequired,
  showLogin: PropTypes.bool.isRequired,
  showRegister: PropTypes.bool.isRequired,
  openNavModal: PropTypes.func.isRequired,
  activeNavMenu: PropTypes.func.isRequired,
  isConnected: PropTypes.bool.isRequired,
  pseudo: PropTypes.string.isRequired,
  deconnect: PropTypes.func.isRequired,
};


// == Export
export default Nav;
