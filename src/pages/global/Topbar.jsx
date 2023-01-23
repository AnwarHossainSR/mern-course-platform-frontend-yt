import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Box, useTheme } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/index.js';
import { ColorModeContext, tokens } from '../../context/theme.js';

const TopBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      p={2}
      backgroundColor={colors.primary[400]}
    >
      <Box
        component="img"
        sx={{
          height: 30,
          width: 120,
        }}
        alt="logo"
        src={assets?.logo}
      />

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          '& > *': {
            margin: theme.spacing(1),
            color: colors.primary[100],
            textDecoration: 'none',
            '&:hover': {
              color: colors.greenAccent[500],
              textDecoration: 'underline',
            },
          },
        }}
      >
        <Link to="/courses">Courses</Link>
        <Link to="/admin/dashboard">Dashboard</Link>
      </Box>
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TopBar;
