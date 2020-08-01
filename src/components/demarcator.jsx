import React from 'react';

const Demarcator = ({ text }) => (
  <div className="divider">
    <span className="hr" />
    <span className="button-box">{text}</span>
    <span className="hr" />
  </div>
);

export default Demarcator;
