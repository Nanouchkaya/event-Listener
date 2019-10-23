// import npm
import React from 'react';

// import local
import './user.scss';
import Header from 'src/redux/containers/User/Header';
import Preferences from 'src/redux/containers/User/Preferences';
import UserEvents from 'src/components/User/UserEvents';


// composant
const User = () => (
  <>
    <Header />
    <section className="user">
      <Preferences />
      <UserEvents />
    </section>
  </>
);

// export
export default User;
