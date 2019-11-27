// == import : npm
import React from 'react';

// == import : local
import SearchForm from 'src/containers/Home/SearchForm';
import NextEvents from 'src/containers/Home/NextEvents';
import Now from 'src/containers/Home/Now';
import Contact from './Contact';
import HomeMap from './Map';
import './home.scss';


// == Composant
class Home extends React.Component {
  state = {}

  componentDidMount() {
    window.addEventListener('scroll', scroll = () => {
      const scroll = window.scrollY;
      if (scroll > 100) {
        document.querySelector('.home').classList.remove('hidden-section');
        document.querySelector('.home').classList.add('display-section');
      }
      else {
        document.querySelector('.home').classList.remove('display-section');
        document.querySelector('.home').classList.add('hidden-section');
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', scroll);
  }

  render() {
    return (
      <>
        <header>
          <div className="header-content">
            <p className="header-content-text">
              Trouver les événements qui vous correspondent 
            </p>
            <SearchForm />
          </div>
        </header>

        <main className="home hidden-section">
          <Now />
          <NextEvents />
          <Contact />
          <HomeMap />
        </main>
      </>
    );
  }
}

// == Export
export default Home;
