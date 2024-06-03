import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNotification } from '../../features/notification/NotificationSlice';

// Style
import './notification.scss';

const Notification = () => {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.notification);
  const [active, setActive] = useState('');

  useEffect(() => {
    if (notification.message !== '') {
      setActive('active');
      const timer = setTimeout(() => {
        setActive('');
        dispatch(setNotification({ type: '', message: '' }));
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [notification.message, dispatch]);

  return (
    notification.message !== '' && (
      <div>
        <p className={`notification ${active} ${notification.type}`}>{notification.message}</p>
      </div>
    )
  );
};

export default Notification;
