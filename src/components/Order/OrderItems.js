import React from 'react';

const OrderItems = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <li className="order-item" key={item._id}>
          <h3 className="order-item__title">{item.title}</h3>
          <div className="order-item__total">
            {item.count} x £{item.price}
          </div>
        </li>
      ))}
    </>
  );
};

export default OrderItems;
