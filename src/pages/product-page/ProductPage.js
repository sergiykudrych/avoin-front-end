import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProductService from '../../services/ProductService';

// Сomponents
import Product from '../../components/Product/Product';
import Card from '../../components/CardItem';
import Benefits from '../../components/Benefits/Benefits';
import Newsletter from '../../components/Newsletter';

// Style
import './product-page.scss';

// Image
import productImage5 from '../../img/product/product-5.png';
import productImage6 from '../../img/product/product-6.png';
import productImage7 from '../../img/product/product-7.png';
import Image from '../../img/hero-about.jpg';
import Loader from '../../components/Loader/Loader';

const ProductPage = () => {
  const { slug } = useParams();
  const [item, setItem] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ProductService.getProduct(slug);
        setItem(response.data);
        document.title = response.data.title;
      } catch (error) {
        console.log(error.response);
        return error.response;
      }
    };

    fetchData();
  }, [slug]);
  if (item.length === 0) return <Loader />;
  return (
    <div className="product-page">
      <Product item={item} />
      <section className="products">
        <div className="container">
          <h2 className="products__title title">You might also love these</h2>
          <ul className="products__list grid list-reset product--overflow scroll">
            <Card
              image={productImage5}
              title="The Poplar suede sofa"
              price="499"
              slug="relax-in-style-explore-our-range-of-luxurious-sofas"
              modify={'products__item--big'}
            />
            <Card image={productImage6} title="The Dandy chair" price="250" slug="the-dandy-chair" />
            <Card image={productImage7} title="Nature's Touch" price="150" slug="natures-touch-wooden-chairs-for-rustic-elegance" />
          </ul>

          <div className="centered">
            <Link to="/catalog/all-products" className="products__button btn btn--gray">
              View collection
            </Link>
          </div>
        </div>
      </section>
      <Benefits modify="about" />
      <img className="product-bg__image" src={Image} alt="" />
      <Newsletter />
    </div>
  );
};

export default ProductPage;
