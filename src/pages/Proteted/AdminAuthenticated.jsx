import { Outlet } from 'react-router-dom';
import Auth from '../Auth/Auth';

const AdminAuthenticated = () => {
  const isAuth = true;
  return isAuth ? <Outlet /> : <Auth />;
};

export default AdminAuthenticated;
