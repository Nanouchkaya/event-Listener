// import npm
import React from 'react';

// import local
import './user.scss';
import Header from 'src/redux/containers/User/Header';
import Preferences from 'src/redux/containers/User/Preferences';
import UserEvents from 'src/components/User/UserEvents';


// composant
const User = () => (
  <div className="user">
    <Header />
    <section>
      <Preferences />
      <UserEvents />
    </section>
  </div>
);

// export
export default User;
