/* eslint-disable no-undef */
import { hot } from 'react-hot-loader/root';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WebFont from 'webfontloader';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.scss';
import Container from 'react-bootstrap/Container';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import BlogPosts from './components/BlogPosts';
import Admin from './components/Admin';
import PostForm from './components/PostForm';
import PostPage from './components/PostPage';

import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

// improved performance, better than adding link to font in index.html
WebFont.load({
  google: {
    families: ['Raleway', 'Sacramento', 'sans-serif'],
  },
});

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
          <Route path="/blog">
            <BlogPosts />
          </Route>
          <Route exact path="/admin">
            <Admin />
          </Route>
          <Route path="/admin/create-post">
            <PostForm />
          </Route>
          <Route path="/admin/:slug/edit">
            <PostForm />
          </Route>
          <Route path="/posts/:slug">
            <PostPage />
          </Route>
        </Container>
      </Switch>
    </Router>
  );
};

render(<App />, document.getElementById('app'));

export default hot(App);
