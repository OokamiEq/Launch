import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

import App from './App';
// import './normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import store from './redux/store';
import TestNavbar from './components/Navbar/TestNavbar';
// import Footer from './components/UI/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <TestNavbar />
      {/* <Navbar /> */}
      <App />
    </Provider>
  </BrowserRouter>,
);
