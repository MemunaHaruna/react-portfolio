/* eslint-disable no-undef */
import { hot } from 'react-hot-loader/root';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </Switch>
  </Router>
);

const Home = () => (
  <div>
    <Link to="/"> Memuna </Link>
    <Link to="/about"> About </Link>
    <p>homeeee</p>
  </div>
);

const About = () => (
  <div>
    <Link to="/"> Memuna </Link>
    <Link to="/about"> About </Link>
  </div>
);

render(<App />, document.getElementById('app'));

export default hot(App);
