import React, { useEffect } from 'react';
import Cart from '../../components/Cart/Cart';

const CartPage = () => {
  useEffect(() => {
    document.title = 'Cart';
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
  return <Cart />;
};

export default CartPage;
