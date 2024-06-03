import React from 'react';
import { API_URL } from '../../http';

const FindItem = ({ item }) => {
  return (
    <li className="search__result-item find-item">
      <img className="find-item__image" src={API_URL + '/' + item.images[0]} alt={item.title} />
      <div className="find-item__info">
        <a className="find-item__title" href={'product/' + item.slug}>
          {item.title}
        </a>
        <p className="find-item__description">{item.description}</p>
      </div>
      <p className="find-item__price">£{item.price}</p>
    </li>
  );
};

export default FindItem;
