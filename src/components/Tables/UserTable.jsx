import { Avatar, Button, Chip, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useDispatch } from 'react-redux';
import {
  getAdminDeleteUserAction,
  getAdminUpdateUserRoleAction,
} from '../../redux/actions/UserAction';

const UserTable = ({ isLoading, users, user }) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(getAdminDeleteUserAction(id));
  };
  const changeUserRole = (id) => {
    dispatch(getAdminUpdateUserRoleAction(id));
  };

  if (isLoading) return <Typography variant="h4">Loading...</Typography>;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Avatar</TableCell>
            <TableCell align="right">Playlists</TableCell>
            <TableCell align="right">Role</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users?.length > 0 &&
            users.map((item) => (
              <TableRow
                key={item?._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {item?.name}
                </TableCell>
                <TableCell component="th" scope="row">
                  <Avatar src={item?.avatar?.url} />
                </TableCell>
                <TableCell align="right">{item?.playlist?.length}</TableCell>
                <TableCell align="right">
                  <Chip label={item?.role} color="secondary" />
                </TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    onClick={() => changeUserRole(item._id)}
                    disabled={item?._id === user?._id}
                  >
                    Change to {item?.role === 'admin' ? 'user' : 'admin'}
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: 'red',
                      ml: 1,
                    }}
                    disabled={item?.role === 'admin' || item?._id === user?._id}
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;
