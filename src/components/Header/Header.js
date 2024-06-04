import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCategory } from '../../features/category/CategorySlice';

// Імпорт стилів і зображень
import logoIcon from '../../img/Avion.svg';
import searchIcon from '../../img/icons/search.svg';
import cartIcon from '../../img/icons/cart.svg';
import profile from '../../img/icons/profile.svg';
import './header.scss';
import Search from '../Search/Search';

const Header = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState([]);
  const [burger, setBurger] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);
  const [search, setSearch] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 425);
  const header = useRef(null);

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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 425);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const scrollPage = () => {
      if (window.pageYOffset > 100) {
        header.current.classList.add('fixed');
      } else {
        header.current.classList.remove('fixed');
      }
    };
    window.addEventListener('scroll', scrollPage);
    return () => {
      window.removeEventListener('scroll', scrollPage);
    };
  }, []);

  const openMenu = (value) => {
    setBurger(value);
    document.body.classList.toggle('_lock');
  };

  const handleClickMenu = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    if (document.querySelector('.menu__body').classList.contains('_active')) {
      setBurger(false);
      document.querySelector('.menu__body').classList.remove('_active');
      document.querySelector('.menu__icon').classList.remove('_active');
      document.body.classList.remove('_lock');
    }
  };

  const categoris = () => {
    return (
      <ul className={'category-body list-reset' + (openCategory ? ' _active' : '')}>
        <li>
          <Link onClick={() => handleClickMenu()} className="categoris-item " to="/catalog/all-products">
            All products
          </Link>
        </li>
        {category?.map((item) => (
          <li key={item.slug}>
            <Link onClick={() => handleClickMenu()} to={`/catalog/${item.slug}`} className="categoris-item">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <header ref={header} className="header">
        <div className="header-container">
          <Link onClick={() => handleClickMenu()} to="/" className="logo">
            <img src={logoIcon} alt="logo" />
          </Link>
          <div className="header__menu menu">
            <div className={`menu__icon ${burger ? '_active' : ''}`} onClick={() => openMenu(!burger)}>
              <span></span>
            </div>
            <nav className={`menu__body ${burger ? '_active' : ''}`}>
              <h2 className={`menu__title ${openCategory ? '_active' : ''}`} onClick={() => setOpenCategory(!openCategory)}>
                Categories
              </h2>
              {isMobile && categoris()}
              <ul className="menu__list list-reset">
                <li>
                  <Link onClick={() => handleClickMenu()} className="menu-link" to="/about-us">
                    About us
                  </Link>
                </li>
                <li>
                  <Link onClick={() => handleClickMenu()} className="menu-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-action">
            {search && <Search />}
            <button onClick={() => setSearch(!search)}>
              <img src={searchIcon} alt="Search" />
            </button>
            <Link onClick={() => handleClickMenu()} to="/cart">
              <img src={cartIcon} alt="Cart" />
            </Link>
            <Link onClick={() => handleClickMenu()} to="/cabinet">
              <img src={profile} alt="Profile" />
            </Link>
          </div>
        </div>
        <div className="header-category category">{!isMobile && categoris()}</div>
      </header>
    </>
  );
};

export default Header;
