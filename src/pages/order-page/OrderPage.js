import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

// Styles
import './order.scss';

// Components
import OrderItems from '../../components/Order/OrderItems';
import OrderForm from '../../components/Form/OrderForm';
const Order = () => {
  useEffect(() => {
    document.title = 'Order';
  }, []);

  const { items, totalPrice } = useSelector((state) => state.cart);
  const [open, setOpen] = useState(false);
  return (
    <div className="order">
      <div className="order__center">
        <Link className="link" to="/cart">
          Back to cart
        </Link>
        <div className="order-items">
          <div className="order-items__top">
            <h2 className="order-items__title">Your order</h2>
            <button
              className="order-items__button-show-more"
              onClick={() => {
                setOpen(!open);
              }}
            >
              Show more
            </button>
          </div>
          <ul className={'order-items__list list-reset' + (open ? ' _active' : '')}>
            <OrderItems items={items} />
          </ul>
          <div className="order-items__buttom">Total: £{totalPrice}</div>
        </div>
        <OrderForm items={items} />
      </div>
    </div>
  );
};

export default Order;
