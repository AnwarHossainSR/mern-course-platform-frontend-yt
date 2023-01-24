import { Box, Stack, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { ColorModeContext, tokens, useMode } from './context/theme';
import About from './pages/About';
import Dashboard from './pages/admin/Dashboard';
import Auth from './pages/Auth/Auth';
import ContactMe from './pages/ContactMe';
import Course from './pages/Course';
import TopBar from './pages/global/Topbar';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import Authenticated from './pages/Proteted/Authenticated';

const App = () => {
  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            background: colors.blueAccent[900],
            minHeight: '100vh',
            maxHeight: 'fit-content',
          }}
        >
          <TopBar />
          <Stack
            sx={{
              color: colors.primary[100],
              mt: 4,
              px: { xs: 2, sm: 4, md: 6, lg: 8 },
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/contact" element={<ContactMe />} />
              <Route path="/about" element={<About />} />
              <Route path="/courses">
                <Route index element={<Course />} />
              </Route>
              <Route path="/me" element={<Authenticated />}>
                <Route index element={<Profile />} />
              </Route>
              <Route path="/admin/*">
                <Route path="dashboard" element={<Dashboard />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Stack>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
