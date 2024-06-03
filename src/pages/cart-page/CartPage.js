import React, { useEffect } from 'react';
import Cart from '../../components/Cart/Cart';

const CartPage = () => {
  useEffect(() => {
    document.title = 'Cart';
  }, []);
  return <Cart />;
};

export default CartPage;
