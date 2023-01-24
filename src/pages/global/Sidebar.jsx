import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
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
import { tokens, useMode } from '../../context/theme';

const Sidebar = ({ sidebarItem, setSidebarItem }) => {
  const [theme] = useMode();
  const colors = tokens(theme.palette.mode);

  return (
    <List>
      <ListItem
        disablePadding
        onClick={() => setSidebarItem('playlists')}
        sx={{
          background: sidebarItem === 'playlists' && colors.primary[800],
        }}
      >
        <ListItemButton>
          <ListItemIcon>
            <PlayCircleIcon />
          </ListItemIcon>
          <ListItemText primary="My Playlists" />
        </ListItemButton>
      </ListItem>
      <ListItem
        disablePadding
        onClick={() => setSidebarItem('settings')}
        sx={{
          background: sidebarItem === 'settings' && colors.primary[800],
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
          background: sidebarItem === 'password' && colors.primary[800],
        }}
      >
        <ListItemButton>
          <ListItemIcon>
            <AdminPanelSettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Change Password" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
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
