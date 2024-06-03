import React, { useState } from 'react';
import axios from 'axios';
import { setNotification } from '../../features/notification/NotificationSlice';
import { useDispatch } from 'react-redux';

const OrderForm = ({ items }) => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({ user: '', number: '', addres: '' });
  const changeHandle = (event) => {
    const { name, value } = event.target;
    setUserData((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const sendFormTelegram = (e) => {
    e.preventDefault();
    const TOKEN = '6981428546:AAESPx00WLe-NXK3nMkiWZUsuMiFqm5-cLo';
    const CHAT_ID = '-1002198888035';
    const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

    let products = '';
    items.forEach((item) => {
      products += `Назва: ${item.title.trim()},\nКількість: ${item.count} \n`;
    });

    let massage = `<b>Заявка з сайта</b>\n`;
    massage += `<b>Заказ:\n${products} </b>\n`;
    massage += `<b>Дані:\n ${userData.user} \n ${userData.number} \n ${userData.addres} </b>\n`;

    axios
      .post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: massage,
      })
      .then((res) => {
        dispatch(setNotification({ type: 'success', message: 'The order has been sent' }));
        localStorage.removeItem('cart');
        setTimeout(() => {
          window.location.href = '/';
        }, 2000);
      })
      .catch((err) => {})
      .finally((err) => {});
  };
  return (
    <form className="order__form" onSubmit={sendFormTelegram}>
      <label className="order__form-label">
        Enter your first and last name
        <input
          required
          type="text"
          name="user"
          className="order__form-input"
          placeholder="Name"
          value={userData.user}
          onChange={(e) => {
            changeHandle(e);
          }}
        />
      </label>
      <label className="order__form-label">
        Enter your number
        <input
          required
          type="tel"
          name="number"
          className="order__form-input"
          placeholder="Phone"
          value={userData.number}
          onChange={(e) => {
            changeHandle(e);
          }}
        />
      </label>
      <label className="order__form-label">
        Enter your addres
        <input
          required
          type="text"
          name="addres"
          className="order__form-input"
          placeholder="Addres"
          value={userData.addres}
          onChange={(e) => {
            changeHandle(e);
          }}
        />
      </label>
      <button className="btn btn--dark">Send order</button>
    </form>
  );
};

export default OrderForm;
