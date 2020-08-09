/* eslint-disable no-plusplus */
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import firestore from '../firebase';
import Header from './Header';

const PostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState({});
  const [message, setMessage] = useState({});

  if (slug) {
    useEffect(() => {
      async function getArticle() {
        const article = await firestore.collection('articles').doc(slug).get();
        setPost(article.data());
      }
      getArticle();
    }, []);
  }

  const { id, title, createdAt, body } = post;
  const sessionId = window.localStorage.getItem('myPortfolioSessionId');
  const loggedIn = sessionId && sessionId === process.env.PORTFOLIO_SESSION_ID ? sessionId : null;

  async function deleteItem() {
    try {
      await firestore.collection('articles').doc(id).delete();
      setPost({});
      setMessage({ success: `Successfully deleted Post: ${id}` });
      window.location.replace('/admin');
    } catch (error) {
      console.error('Error deleting post: ', error);
      setMessage({ error: `Looks like something went wrong, my love. Here: ${error}` });
    }
  }

  return (
    <div className="post-container">
      <Header />
      <div className="post">
        {message && message.success && <div className="success-message">{message.success}</div>}
        {message && message.error && <div className="error-message">{message.error}</div>}

        <h5 className="post-title">
          <b>{title}</b>
        </h5>
        <div className="post-created-at">
          <i>{createdAt && createdAt.slice(4)}</i>
        </div>
        <div
          className="post-body"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: body }}
        />
        {loggedIn && (
          <div className="post-actions">
            <Link to={`/admin/${id}/edit`} className="edit">
              Edit
            </Link>
            <Button
              className="delete"
              onClick={(e) => {
                if (window.confirm('Are you sure you wish to delete this post?')) deleteItem(e);
              }}
            >
              Delete
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostPage;
