import React from 'react';
import { Link } from 'react-router-dom';

// Styles

import './form.scss';
const NotLogin = () => {
  return (
    <div className="not-login">
      <h2>You are not authorized or do not have access</h2>
      <Link to="/login" className="not-login__link btn btn--dark">
        Log in
      </Link>
    </div>
  );
};

export default NotLogin;
