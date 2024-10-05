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
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
  return (
    <div className="home">
    <link href="https://api.cryptocloud.plus/static/widget/v2/css/app.css" rel="stylesheet" />
    <vue-widget
      shop_id="gQkiB6VYSU0Wb16G"
      api_key="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1dWlkIjoiTWpZek1Eaz0iLCJ0eXBlIjoicHJvamVjdCIsInYiOiI1OTQzOTY0NjE0NWI3ZWQ1OWQxMDEyNjlmOTJlMWQyODllMzM5ZDZlZWY0MzhjZDI1ZGRlMTgwYmQ2MmQwY2UxIiwiZXhwIjo4ODEyODAzNjkzNX0.Ibgdr7ZAr6XhFPDckL4twqhf9X_EPwJQrEHi6zwZKSs"
      currency="USD "
      amount="50"
      locale="ru"
    ></vue-widget>
    <script src="https://api.cryptocloud.plus/static/widget/v2/js/app.js"></script>
      <Hero />
      <Benefits />
      <Products />
      <Newsletter />
      <About />
    </div>
  );
};

export default Home;
