import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registration } from '../../features/user/UserSlice';
import { setNotification } from '../../features/notification/NotificationSlice';

// Styles
import '../login-page/auth.scss';

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error } = useSelector((state) => state.user);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    document.title = 'Registration';
  }, []);
  // Функція для обробки входу
  const handleRegistration = async (e) => {
    e.preventDefault();
    dispatch(registration({ email, password }))
      .unwrap()
      .then((response) => {
        // Якщо реєстрація успішна, переходьте на головну сторінку
        dispatch(setNotification({ type: 'success', message: 'Success' }));
        navigate('/');
      })
      .catch((error) => {
        // Обробка помилок реєстрація
        dispatch(setNotification({ type: 'error', message: 'Some error' }));
      });
  };

  return (
    <div className="form-body auth-page">
      <h1 className="auth-page__title">Registration</h1>
      <form onSubmit={handleRegistration} className="form-auth">
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
            autoComplete="password"
          />
        </label>
        {error && <p className="form-auth__error">{error}</p>}
        <button className="form-auth__submit btn btn--dark">{isLoading ? 'Registration...' : 'Registration'}</button>
      </form>
      <br></br>
      <p>
        Are you already registered?
        <br />
        <Link className="link" to="/login">
          Log in
        </Link>
      </p>
    </div>
  );
};

export default Registration;
