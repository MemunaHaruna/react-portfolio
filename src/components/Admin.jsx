/* eslint-disable no-plusplus */
import React from 'react';
import BlogPosts from './BlogPosts';
import AuthForm from './AuthForm';
import Header from './Header';

const Admin = () => {
  const loggedIn = window.localStorage.getItem('myPortfolioSessionId');
  if (loggedIn && loggedIn === process.env.PORTFOLIO_SESSION_ID) {
    return (
      <div className="admin-container">
        <BlogPosts adminDemarcatorTitle="Admin" loggedIn={loggedIn} />
      </div>
    );
  }
  return (
    <div className="admin-auth-container">
      <Header />
      <AuthForm />
    </div>
  );
};

export default Admin;
