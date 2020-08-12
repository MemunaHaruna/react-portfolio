import React from 'react';
import Header from './Header';
import Demarcator from './demarcator';

const About = () => (
  <div className="about-container">
    <Header />
    <section className="about">
      <Demarcator text="About Me" />

      <p>
        For as long as I can remember, I've loved tinkering with things to figure out how they work.
        Software engineering gives me the opportunity to explore and learn exciting things, build
        solutions that solve problems and ultimately improve people&apos;s lives.
      </p>
      <p>
        {' '}
        I have almost 4 years of experience building production applications with Ruby/Ruby on Rails
        and Javascript at companies such as <a href="https://www.andela.com"> Andela </a>,
        <a href="https://www.studiohopfitness.com"> StudioHop </a> and{' '}
        <a href="https://www.juntosglobal.com">Juntos Finanzas</a>. In my spare time, I've briefly
        enjoyed exploring different technologies such as PHP, Python and Java.
      </p>
    </section>
  </div>
);

export default About;
