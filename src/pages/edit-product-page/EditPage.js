import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { uploadImage } from '../../utils/utils';
import ProductService from '../../services/ProductService';
import { getCategory } from '../../features/category/CategorySlice';
import { setNotification } from '../../features/notification/NotificationSlice';
import { updateRequest } from '../../components/EditProduct/function';
import FormProduct from '../../components/Form/FormProduct';
import NotLogin from '../../components/Form/NotLogin';

const EditProduct = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { slug } = useParams();
  const [uploadImages, setUploadImages] = useState([]);
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ProductService.getProduct(slug);
        setProduct(response.data);
      } catch (error) {
        console.log(error.response);
        return error.response;
      }
    };

    fetchData();
  }, [slug]);

  useEffect(() => {
    document.title = 'Edit: ' + product.title;
  }, [product]);

  useEffect(() => {
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
    if (uploadImages.images && Array.from(uploadImages.images).length > 0) {
      const formData = new FormData();
      for (let i = 0; i < uploadImages.images.length; i++) {
        formData.append('images', uploadImages.images[i]);
      }
      formData.append('slug', product.slug);

      const data = await uploadImage(formData, product.slug);

      const arrImages = Array.from(uploadImages.images).map((file) => `images\\${product.slug}-${file.name}`);
      product.images = product.images.flat();
      product.images = [...product.images, ...arrImages];

      data && updateRequest(product.title, product.description, product.price, product.images, product.category, product.slug, product._id);
    } else {
      product.images = product.images.flat();
      updateRequest(product.title, product.description, product.price, product.images, product.category, product.slug, product._id);
    }
    dispatch(setNotification({ type: 'success', message: 'Успішно оновлено' }));
  };

  if (user.role !== 'ADMIN' && user.role !== 'MODERATOR') {
    return <NotLogin />;
  }
  return (
    <div className="create-product change-create__product  ">
      <h1>Change product</h1>
      <div>
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
    </div>
  );
};

export default EditProduct;
