import React from 'react';
import { Link } from 'react-router-dom';

// Images
import productImage1 from '../../img/product/product-1.png';
import productImage2 from '../../img/product/product-2.png';
import productImage3 from '../../img/product/product-3.png';
import productImage4 from '../../img/product/product-4.png';
import productImage5 from '../../img/product/product-5.png';
import productImage7 from '../../img/product/product-7.png';

import Card from '../CardItem';

const Products = () => {
  return (
    <>
      <section className="products scroll">
        <div className="container">
          <h2 className="products__title title">New ceramics</h2>
          <ul className="products__list grid list-reset products__list-grid">
            <Card image={productImage1} title="The Dandy chair" price="250" slug="the-dandy-chair" />
            <Card image={productImage2} title="Ceramic Vases" price="120" slug="timeless-elegance-ceramic-vases-to-accentuate-any-space" />
            <Card image={productImage3} title="Ceramic Vases Every Dcor" price="330" slug="timeless-elegance-ceramic-vases-for-every-dcor" />
            <Card image={productImage4} title="Illuminate Your Space" price="55" slug="illuminate-your-space-stunning-chandeliers-for-every-room" />
          </ul>
          <div className="centered">
            <Link to="/catalog/all-products" className="products__button btn btn--gray">
              View collection
            </Link>
          </div>
        </div>
      </section>
      <section className="products scroll">
        <div className="container">
          <h2 className="products__title title">Our popular products</h2>
          <ul className="products__list grid list-reset products__list-grid">
            <Card
              image={productImage5}
              title="The Poplar suede sofa"
              price="499"
              slug="relax-in-style-explore-our-range-of-luxurious-sofas"
              modify={'products__item--big'}
            />
            <Card image={productImage1} title="The Dandy chair" price="250" slug="the-dandy-chair" />
            <Card image={productImage7} title="Nature's Touch" price="150" slug="natures-touch-wooden-chairs-for-rustic-elegance" />
          </ul>
          <div className="centered">
            <Link to="/catalog/all-products" className="products__button btn btn--gray">
              View collection
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
