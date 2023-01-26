import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Auth from '../Auth/Auth';

const Authenticated = () => {
  const { isAuth } = useSelector((state) => state.user);
  return isAuth ? <Outlet /> : <Auth />;
};

export default Authenticated;
