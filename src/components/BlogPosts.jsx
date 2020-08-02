/* eslint-disable no-plusplus */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import firestore from '../firebase';
import Header from './Header';
import Demarcator from './demarcator';
import Post from './Post';

const BlogPosts = ({ adminDemarcatorTitle, loggedIn }) => {
  const [posts, setPosts] = useState([]);
  let unsubscribe;

  useEffect(() => {
    function fetchData() {
      // https://github.com/facebook/react/issues/15041
      try {
        unsubscribe = firestore.collection('articles').onSnapshot((articlesSnapshot) => {
          articlesSnapshot.forEach((doc) => setPosts((po) => po.concat(doc.data())));
        });
      } catch (error) {
        console.error('Error fetching articles snapshot', error);
      }
    }

    fetchData();

    return unsubscribe;
  }, []);

  console.log(posts, 'posts');

  return (
    <div className="blogs-container">
      <Header />
      <div className="blogs">
        <Demarcator text={adminDemarcatorTitle || 'My Posts'} />
        <ul className="blog-posts">
          {loggedIn && (
            <Link to="/admin/create-post" className="create-post-button">
              Create New Post
            </Link>
          )}
          {posts.map(({ id, title, body, createdAt }) => (
            <Post
              key={id}
              id={id}
              title={title}
              body={body}
              createdAt={createdAt}
              loggedIn={loggedIn}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogPosts;
