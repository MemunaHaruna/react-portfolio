/* eslint-disable no-plusplus */
import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import firestore from '../firebase';

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const sessionId = process.env.PORTFOLIO_SESSION_ID;

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const userData = await firestore.doc('users/jDxaEVgpsbGhuuljIKAn').get();
      const user = userData.data();
      if (email === user.email && password === user.password) {
        window.localStorage.setItem('myPortfolioSessionId', sessionId);
        window.location.reload();
      } else {
        setErrorMessage('Email/Password is wrong. Take a deep breath and try again!');
      }
    } catch (error) {
      setErrorMessage(`Looks like something went wrong, my love. Here: ${error}`);
    }
  };

  return (
    <div className="auth-form">
      <Form onSubmit={handleSubmit}>
        <div className="error-message">{errorMessage}</div>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AuthForm;
