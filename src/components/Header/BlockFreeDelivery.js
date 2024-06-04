import React, { useState } from 'react';
import imageClose from '../../img/close.svg';
import imageDelivery from '../../img/delivery.svg';

const BlockFreeDelivery = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div className={visible ? 'notice' : 'notice hide'}>
      <img width={16} height={17} src={imageDelivery} alt="Icon delivery" />
      <div className="text">
        <p>Free delivery on all orders over £50 with code easter checkout</p>
      </div>
      <button className="notice__close" onClick={() => setVisible(!visible)}>
        <img src={imageClose} alt="Close block notice" />
      </button>
    </div>
  );
};

export default BlockFreeDelivery;
