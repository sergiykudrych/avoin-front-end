import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Catalog/Header';
import Filter from '../../components/Catalog/Filter';
import ProductsCatalog from '../../components/Catalog/ProductsCatalog';
import ProductService from '../../services/ProductService';

// Style
import './catalog-page.scss';

const CatalogPage = () => {
  const location = useLocation();
  const slug = location.pathname.split('/')[2];
  const formattedName = slug.replace(/-/g, ' ').replace(/^\w/, (c) => c.toUpperCase());
  const [products, setProducts] = useState([]);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
  useEffect(() => {
    document.title = `${formattedName} - Catalog`;
    const fetchData = async (slug) => {
      try {
        const response = await ProductService.fetchProducts(slug, { min: 0 });
        setProducts(response.data);
      } catch (error) {
        console.log(error.response);
        return error.response;
      }
    };
    fetchData(slug);
  }, [slug, formattedName]);

  return (
    <section className="catalog">
      <Header formattedName={formattedName} />

      <div className="catalog__products grid">
        <Filter setProducts={setProducts} />
        {products.length === 0 ? <div className="loader">Not products</div> : <ProductsCatalog products={products} />}
      </div>
    </section>
  );
};

export default CatalogPage;
