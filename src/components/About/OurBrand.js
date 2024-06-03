import React from 'react';
import { Link } from 'react-router-dom';

// Style
import './about.scss';

const OurBrand = () => {
  return (
    <section className="our-brand">
      <div className="container our-brand__container">
        <h1 className="our-brand__title">A brand built on the love of craftmanship, quality and outstanding customer service</h1>
        <Link to="/catalog/all-products" className="our-brand__link btn btn--gray">
          View our products
        </Link>
      </div>
    </section>
  );
};

export default OurBrand;
