// Global import
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';

// Local import
import App from 'src/containers/App';
import store from 'src/redux/store';

// Component
const rootComponent = (
  <Provider store={store}>
    <Router>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </Router>
  </Provider>
);

// Le rendu de React => DOM
render(rootComponent, document.getElementById('root'));
