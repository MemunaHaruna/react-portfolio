/* eslint-disable no-plusplus */
import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ id, title, body, createdAt, loggedIn }) => {
  const createPostBodySnippet = (text) => {
    const snippetWordCount = 40;
    const wordsInText = text.split(' ');
    const ellipsis = wordsInText.length > snippetWordCount ? '...' : '';
    return wordsInText.slice(0, snippetWordCount).join(' ') + ellipsis;
  };

  return (
    <li className="post">
      <h5 className="post-title">
        <b>{title}</b>
      </h5>
      <div className="post-created-at">
        <i>{createdAt}</i>
      </div>
      <div
        className="post-body"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: createPostBodySnippet(body) }}
      />
      {loggedIn && (
        <Link to={`/admin/${id}/edit`} className="edit">
          Edit
        </Link>
      )}
    </li>
  );
};

export default Post;
