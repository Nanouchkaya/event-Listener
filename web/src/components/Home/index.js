import React from 'react';

import SearchForm from 'src/redux/containers/Home/SearchForm';
import NextEvents from 'src/redux/containers/Home/NextEvents';
import Contact from './Contact';
import HomeMap from './Map';
import Now from './Now';
import './home.scss';


// == Composant
class Home extends React.Component {
  state = {}

  componentDidMount() {
    window.addEventListener('scroll', function() {
      const scroll = window.scrollY;
      if(scroll > 400) {
        document.querySelector('.home').classList.remove('hidden-section');
        document.querySelector('.home').classList.add('display-section');
      } else {
        document.querySelector('.home').classList.remove('display-section');
        document.querySelector('.home').classList.add('hidden-section');
      }
    })
  }
  render() {
    return (
      <>
        <header>
          <div className="header-content">
            <p className="header-content-text">
              Accroche à définir qui sera trop mega cool (ou pas)
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
