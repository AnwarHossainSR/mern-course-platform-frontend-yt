import { Box, Stack, ThemeProvider } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ColorModeContext, tokens, useMode } from './context/theme';
import About from './pages/About';
import AdminCourseDetails from './pages/Auth/admin/AdminCourseDetails';
import AdminCourses from './pages/Auth/admin/AdminCourses';
import CreateCourse from './pages/Auth/admin/CreateCourse';
import Dashboard from './pages/Auth/admin/Dashboard';
import Users from './pages/Auth/admin/Users';
import Auth from './pages/Auth/Auth';
import TopBar from './pages/global/Topbar';
import Home from './pages/Home';
import CourseDetails from './pages/me/CourseDetails';
import PaymentFail from './pages/me/PaymentFail';
import PaymentSuccess from './pages/me/PaymentSuccess';
import Profile from './pages/me/Profile';
import NotFound from './pages/NotFound';
import AdminAuthenticated from './pages/Proteted/AdminAuthenticated';
import Authenticated from './pages/Proteted/Authenticated';
import RequestCourse from './pages/RequestCourse';
import { getWhoAmIAction } from './redux/actions/UserAction';
const App = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.user);
  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    if (!isAuth && localStorage.getItem('token')) {
      dispatch(getWhoAmIAction());
    }
  }, [isAuth]);

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
              //px: 2,
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/request-course" element={<RequestCourse />} />
              <Route path="/about" element={<About />} />
              <Route path="me/" element={<Authenticated />}>
                <Route index element={<Profile />} />
                <Route path="subscribe/success" element={<PaymentSuccess />} />
                <Route path="subscribe/fail" element={<PaymentFail />} />
                <Route path="courses/">
                  <Route path=":id" element={<CourseDetails />} />
                </Route>
              </Route>
              <Route path="admin/" element={<AdminAuthenticated />}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="courses/">
                  <Route index element={<AdminCourses />} />
                  <Route path=":id" element={<AdminCourseDetails />} />
                  <Route path="add" element={<CreateCourse />} />
                </Route>
                <Route path="users/">
                  <Route index element={<Users />} />
                </Route>
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
