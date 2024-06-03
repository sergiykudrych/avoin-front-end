import React, { useState } from 'react';
import imageClose from '../../img/close.svg';
import imageDelivery from '../../img/delivery.svg';
import { getValueTop } from '../../helpers/helpers';

const BlockFreeDelivery = () => {
  const [visible, setVisible] = useState(true);

  const closeBlock = () => {
    setVisible(false);
    document.querySelector('.header').style = `top: 0px`;
    const heightHeader = document.querySelector('.header').clientHeight;
    document.querySelector('.wrapper').style = `margin-top: ${heightHeader}px`;
  };
  return (
    <div className={visible ? 'block-free-delivery' : 'block-free-delivery hide'}>
      <div className="text">
        <img src={imageDelivery} alt="Icon delivery" />
        <p>Free delivery on all orders over £50 with code easter checkout</p>
      </div>
      <button className="close" onClick={() => closeBlock()}>
        <img src={imageClose} alt="Close block free delivery" />
      </button>
    </div>
  );
};

export default BlockFreeDelivery;
