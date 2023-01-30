import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

const AdminAuthenticated = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  if (user?.role !== 'admin') {
    navigate('/me');
    // navigate('/me', {
    //   state: { message: 'You are not authorized to access this page.' },
    // });
  }

  return <Outlet />;
};

export default AdminAuthenticated;
