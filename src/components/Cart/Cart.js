import React from 'react';
import { useSelector } from 'react-redux';
import Item from './ItemCart';
import './cart.scss';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { items, totalPrice } = useSelector((state) => state.cart);

  return (
    <section className="cart-page">
      {items.length > 0 && <h1 className="cart__title">Your shopping cart</h1>}
      <div className="container">
        {items.length === 0 ? (
          <div className="cart__empty">
            <p>Your cart is empty</p>
            <br />
            <Link to="/catalog/all-products" className="btn btn--dark cart__link">
              Go to catalog
            </Link>
          </div>
        ) : (
          <>
            <div className="cart__page-top">
              <h2 className="cart__page-title">Product</h2>
              <h2 className="cart__page-title">Quantity</h2>
              <h2 className="cart__page-title">Total</h2>
            </div>

            <ul className="cart__page-middle list-reset">
              {items.map((item) => (
                <Item key={item._id} item={item} />
              ))}
            </ul>
            <div className="cart__page-bottom">
              <Link className="cart__page-link">Taxes and shipping are calculated at checkout</Link>
              <p className="cart__page-price">
                Subtotal <span>£{totalPrice}</span>
              </p>
              <Link to="/checkout" className="cart__button btn btn--dark">
                Go to checkout
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Cart;
