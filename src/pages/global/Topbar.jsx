import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import { Box, useTheme } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { assets } from '../../assets/index.js';
import { ColorModeContext, tokens } from '../../context/theme.js';

const TopBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      p={2}
      backgroundColor={colors.primary[400]}
      px={{ xs: 2, sm: 4, md: 6, lg: 8 }}
    >
      <Box
        component="img"
        sx={{
          height: 45,
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
            color: colors.grey[100],
            textDecoration: 'none',
            '&:hover': {
              color: colors.greenAccent[500],
              textDecoration: 'underline',
            },
          },
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/auth">Auth</Link>
      </Box>
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? (
            <LightModeOutlinedIcon />
          ) : (
            <DarkModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton onClick={() => navigate('/me')}>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TopBar;
