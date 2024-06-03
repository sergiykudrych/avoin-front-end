import React from 'react';

// Styles
import './benefits.scss';

const Benefits = ({ modify }) => {
  return (
    <section className="benefits">
      <div className="container">
        <h2 className="benefits__title title--small">What makes our brand different</h2>
        <ul className={'benefits__list grid list-reset ' + modify}>
          <li className=" benefits__item benefits__item--next">
            <h3 className="benefits__subtitle">Next day as standard</h3>
            <p className="benefits__description">Order before 3pm and get your order the next day as standard</p>
          </li>
          <li className=" benefits__item benefits__item--made">
            <h3 className="benefits__subtitle">Made by true artisans</h3>
            <p className="benefits__description">Handmade crafted goods made with real passion and craftmanship</p>
          </li>
          <li className=" benefits__item benefits__item--prices">
            <h3 className="benefits__subtitle">Unbeatable prices</h3>
            <p className="benefits__description">For our materials and quality you won’t find better prices anywhere</p>
          </li>
          <li className=" benefits__item benefits__item--packaging">
            <h3 className="benefits__subtitle">Recycled packaging</h3>
            <p className="benefits__description">We use 100% recycled packaging to ensure our footprint is manageable</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Benefits;
