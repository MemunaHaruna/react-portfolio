import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Home = () => (
  <Navbar expand="lg">
    <Navbar.Brand href="/" className="brand">
      Memuna Haruna
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
      <Nav>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/about">Contact</Nav.Link>
        <Nav.Link href="/about">Blog</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Home;
