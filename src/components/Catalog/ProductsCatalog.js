import React from 'react';
import Card from '../CardItem';
import { API_URL } from '../../http';

const ProductsCatalog = ({ products }) => {
  return (
    <ul className="catalog__list list-reset ">
      {products.map((product) => (
        <Card key={product._id} image={API_URL + '/' + product.images[0]} title={product.title} price={product.price} slug={product.slug} />
      ))}
      {/* <div className="centered">
        <button className="catalog__button btn btn--gray">Load more</button>
      </div> */}
    </ul>
  );
};

export default ProductsCatalog;
