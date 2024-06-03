import React from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../../http';

import image from '../../img/Product-Image.jpg';
const FindItem = ({ item }) => {
  return (
    <li className="search__result-item find-item">
      <img className="find-item__image" src={API_URL + '/' + item.images[0]} />
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
