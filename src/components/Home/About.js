import React from 'react';

// images
import imageAbout from '../../img/about-1.jpg';
import imageAbout2 from '../../img/about-2.jpg';

const About = ({ className }) => {
  if (className === 'about-reverse') {
    return (
      <section className="about">
        <div className={`about__content ${className}`}>
          <div className="about__info">
            <h2 className="about__title title">Our service isn’t just personal, it’s actually hyper personally exquisite</h2>
            <p className="about__description">
              When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.
            </p>
            <p className="about__description">
              Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for
              the London interior design community.
            </p>
            <button className="about__button btn btn--gray">Get in touch</button>
          </div>
          <img src={imageAbout2} className="about__image" alt="About" width={720} height={603} />
        </div>
      </section>
    );
  }
	
  return (
    <section className="about">
      <div className={`about__content ${className === 'about-reverse' ? 'about-reverse' : ''}`}>
        <div className="about__info">
          <h2 className="about__title title">From a studio in London to a global brand with over 400 outlets</h2>

          <p className="about__description">
            When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.
          </p>
          <p className="about__description">
            Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for
            the London interior design community.
          </p>
          <button className="about__button btn btn--gray">Get in touch</button>
        </div>
        <img src={imageAbout} className="about__image" alt="About" width={720} height={603} />
      </div>
    </section>
  );
};

export default About;
