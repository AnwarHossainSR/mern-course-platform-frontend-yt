import { Stack } from '@mui/material';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import AdminSidebar from '../global/AdminSidebar';

const AdminAuthenticated = () => {
  const navigate = useNavigate();
  const { user, isLoading } = useSelector((state) => state.user);

  if (isLoading) return null;

  if (user?.role !== 'admin') {
    navigate('/me');
    // navigate('/me', {
    //   state: { message: 'You are not authorized to access this page.' },
    // });
  }

  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <AdminSidebar />
      <Stack
        ml={5}
        sx={{
          width: '85%',
        }}
      >
        <Outlet />
      </Stack>
    </Stack>
  );
};

export default AdminAuthenticated;
