import React from 'react';
import { Link } from 'react-router-dom';

// images
import heroImage from '../../img/hero.jpg';
import heroAboutImage from '../../img/hero-about.jpg';

const Hero = ({ modify }) => {
  if (modify === 'about') {
    return (
      <section className="hero about">
        <div className="container hero__container">
          <div className="hero__text">
            <h1 className="hero__title">It started with a small idea</h1>
            <p className="hero__description ">
              A global brand with local beginnings, our story begain in a small studio in South London in early 2014
            </p>
            <Link to="/catalog/all-products" className="hero__button btn btn--dark">
              View collection
            </Link>
          </div>
          <img className="hero__image" src={heroAboutImage} alt="Hero " width={630} height={478} />
        </div>
      </section>
    );
  }
  return (
    <section className="hero">
      <div className="container hero__container">
        <div className="hero__text">
          <h1 className="hero__title">The furniture brand for the future, with timeless designs</h1>
          <Link to="/catalog/all-products" className="hero__button btn btn--dark ">
            View collection
          </Link>
          <p className="hero__description" style={{ marginTop: 'auto' }}>
            A new era in eco friendly furniture with Avelon, the French luxury retail brand with nice fonts, tasteful colors and a beautiful way to
            display things digitally using modern web technologies.
          </p>
        </div>
        <img className="hero__image" src={heroImage} alt="Hero " width={520} height={584} />
      </div>
    </section>
  );
};

export default Hero;
