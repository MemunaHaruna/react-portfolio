/* eslint-disable no-plusplus */
import React, { useState, useEffect } from 'react';
import { Redirect, Route } from 'react-router';
import BlogPosts from './BlogPosts';
import AuthForm from './AuthForm';
import Header from './Header';

const Admin = () => {
  const loggedIn = window.localStorage.getItem('myPortfolioSessionId');
  if (loggedIn) {
    return (
      <div className="admin-container">
        <BlogPosts />
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
