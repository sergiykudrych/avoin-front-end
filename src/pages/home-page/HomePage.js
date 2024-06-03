import React, { useEffect } from 'react';

// Sections
import Hero from '../../components/Home/Hero';
import Benefits from '../../components/Benefits/Benefits';
import Products from '../../components/Home/Products';
import Newsletter from '../../components/Newsletter';
import About from '../../components/Home/About';

// Styles
import './home-page.scss';

const Home = () => {
  useEffect(() => {
    document.title = 'Home';
  }, []);
  return (
    <div className="home">
      <Hero />
      <Benefits />
      <Products />
      <Newsletter />
      <About />
    </div>
  );
};

export default Home;
