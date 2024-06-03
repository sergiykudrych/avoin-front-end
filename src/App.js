import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { checkAuth } from './features/user/UserSlice';
import { setNotification } from './features/notification/NotificationSlice';
import { addItem } from './features/cart/CartSlice';

// Pages
import Home from './pages/home-page/HomePage';
import About from './pages/about-page/AboutPage';
import Product from './pages/product-page/ProductPage';
import CartPage from './pages/cart-page/CartPage';
import ContactPage from './pages/contact-page/ContactPage';
import CatalogPage from './pages/catalog-page/CatalogPage';
import CabinetPage from './pages/cabinet-page/CabinetPage';
import AdminPage from './pages/admin-page/AdminPage';
import LoginPage from './pages/login-page/LoginPage';
import RegistrationPage from './pages/registarion-page/RegistrationPage';
import OrderPage from './pages/order-page/OrderPage';
import CreateProductPage from './pages/create-product-page/CreateProductPage';
import EditProductPage from './pages/edit-product-page/EditPage';

// Сomponents
import Notification from './components/Notification/Notification';
import BlockFreeDelivery from './components/Header/BlockFreeDelivery';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuth())
        .unwrap()
        .then((response) => {})
        .catch((error) => {
          dispatch(setNotification({ type: 'error', message: 'error auth' }));
          console.error(error.message);
        });
    }
    if (localStorage.getItem('cart')) {
      const items = JSON.parse(localStorage.getItem('cart'));
      items.forEach((item) => {
        dispatch(addItem(item));
      });
    }
  }, [dispatch]);

  return (
    <>
      <BlockFreeDelivery />
      <Header />
      <div className="wrapper">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/catalog/:slug" element={<CatalogPage />} />
            <Route path="/product/:slug" element={<Product />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cabinet" element={<CabinetPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/checkout" element={<OrderPage />} />
            <Route path="/create-product" element={<CreateProductPage />} />
            <Route path="/product-edit/:slug" element={<EditProductPage />} />
          </Routes>
        </div>
        <Footer />
        <Notification />
      </div>
    </>
  );
}

export default App;
