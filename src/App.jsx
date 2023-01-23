import { Box, Stack, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { ColorModeContext, tokens, useMode } from './context/theme';
import About from './pages/About';
import ContactMe from './pages/ContactMe';
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
          style={{
            background: colors.blueAccent[900],
            minHeight: '100vh',
          }}
        >
          <TopBar />
          <Stack>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contacts" element={<ContactMe />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Stack>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
