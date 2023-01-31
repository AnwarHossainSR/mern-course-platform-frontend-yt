import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getLogoutAction } from '../../redux/actions/UserAction';

const AdminSidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(getLogoutAction());
    navigate('/');
  };

  return (
    <List>
      <ListItem disablePadding onClick={() => navigate('/admin/dashboard')}>
        <ListItemButton>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding onClick={() => navigate('/admin/courses')}>
        <ListItemButton>
          <ListItemIcon>
            <PlayCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Courses" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding onClick={handleLogout}>
        <ListItemButton>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Sign Out" />
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default AdminSidebar;
