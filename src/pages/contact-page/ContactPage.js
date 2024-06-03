import React, { useEffect } from 'react';
import Newsletter from '../../components/Newsletter';

// Styles
import './contact-page.scss';
import Social from '../../components/Social/Social';

const ContactPage = () => {
  useEffect(() => {
    document.title = 'Contact us';
  }, []);
  return (
    <div className="contact">
      <div className="container">
        <h1 className="contact__title">WE ARE ALWAYS IN TOUCH!</h1>
        <p className="contact__subtitle">
          You can always contact us at the telephone numbers indicated in the header of the site. You can also send your request/complaint/suggestion
          using this form.
        </p>
        <div>
          <a href="tel:+390255264111" className="contact__phone">
            +39 0255264111
          </a>
          <a href="tel:+441332850021" className="contact__phone">
            +44 1332 850021
          </a>
        </div>
        <div>
          <p className="contact__company">Shoping Company</p>
          <a target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/Y2wG4uL86YxJ1Dj88" className="contact__address">
            Unit 6E Boundary Court, Willow Farm Business Park Castle Donington, Derby, DE74 2NN United Kingdom
          </a>
        </div>
        <Social />
        <form action="#" className="contact__form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button className="contact__form-btn btn btn--dark">Send message</button>
        </form>
      </div>

      <Newsletter />
    </div>
  );
};

export default ContactPage;
