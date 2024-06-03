import { FaRegTimesCircle, FaTrash } from 'react-icons/fa';
import React, { useState } from 'react';
import { API_URL } from '../../http';
import { addItem, removeItem, setCountItem } from '../../features/cart/CartSlice';
import { useDispatch } from 'react-redux';
import { setNotification } from '../../features/notification/NotificationSlice';

const Order = ({ item }) => {
  const dispatch = useDispatch();
  const [remove, setRemove] = useState(false); // Змінено на тип boolean, оскільки remove це boolean

  const countChange = (value) => {
    if (value === 'plus') {
      dispatch(addItem(item));
    } else {
      if (item.count === 1) {
        document.body.style.overflow = 'hidden';
        setRemove(true); // Встановлюємо remove в true, щоб показати модальне вікно підтвердження видалення
      } else {
        dispatch(setCountItem(item));
      }
    }
  };
  const confirmDelete = () => {
    dispatch(removeItem(item)); // Видаляємо елемент з корзини
    dispatch(setNotification({ type: 'success', message: 'Product deleted' })); // Встановлюємо повідомлення про успішне видалення
    document.body.style.overflow = 'auto'; // Відновлюємо прокрутку сторінки
    setRemove(false); // Сховати модальне вікно
  };

  const hideModal = () => {
    document.body.style.overflow = 'auto'; // Відновлюємо прокрутку сторінки
    setRemove(false); // Сховати модальне вікно
  };
  return (
    <li className="item-cart">
      <img className="item-cart__image" src={` ${API_URL}/${item.images[0]}`} alt={item.title} width={109} height={134} />
      <div className="item-cart__info">
        <div className="item-cart__description">
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <span>£{item.price}</span>
        </div>
        <div className="item-cart__steper">
          {/* <Steper count={count} setCount={setCount} color="#f9f9f9" /> */}
          <div className="steper">
            <button style={{ backgroundColor: '#f9f9f9' }} className="steper-button steper-minus" onClick={() => countChange('minus')}>
              -
            </button>
            <input style={{ backgroundColor: '#f9f9f9' }} className="steper-value" type="text" disabled value={item.count} />
            <button style={{ backgroundColor: '#f9f9f9' }} className="steper-button steper-plus" onClick={() => countChange('plus')}>
              +
            </button>
          </div>
        </div>
      </div>
      <p className="item-cart__total-price">£{item.price * item.count}</p>
      {console.log(remove)}
      {remove && (
        <div className="item-cart__delete">
          <div className="item-cart__delete-body">
            <h3>Remove product?</h3>
            <button className="item-cart__delete--remove" onClick={confirmDelete}>
              <FaTrash />
            </button>
            <button onClick={hideModal} className="item-cart__delete--cancel">
              <FaRegTimesCircle />
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

export default Order;
