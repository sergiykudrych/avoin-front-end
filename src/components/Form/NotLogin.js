import React from 'react';
import { Link } from 'react-router-dom';

// Styles

import './form.scss';
const NotLogin = () => {
  return (
    <div className="not-login">
      <h1>No access</h1>
      <Link to="/login">Log in</Link>
    </div>
  );
};

export default NotLogin;
