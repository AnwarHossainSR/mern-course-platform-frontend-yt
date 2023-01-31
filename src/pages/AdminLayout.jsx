import { Box, Stack, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { ColorModeContext } from '../context/theme';
import AdminCourseDetails from './Auth/admin/AdminCourseDetails';
import AdminCourses from './Auth/admin/AdminCourses';
import Dashboard from './Auth/admin/Dashboard';
import AdminSidebar from './global/AdminSidebar';
import TopBar from './global/Topbar';
import AdminAuthenticated from './Proteted/AdminAuthenticated';

const AdminLayout = ({ theme, colorMode, colors }) => {
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
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: { xs: 2, sm: 4, md: 6, lg: 8 },
            }}
          >
            <AdminSidebar />
            <Routes>
              <Route path="admin/" element={<AdminAuthenticated />}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="courses/">
                  <Route index element={<AdminCourses />} />
                  <Route path=":id" element={<AdminCourseDetails />} />
                </Route>
              </Route>
            </Routes>
          </Stack>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default AdminLayout;
