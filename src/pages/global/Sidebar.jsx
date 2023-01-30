import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { tokens, useMode } from '../../context/theme';
import { getLogoutAction } from '../../redux/actions/UserAction';

const Sidebar = ({ sidebarItem, setSidebarItem }) => {
  const { user } = useSelector((state) => state.user);
  const [theme] = useMode();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(getLogoutAction());
    navigate('/');
  };

  return (
    <List>
      {user?.role === 'admin' && (
        <ListItem disablePadding onClick={() => navigate('/admin/dashboard')}>
          <ListItemButton>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>
      )}
      {user?.role !== 'admin' && (
        <ListItem
          disablePadding
          onClick={() => setSidebarItem('playlists')}
          sx={{
            background: sidebarItem === 'playlists' && colors.blueAccent[1000],
          }}
        >
          <ListItemButton>
            <ListItemIcon>
              <PlayCircleIcon />
            </ListItemIcon>
            <ListItemText primary="My Playlists" />
          </ListItemButton>
        </ListItem>
      )}

      <ListItem
        disablePadding
        onClick={() => setSidebarItem('settings')}
        sx={{
          background: sidebarItem === 'settings' && colors.blueAccent[1000],
        }}
      >
        <ListItemButton>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
      </ListItem>
      <ListItem
        disablePadding
        onClick={() => setSidebarItem('password')}
        sx={{
          background: sidebarItem === 'password' && colors.blueAccent[1000],
        }}
      >
        <ListItemButton>
          <ListItemIcon>
            <AdminPanelSettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Change Password" />
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

export default Sidebar;
