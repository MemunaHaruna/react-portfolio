/* eslint-disable no-plusplus */
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Header from './Header';

const Home = () => {
  const [index, setIndex] = useState(0);
  const [text] = useState("Hello, I'm  Memuna. I build cool things that live on the web.");
  const [typed, setTyped] = useState('');

  const delay = 50;
  let timer = '';

  useEffect(() => {
    if (index < text.length) {
      timer = setTimeout(() => {
        setTyped(typed + text[index]);
        setIndex(index + 1);
      }, delay);
    }

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className="home-container">
      <Header />
      <section className="home">
        <div className="home-description-box">{typed}</div>
        <div className="home-contact-box">
          <div className="contact-icons">
            <a href="https://github.com/MemunaHaruna">
              <FontAwesomeIcon icon={faGithub} className="icon" />
            </a>
            <a href="https://linkedin.com/in/memuna-ojonugwa-haruna">
              <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
            </a>
            <a href="mailto:mmharuna16@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
            </a>
          </div>
          <div className="home-bottom-box" />
        </div>
      </section>
    </div>
  );
};

export default Home;
