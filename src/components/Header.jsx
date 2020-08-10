import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Resume from '../docs/Memuna_Haruna_CV.pdf';

const Header = () => (
  <Navbar expand="lg">
    <Navbar.Brand href="/" className="brand">
      Memuna Haruna
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
      <Nav>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/projects">Projects</Nav.Link>
        <Nav.Link href="/blog">Blog</Nav.Link>
        <Nav.Link href={Resume} target="_blank" rel="noreferrer" className="resume">
          Resume
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
