import React, { useEffect, useState } from 'react';
import CyrillicToTranslit from 'cyrillic-to-translit-js';
import { useDispatch, useSelector } from 'react-redux';
import { setNotification } from '../../features/notification/NotificationSlice';
import { getCategory } from '../../features/category/CategorySlice';
import { FaRegWindowClose } from 'react-icons/fa';
import CategoryService from '../../services/CategoryService';

const Category = () => {
  const dispatch = useDispatch();
  const cyrillicToTranslit = new CyrillicToTranslit();
  const { category } = useSelector((state) => state.category);
  const { user } = useSelector((state) => state.user);
  const [newCategory, setNewCategory] = useState({
    title: '',
    slug: '',
  });
  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  const handleTitleChange = (e) => {
    const { value } = e.target;
    const cleanValue = value.replace(/[^a-zA-Zа-яА-Я0-9 ]+/g, '').replace(/\s+/g, ' ');
    const finalValue = cleanValue.trim();
    setNewCategory((prevCategory) => ({ ...prevCategory, title: value, slug: cyrillicToTranslit.transform(finalValue, '-').toLowerCase() }));
  };

  const createCategory = async (e) => {
    e.preventDefault();

    try {
      await CategoryService.createCategory(newCategory.title, newCategory.slug);
      dispatch(setNotification({ type: 'success', message: 'Category created' }));
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      dispatch(setNotification({ type: 'error', message: 'Some error' }));
    }
  };

  const removeCategory = async (title) => {
    try {
      await CategoryService.removeCategory(title);
      dispatch(setNotification({ type: 'success', message: 'Category deleted' }));
    } catch (error) {
      dispatch(setNotification({ type: 'error', message: 'Some error' }));
      console.log(error.response);
    }
  };
  return (
    <>
      <div className="block product-block">
        <div className="block-top">
          {category.length > 0 ? <h2 className="block-title">Category:</h2> : <h2 className="block-title">Not category</h2>}
        </div>
        {category.length > 0 && (
          <div className="block-main product-main">
            {category.map((item) => (
              <div key={item.title} className="block-main__item main__item category">
                <h3 className="category-title">{item.title}</h3>
                <p className="category-slug">{item.slug}</p>
                <div className={user.role !== 'ADMIN' ? ' main__buttons disabled' : ' main__buttons'}>
                  <button className="delete " onClick={() => removeCategory(item.title)}>
                    <FaRegWindowClose />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <form onSubmit={createCategory} className="create-category">
        <label htmlFor="title">
          Name category
          <input type="text" name="title" id="title" onChange={(e) => handleTitleChange(e)} value={newCategory.title} required />
        </label>
        <label htmlFor="slug">
          Slug category
          <input type="text" name="slug" id="slug" value={newCategory.slug} required readOnly />
        </label>
        <button className="button">Create category</button>
      </form>
    </>
  );
};

export default Category;
