/* eslint-disable no-plusplus */
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FroalaEditor from 'react-froala-wysiwyg';
import moment from 'moment';
import firestore from '../firebase';
import Header from './Header';
import editorConfig from '../editorConfig';

import 'froala-editor/js/froala_editor.pkgd.min';

const PostForm = () => {
  const { slug } = useParams();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [message, setMessage] = useState({});

  if (slug) {
    useEffect(() => {
      async function getArticle() {
        const article = await firestore.collection('articles').doc(slug).get();

        setTitle(article.data().title);
        setBody(article.data().body);
      }
      getArticle();
    }, []);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const articleId = title
      .trim()
      .toLowerCase()
      .replace(/ |[?]$/g, '-'); // removes all ? and spaces cos it's affecting react-router

    try {
      if (slug) {
        // update
        await firestore
          .collection('articles')
          .doc(slug)
          .set(
            {
              title,
              body,
              updatedAt: moment().format('ll'),
            },
            { merge: true }
          );
      } else {
        // create
        await firestore
          .collection('articles')
          .doc(articleId)
          .set({
            id: articleId,
            title,
            body,
            tags: ['ruby'],
            createdAt: moment().format('ll'),
            updatedAt: moment().format('ll'),
          });
      }
      setMessage({ success: `Successfully ${slug ? 'updated' : 'created'} Post: ${articleId}` });
    } catch (error) {
      setMessage({ error: `Looks like something went wrong, my love. Here: ${error}` });
    }
  };

  return (
    <div className="post-form-container">
      <Header />
      <div className="post-form">
        <Link to="/admin" className="back">
          Back
        </Link>
        <Form onSubmit={handleSubmit}>
          {message && message.success && <div className="success-message">{message.success}</div>}
          {message && message.error && <div className="error-message">{message.error}</div>}

          <Form.Group controlId="formGroupTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formGroupBody">
            <Form.Label>Body</Form.Label>
            <FroalaEditor
              tag="textarea"
              className="content"
              config={editorConfig}
              model={body}
              onModelChange={setBody}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default PostForm;
