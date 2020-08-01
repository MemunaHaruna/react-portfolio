/* eslint-disable no-plusplus */
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Demarcator from './demarcator';

const BlogPosts = ({ adminDemarcatorTitle }) => {
  return (
    <div className="blogs-container">
      <Header />
      <div className="blogs">
        <Demarcator text={adminDemarcatorTitle || 'My Posts'} />
      </div>
    </div>
  );
};

export default BlogPosts;
