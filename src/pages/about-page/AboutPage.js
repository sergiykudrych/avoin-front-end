import React, { useEffect } from 'react';

// Sections
import Benefits from '../../components/Benefits/Benefits';
import About from '../../components/Home/About';
import Newsletter from '../../components/Newsletter';
import Hero from '../../components/Home/Hero';
import OurBrand from '../../components/About/OurBrand';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    document.title = 'About';
  }, []);
  return (
    <>
      <OurBrand />
      <Hero modify="about" />
      <About className="about-reverse" image="img/about-2.jpg" />
      <Benefits modify="about" />
      <Newsletter />
    </>
  );
};

export default AboutPage;
