import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      <p>I'm some other page </p>
      <Link to="/">Go back to home page!</Link>
    </div>
  );
};
