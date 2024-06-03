import React from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../http';

const Card = ({ image, title, price, slug, modify }) => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <li className={'products__item' + (modify ? ' ' + modify : '')}>
      <article className="product">
        <div className="product__image">
          <img src={image} aria-hidden="true" alt={title} width={modify === 'products__item--big' ? 630 : 305} height={375} loading="lazy" />
        </div>
        <div className="product__content">
          <h3 className="product__title">
            <Link onClick={handleClick} to={`/product/${slug}`} className="product__link">
              {title}
            </Link>
          </h3>
          <span className="product__price">£{price}</span>
        </div>
      </article>
    </li>
  );
};

export default Card;
