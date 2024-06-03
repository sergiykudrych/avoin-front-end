import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../features/user/UserSlice';
import { setNotification } from '../../features/notification/NotificationSlice';

// Styles
import './auth.scss';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { isLoading, error } = useSelector((state) => state.user);

  useEffect(() => {
    document.title = 'Login';
  }, []);
  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(login({ email, password }))
      .unwrap()
      .then((response) => {
        // Якщо авторизації успішна, переходьте на головну сторінку
        dispatch(setNotification({ type: 'success', message: 'Success' }));
        navigate('/');
      })
      .catch((error) => {
        // Обробка помилок авторизації
        dispatch(setNotification({ type: 'error', message: 'Some error' }));
      });
  };

  return (
    <div className="form-body auth-page">
      <h1 className="auth-page__title">Log in</h1>
      <form onSubmit={handleLogin} className="form-auth">
        <label className="form-auth__label">
          <input
            className="form-auth__input"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            autoComplete="username"
          />
        </label>
        <label className="form-auth__label">
          <input
            className="form-auth__input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            autoComplete="current-password"
          />
        </label>
        <button className="form-auth__submit btn btn--dark">{isLoading ? 'Login...' : 'Login'}</button>
        {error && <p className="form-auth__error">{error}</p>}
      </form>
      <br></br>
      <p>
        Don`t have an account? <br />
        <Link className="link" to="/registration">
          Registration
        </Link>
      </p>
    </div>
  );
};

export default Login;
