import { Stack } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserTable from '../../../components/Tables/UserTable';
import { getAdminUsersAction } from '../../../redux/actions/UserAction';

const Users = () => {
  const dispatch = useDispatch();
  const { isLoading, users, user } = useSelector((state) => state.user);

  useEffect(() => {
    if (users.length === 0) dispatch(getAdminUsersAction());
  }, [dispatch]);

  return (
    <Stack
      sx={{
        width: '100%',
      }}
    >
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <h2>Users</h2>
      </Stack>
      <Stack pb={3}>
        <UserTable isLoading={isLoading} users={users} user={user} />
      </Stack>
    </Stack>
  );
};

export default Users;
