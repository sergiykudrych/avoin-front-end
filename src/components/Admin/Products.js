import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPen } from 'react-icons/fa6';
import { FaRegWindowClose } from 'react-icons/fa';
import { API_URL } from '../../http';
import { useDispatch, useSelector } from 'react-redux';
import ProductService from '../../services/ProductService';
import { setNotification } from '../../features/notification/NotificationSlice';
const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { user } = useSelector((state) => state.user);
  const [search, setSearch] = useState('');
  const [items, setItems] = useState(products);
  const [checkProducts, setCheckProducts] = useState(false);

  useEffect(() => {
    const fetchData = async (search) => {
      try {
        let response;
        if (search.length > 0) {
          response = await ProductService.fetchProductsSearch(search);
        } else {
          response = await ProductService.fetchProducts('all-products', { min: 0 });
        }
        setItems(response.data);
        setCheckProducts(true);
      } catch (error) {
        dispatch(setNotification({ type: 'error', message: 'Some error' }));
        console.log(error.response);
        setCheckProducts(false);
        return error.response;
      }
    };

    fetchData(search);
  }, [search, dispatch]);

  const deleteProduct = async (id) => {
    try {
      await ProductService.removeProduct(id);
      dispatch(setNotification({ type: 'success', message: 'Product deleted' }));
      let result = items.filter((product) => product._id !== id);
      setItems(result);
    } catch (error) {
      dispatch(setNotification({ type: 'error', message: 'Some error' }));
      console.log(error.response);
    }
  };
  return (
    <>
      <div className="block product-block">
        <div className="block-top">
          {items.length > 0 ? <h2 className="block-title">Products:</h2> : <h2 className="block-title">Not products</h2>}
          {checkProducts && <input type="search" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />}
        </div>
        {items.length > 0 && (
          <div className="block-main product-main">
            {items.map((item) => (
              <div key={item.title} className="block-main__item main__item">
                <img src={`${API_URL}/${item.images[0]}`} alt="Product" />
                <Link to={`/product/${item.slug}`} className="main__item-title">
                  {item.title}
                </Link>
                <p className="main__item-price">{item.price}$</p>
                <b className="main__item-description">{item.description}</b>
                <div className={user.role !== 'ADMIN' ? ' main__buttons disabled' : ' main__buttons'}>
                  <Link to={`/product-edit/${item.slug}`} className="edit">
                    <FaPen />
                  </Link>
                  <button className="delete" onClick={() => deleteProduct(item._id)}>
                    <FaRegWindowClose />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Link to="/create-product" className="button">
        Add product
      </Link>
    </>
  );
};

export default Products;
