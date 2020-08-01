/* eslint-disable no-undef */
import { hot } from 'react-hot-loader/root';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.scss';
import Container from 'react-bootstrap/Container';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';

const App = () => {
  return (
    <Router>
      <Switch>
        <Container fluid className="app-container">
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
        </Container>
      </Switch>
    </Router>
  );
};

render(<App />, document.getElementById('app'));

export default hot(App);
