import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Loading = () => (
  <div className="spinner">
    <Spinner animation="border" role="status" className="spinner">
      <span className="sr-only">Loading...</span>
    </Spinner>
  </div>
);

export default Loading;
