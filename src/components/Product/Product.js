import React, { useState } from 'react';
import { API_URL } from '../../http';
import { useDispatch } from 'react-redux';
import { addItem } from '../../features/cart/CartSlice';
import { setNotification } from '../../features/notification/NotificationSlice';

import Steper from '../Steper/Steper';
const Product = ({ item }) => {
  const [count, setCount] = useState(1);

  const dispatch = useDispatch();

  const addToCart = (item) => {
    dispatch(addItem({ ...item, count: count }));
    dispatch(setNotification({ type: 'success', message: 'Product added' }));
  };

  if (!item) return <div className="loader">Loading...</div>;
  return (
    <section className="product-page__info">
      <div className="container">
        <div className="product-page__image">
          <img src={API_URL + '/' + item.images[0]} alt="" width={607} height={661} />
        </div>

        <div className="product-page__characteristic">
          <h2 className="product-page__title">{item.title}</h2>
          <p className="product-page__price"> £{item.price}</p>
          <div className="product-page__description">
            <h3 className="product-page__small-title">Product description</h3>
            <p>{item.description}</p>
          </div>

          <div className="product-page__steper">
            <h3 className="product-page__small-title">Quantity</h3>
            <Steper count={count} setCount={setCount} color="#fff" />
          </div>

          <div className="product-page__buttons">
            <button className="product-page__button btn btn--dark" onClick={() => addToCart(item)}>
              Add to cart
            </button>
            <button className="product-page__button btn btn--white">Save to favorites</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
