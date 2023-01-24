import { Box } from '@mui/material';
import { useState } from 'react';
import Sidebar from './global/Sidebar';
import ChangePassword from './me/ChangePassword';
import Playlists from './me/Playlists';
import Settings from './me/Settings';

const Profile = () => {
  const [sidebarItem, setSidebarItem] = useState('settings');
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
      }}
    >
      <Box
        sx={{
          width: '20%',
        }}
      >
        <Sidebar setSidebarItem={setSidebarItem} sidebarItem={sidebarItem} />
      </Box>
      <Box
        sx={{
          width: '80%',
          p: 2,
        }}
      >
        {sidebarItem === 'settings' && <Settings />}
        {sidebarItem === 'password' && <ChangePassword />}
        {sidebarItem === 'playlists' && <Playlists />}
      </Box>
    </Box>
  );
};

export default Profile;
