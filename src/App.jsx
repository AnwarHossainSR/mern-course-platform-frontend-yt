import { Box, Stack, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { ColorModeContext, tokens, useMode } from './context/theme';
import About from './pages/About';
import Dashboard from './pages/admin/Dashboard';
import ContactMe from './pages/ContactMe';
import Course from './pages/Course';
import TopBar from './pages/global/Topbar';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

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
            maxHeight: 'auto',
          }}
        >
          <TopBar />
          <Stack
            sx={{
              color: colors.primary[100],
              my: 4,
              px: { xs: 2, sm: 4, md: 6, lg: 8 },
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<ContactMe />} />
              <Route path="/about" element={<About />} />
              <Route path="/courses">
                <Route index element={<Course />} />
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
