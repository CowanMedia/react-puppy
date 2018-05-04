import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Discover from './pages/Discover';
import About from './pages/About';
import Search from './pages/Search';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';

const App = () => React.createElement(
  Router,
  null,
  React.createElement(
    'div',
    { className: 'container' },
    React.createElement(Navbar, null),
    React.createElement(
      Wrapper,
      null,
      React.createElement(Route, { exact: true, path: '/', component: About }),
      React.createElement(Route, { exact: true, path: '/about', component: About }),
      React.createElement(Route, { exact: true, path: '/discover', component: Discover }),
      React.createElement(Route, { exact: true, path: '/search', component: Search })
    ),
    React.createElement(Footer, null)
  )
);
export default App;