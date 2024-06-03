import React from 'react';

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter__content">
          <h2 className="newsletter__title">Join the club and get the benefits</h2>
          <p className="newsletter__subtitle">Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
          <form action="#" className="form newsletter__form">
            <input type="email" className="form__input" placeholder="your@email.com" />
            <button className="form__button btn btn--dark">Sign up</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
