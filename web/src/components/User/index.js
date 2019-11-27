// import npm
import React from 'react';
import PropTypes from 'prop-types';

// import local
import './user.scss';
import Header from 'src/containers/User/Header';
import Preferences from 'src/containers/User/Preferences';
import UserEvents from 'src/containers/User/UserEvents';


// composant
class User extends React.Component {
  state = {}

  componentDidMount() {
    const {
      fetchNewUserInfos,
      closeNavMenu,
    } = this.props;
    closeNavMenu();
    fetchNewUserInfos();
  }

  render() {
    return (
      <div className="user">
        <Header />
        <section>
          <Preferences />
          <UserEvents />
        </section>
      </div>
    );
  }
}

User.propTypes = {
  fetchNewUserInfos: PropTypes.func.isRequired,
  closeNavMenu: PropTypes.func.isRequired,
};

// export
export default User;
