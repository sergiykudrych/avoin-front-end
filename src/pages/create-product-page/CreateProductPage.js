import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadImage } from '../../utils/utils';
import { getCategory } from '../../features/category/CategorySlice';
import { setNotification } from '../../features/notification/NotificationSlice';
import ProductService from '../../services/ProductService';
import FormProduct from '../../components/Form/FormProduct';
import NotLogin from '../../components/Form/NotLogin';

// Styles
import '../../app/change-create-product.css';
const CreateProduct = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [uploadImages, setUploadImages] = useState([]);
  const [product, setProduct] = useState({ title: '', description: '', price: '', images: [], slug: '', category: 'chairs' });
  const [isLoading, setIsLoading] = useState(false);

  const [category, setCategory] = useState([]);
  useEffect(() => {
    document.title = 'Create Product';
    dispatch(getCategory())
      .unwrap()
      .then((response) => {
        setCategory(response);
      })
      .catch((error) => {
        console.error('Помилка');
      });
  }, [dispatch]);

  const createProduct = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const formData = new FormData();
    if (uploadImages.images && uploadImages.images.length) {
      for (let i = 0; i < uploadImages.images.length; i++) {
        formData.append('images', uploadImages.images[i]);
      }
    } else {
      dispatch(setNotification({ type: 'error', message: 'No images' }));
      setIsLoading(false);
      return;
    }
    formData.append('slug', product.slug);
    const arrImages = Array.from(uploadImages.images).map((file) => `images\\${product.slug}-${file.name}`);
    try {
      const data = await uploadImage(formData, product.slug);
      if (data) {
        const { title, description, price, category, slug } = product;
        const response = await ProductService.createProduct(title, description, price, arrImages, category, slug);

        if (response === 200) {
          dispatch(setNotification({ type: 'success', message: 'Product created' }));
          window.location.reload();
        }
        setIsLoading(false);
      } else {
        console.log(data);
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  if (user.role !== 'ADMIN') {
    return <NotLogin />;
  }

  return (
    <div className="create-product change-create__product">
      <h1>Add product</h1>
      <FormProduct
        createProduct={createProduct}
        category={category}
        isLoading={isLoading}
        product={product}
        setProduct={setProduct}
        uploadImages={uploadImages}
        setUploadImages={setUploadImages}
      />
      <br />
    </div>
  );
};

export default CreateProduct;
