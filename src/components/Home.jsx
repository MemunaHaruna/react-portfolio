/* eslint-disable no-plusplus */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const Home = () => {
  const [index, setIndex] = useState(0);
  const [text] = useState("Hello, I'm  Memuna!");
  const [typed, setTyped] = useState('');

  const [indexTwo, setIndexTwo] = useState(0);
  const [jobText] = useState("I'm a software engineer xoxo xoxo xoxo");
  const [typedJobText, setTypedJobText] = useState('');

  const delay = 50;
  let timer = '';
  let timerTwo = '';

  useEffect(() => {
    if (index < text.length) {
      timer = setTimeout(() => {
        setTyped(typed + text[index]);
        setIndex(index + 1);
      }, delay);
    }

    return () => clearTimeout(timer);
  }, [index]);

  useEffect(() => {
    if (indexTwo < jobText.length) {
      timerTwo = setTimeout(() => {
        setTypedJobText(typedJobText + jobText[indexTwo]);
        setIndexTwo(indexTwo + 1);
      }, delay);
    }

    return () => clearTimeout(timerTwo);
  }, [indexTwo]);

  return (
    <div>
      <Header />
      <section className="home">
        <div className="home-greeting">
          <div className="greeting-inner">{typed}</div>
        </div>
        <div className="home-job">
          <div className="job-inner">{typedJobText}</div>
        </div>
      </section>
    </div>
  );
};

export default Home;
