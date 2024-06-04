import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NotLogin from '../../components/Form/NotLogin';
import { useSelector } from 'react-redux';
import { API_URL } from '../../http';
import { useDispatch } from 'react-redux';
import { setNotification } from '../../features/notification/NotificationSlice';
import UserService from '../../services/UserService';

// Styles
import './cabinet.scss';

// Image
import defaultUser from '../../img/default.png';
import { Link, useNavigate } from 'react-router-dom';
import { setLogout } from '../../features/user/UserSlice';

const Cabinet = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isAuth } = useSelector((state) => state.user);
  const [userName, setUserName] = useState('');
  const [userImage, setUserImage] = useState([]);
  const [changeImage, setChangeImage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    document.title = 'Cabinet';
    user.userName && setUserName(user.userName);
  }, [user.userName]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userImage instanceof File) {
      setIsLoading(true);

      const formData = new FormData();

      formData.append('images', userImage);

      try {
        const { data } = await axios.post(API_URL + '/api/upload', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
          params: { slug: 'user' },
        });

        const response = await UserService.updateUserInfo(user.email, userName, data[0].path);

        dispatch(setNotification({ type: 'success', message: response }));
      } catch (error) {
        console.log(error);

        dispatch(setNotification({ type: 'error', message: 'Some error' }));
      } finally {
        setIsLoading(false);
      }
    } else if (user.userName !== userName) {
      const response = await UserService.updateUserInfo(user.email, userName, user.userImage);

      dispatch(setNotification({ type: 'success', message: response }));
    } else {
      dispatch(setNotification({ type: 'error', message: 'You did not change' }));
    }
  };
  const logout = () => {
    dispatch(setLogout());
    navigate('/');
  };

  if (!isAuth) {
    return <NotLogin />;
  }
  return (
    <div className="cabinet">
      <Link className="cabinet__link" to="/admin">
        Admin panel
      </Link>
      <button onClick={logout} className="cabinet__link">
        Logout
      </button>
      {/* {user.role === 'ADMIN' && } */}
      <h1 className="cabinet__title">User info</h1>
      <div className="cabinet__image">
        {user.userImage === '' && !changeImage && <img src={defaultUser} alt="Default Profile" />}
        {user.userImage !== '' && !changeImage && <img src={API_URL + '/' + user.userImage} alt="User" />}
        {changeImage && <img src={URL.createObjectURL(userImage)} alt="User" />}
      </div>
      <div>
        <form onSubmit={handleSubmit} className="cabinet__form">
          <label className="cabinet__form-label">
            <input
              className="cabinet__form-input"
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="UserName"
            />
          </label>
          <label className="cabinet__form-label">
            Change Photo
            <input
              type="file"
              onChange={(e) => {
                setChangeImage(true);
                setUserImage(e.target.files[0]);
              }}
              placeholder="User Image"
            />
          </label>
          <button className="cabinet__btn btn btn--dark" type="submit">
            {isLoading ? 'Updating...' : 'Update'}
          </button>
        </form>
        <br />
      </div>
    </div>
  );
};

export default Cabinet;
