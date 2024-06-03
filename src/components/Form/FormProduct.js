import React, { useRef } from 'react';
import CyrillicToTranslit from 'cyrillic-to-translit-js';
import { API_URL } from '../../http';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const FormProduct = ({ createProduct, category, isLoading, product, setProduct, uploadImages, setUploadImages }) => {
  const { user } = useSelector((state) => state.user);

  const location = useLocation();
  const url = location.pathname.split('/')[1];
  const cyrillicToTranslit = new CyrillicToTranslit();
  const fileInputRef = useRef(null);
  const errorPriceRef = useRef(null);
  const formButton = useRef(null);

  const handleTitleChange = (event) => {
    const { name, value } = event.target;
    const cleanValue = value.replace(/[^a-zA-Zа-яА-Я0-9 ]+/g, '').replace(/\s+/g, ' ');
    const finalValue = cleanValue.trim();
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value, slug: cyrillicToTranslit.transform(finalValue, '-').toLowerCase() }));
  };
  const changeHandle = (event) => {
    const { name, value } = event.target;
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };
  const changeHandleImage = (event) => {
    const { name, files } = event.target;
    setUploadImages((prevUploadImages) => ({
      ...prevUploadImages,
      [name]: [...(prevUploadImages[name] || []), ...files],
    }));
  };
  const changeHandlePrice = (event) => {
    const { value } = event.target;
    const span = errorPriceRef.current;
    if (Number(value)) {
      setProduct((prevProduct) => ({ ...prevProduct, price: value }));
      span.classList.remove('error-price');
      formButton.current.disabled = false;
    } else if (value.length === 0) {
      span.innerHTML = "Це поле обов'язкове";
      setProduct((prevProduct) => ({ ...prevProduct, price: '' }));
      span.classList.add('error-price');
      formButton.current.disabled = true;
    } else {
      span.innerHTML = 'Введіть тільки цифри';
      span.classList.add('error-price');
    }
  };
  const changeCategory = (event) => {
    const { value } = event.target;
    setProduct((prevProduct) => ({ ...prevProduct, category: value }));
  };
  const deleteUploadImage = (e, item) => {
    e.preventDefault();
    const newArray = uploadImages.images.filter((image) => image.name !== item.name);
    setUploadImages((prevUploadImages) => ({
      ...prevUploadImages,
      images: [...newArray],
    }));
    if (newArray.length === 0) {
      fileInputRef.current.value = '';
    }
  };
  if (JSON.stringify(product) === '{}') {
    return <h2>Load product</h2>;
  } else {
    return (
      <form onSubmit={createProduct} className="create-product">
        <label>
          <p>Upload images</p>
          <div className="uploads-images">
            {/* Якщо є фото в product то відображаємо */}
            {product.images?.length > 0 && product.images.map((image, index) => <img key={index} src={API_URL + '/' + image} alt="User Profile" />)}

            {/* Якщо завантажуємо фото то відображаємо тут */}
            {uploadImages.images?.length > 0 &&
              Array.from(uploadImages.images).map((image, index) => (
                <button className="delete-image" key={index} onClick={(e) => deleteUploadImage(e, image)}>
                  <img src={URL.createObjectURL(image)} alt="User Profile" />
                </button>
              ))}
          </div>
          <input multiple type="file" name="images" ref={fileInputRef} onChange={changeHandleImage} />
        </label>
        <label>
          Name product
          <input type="text" name="title" value={product.title} onChange={handleTitleChange} placeholder="Name" required />
        </label>
        <label>
          Price product
          <input
            type="tel"
            name="price"
            value={product.price}
            onChange={changeHandlePrice}
            placeholder="Price"
            required
            pattern="\d*"
            title="only digits."
          />
          <span ref={errorPriceRef} className="input-error">
            (only digits)
          </span>
        </label>
        <label>
          Link product
          <input type="text" name="slug" value={product.slug} onChange={changeHandle} placeholder="link" required />
        </label>
        <label htmlFor="category-select">
          Category:
          <select id="category-select" value={product.category} onChange={changeCategory}>
            {category && category.length > 0 ? (
              category.map((category) => (
                <option key={category._id} value={category.slug}>
                  {category.title}
                </option>
              ))
            ) : (
              <option>Select category</option>
            )}
          </select>
        </label>

        <label>
          Description product
          <input type="text" name="description" value={product.description} onChange={changeHandle} placeholder="Description" required />
        </label>
        {url === 'product-edit' && (
          <button disabled={user.role !== 'ADMIN'} ref={formButton} className="btn btn--dark " type="submit">
            {isLoading ? 'Update...' : 'Update'}
          </button>
        )}
        {url === 'create-product' && (
          <button disabled={user.role !== 'ADMIN'} ref={formButton} className="btn btn--dark " type="submit">
            {isLoading ? 'Create...' : 'Create'}
          </button>
        )}
        {user.role !== 'ADMIN' && <p>Create or edit products only for admins</p>}
      </form>
    );
  }
};

export default FormProduct;
