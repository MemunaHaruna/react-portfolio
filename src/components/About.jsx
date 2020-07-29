import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const About = () => (
  <div className="about-container">
    <Header />
    <section className="about">
      <h2>---- About Me ------</h2>
      <p>I've always loved tinkering with things to figure out how they work</p>
    </section>
  </div>
);

export default About;
