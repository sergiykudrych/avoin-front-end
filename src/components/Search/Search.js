import React, { useState, useEffect } from 'react';
import ProductService from '../../services/ProductService';
import { setNotification } from '../../features/notification/NotificationSlice';
import { useDispatch } from 'react-redux';
// Style
import './search-block.scss';
import FindItem from './FindItem';
const Search = () => {
  const [value, setValue] = useState('');
  const [findItem, setFindItem] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async (value) => {
      setIsLoading(true);
      try {
        const response = await ProductService.fetchProductsSearch(value);
        setFindItem(response.data);
      } catch (error) {
        dispatch(setNotification({ type: 'error', message: 'Some error' }));
        console.log(error.response);
        return error.response;
      } finally {
        setIsLoading(false);
      }
    };
    if (value.length > 2) {
      fetchData(value);
    } else {
      setFindItem([]);
    }
  }, [value, dispatch]);

  return (
    <div className="search">
      <div className="search__block">
        <label className="search__label">
          <input type="text" name="search" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Search" />
        </label>
      </div>

      {/* {findItem.length === 0 && !isLoading && <p className="not-find">Not find Product</p>} */}
      {isLoading && <p className="loading">Loading...</p>}
      {findItem.length > 0 && (
        <ul className="search__result">
          {findItem?.map((item) => (
            <FindItem key={item._id} item={item} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
