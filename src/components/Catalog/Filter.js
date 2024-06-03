import React from 'react';

import CastomCheckbox from '../CastomCheckbox/CastomCheckbox.js';
import ProductService from '../../services/ProductService';
import { useLocation } from 'react-router-dom';

const Filter = ({ setProducts }) => {
  const location = useLocation();
  const slug = location.pathname.split('/')[2];

  const [showFilters, setShowFilters] = React.useState(false);
  const [showSorting, setShowSorting] = React.useState(false);

  const showFilter = (id) => {
    if (id === '#filters') {
      setShowFilters(!showFilters);
      setShowSorting(false);
    }
    if (id === '#sorting') {
      setShowSorting(!showSorting);
      setShowFilters(false);
    }
  };
  const fetchDataFilters = async (min, max) => {
    try {
      const response = await ProductService.fetchProducts(slug, { min: min, max: max });
      setProducts(response.data);
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  };
  return (
    <aside className="filter">
      <div className="filter__buttons">
        <button className="filter__button" onClick={() => showFilter('#filters')}>
          Filters
        </button>
        <button className="filter__button" onClick={() => showFilter('#sorting')}>
          Sorting
        </button>
      </div>
      <div id="filters" className={'filter__forms ' + (showFilters ? 'filter__active' : '')}>
        <form action="#" className="filter__form">
          <h3 className="filter__form-title">Product type</h3>
          <CastomCheckbox value="Furniture" name="Furniture" type="checkbox" />
          <CastomCheckbox value="Sofas" name="Sofas" type="checkbox" />
          <CastomCheckbox value="Homeware" name="Homeware" type="checkbox" />
          <CastomCheckbox value="Light fittings" name="Light-fittings" type="checkbox" />
          <CastomCheckbox value="Accessories" name="Accessories" type="checkbox" />
        </form>

        <form action="#" className="filter__form">
          <h3 className="filter__form-title">Price</h3>

          <CastomCheckbox value="0 - 100" name="price" type="radio" onChange={() => fetchDataFilters(100)} />
          <CastomCheckbox value="101 - 250" name="price" type="radio" onChange={() => fetchDataFilters(101, 250)} />
          <CastomCheckbox value="250 +" name="price" type="radio" onChange={() => fetchDataFilters(250)} />
        </form>
      </div>
      <div id="sorting" className={'filter__forms ' + (showSorting ? 'filter__active' : '')}>
        <form action="#" className="filter__form">
          <h3 className="filter__form-title">Designer</h3>
          <CastomCheckbox value="Robert Smith" name="Robert-Smith" type="checkbox" />
          <CastomCheckbox value="Liam Gallagher" name="Liam-Gallagher" type="checkbox" />
          <CastomCheckbox value="Biggie Smalls" name="Biggie-Smalls" type="checkbox" />
          <CastomCheckbox value="Thom Yorke" name="Thom-Yorke" type="checkbox" />
        </form>
      </div>
    </aside>
  );
};

export default Filter;
