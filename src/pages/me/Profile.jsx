import { Box } from '@mui/material';
import { useState } from 'react';
import Sidebar from '../global/Sidebar';
import ChangePassword from './ChangePassword';
import Playlists from './Playlists';
import Settings from './Settings';

const Profile = () => {
  const [sidebarItem, setSidebarItem] = useState('playlists');
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
