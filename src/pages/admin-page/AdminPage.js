import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

// Components
import Users from '../../components/Admin/Users';
import Products from '../../components/Admin/Products';
import Category from '../../components/Admin/Category';

// Styles
import '../../components/Admin/style.scss';

const Admin = () => {
  useEffect(() => {
    document.title = 'Admin panel';
  }, []);
  const { user } = useSelector((state) => state.user);

  return (
    <div className="admin-panel">
      <h1>Admin panel</h1>
      <Products />
      {user.role === 'ADMIN' && <Users />}
      <Category />
    </div>
  );
};

export default Admin;
