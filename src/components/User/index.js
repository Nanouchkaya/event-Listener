// import npm
import React from 'react';

// import local
import './user.scss';
import Header from 'src/components/User/Header';
import Preferences from 'src/components/User/Preferences';
import UserEvents from 'src/components/User/UserEvents';


// composant
class User extends React.Component {
  state = {
    pseudo: 'Teriyaki',
    urlAvatar: null,
    firstname: 'Guillaume',
    lastname: 'Terrien',
    email: 'guillaume.terrien.gt@gmail.com',
    password: '',
    confirmePassword: '',
    notifNewEvent: false,
    notifNewUpdate: true,
    editorModeDisabled: false,
  };

  changeValue = (value, name) => {
    this.setState({
      [name]: value,
    });
  }

  changeCheckValue = (name) => {
    const { [name]: oldValue } = this.state;
    this.setState({
      [name]: !oldValue,
    });
  }

  render() {
    const {
      pseudo,
      urlAvatar,
      firstname,
      lastname,
      email,
      password,
      confirmePassword,
      notifNewEvent,
      notifNewUpdate,
      editorModeDisabled,
    } = this.state;
    return (
      <div className="user">
        <Header
          pseudo={pseudo}
        />
        <Preferences
          firstname={firstname}
          lastname={lastname}
          email={email}
          password={password}
          confirmePassword={confirmePassword}
          notifNewEvent={notifNewEvent}
          notifNewUpdate={notifNewUpdate}
          editorModeDisabled={editorModeDisabled}
          changeValue={this.changeValue}
          changeCheckValue={this.changeCheckValue}
        />
        <UserEvents />
      </div>
    );
  }
}

// export
export default User;
