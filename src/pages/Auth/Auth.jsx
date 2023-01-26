import {
  Alert,
  Box,
  Button,
  Card,
  CircularProgress,
  Input,
  Stack,
} from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { tokens, useMode } from '../../context/theme';
import {
  getLoginAction,
  getRegisterAction,
} from '../../redux/actions/UserAction';

const Auth = () => {
  const navigate = useNavigate();
  const { isAuth, error, isLoading } = useSelector((state) => state.user);
  const [auth, setAuth] = useState('login');
  const [theme] = useMode();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();

  const loginEmailRef = useRef();
  const loginPasswordRef = useRef();
  const regNameRef = useRef();
  const regPasswordRef = useRef();
  const regEmailRef = useRef();

  const handleLogin = () => {
    if (
      loginEmailRef.current.value === '' ||
      loginPasswordRef.current.value === ''
    )
      return toast.error('Please fill all the fields');

    const credentials = {
      email: loginEmailRef.current.value,
      password: loginPasswordRef.current.value,
    };
    dispatch(getLoginAction(credentials));
  };

  const handleRegister = () => {
    if (
      regNameRef.current.value === '' ||
      regEmailRef.current.value === '' ||
      regPasswordRef.current.value === ''
    )
      return toast.error('Please fill all the fields');

    const credentials = {
      name: regNameRef.current.value,
      email: regEmailRef.current.value,
      password: regPasswordRef.current.value,
    };
    dispatch(getRegisterAction(credentials));
  };

  useEffect(() => {
    if (isAuth && localStorage.getItem('token')) {
      navigate('/me');
    }
  }, [isAuth]);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Stack direction="row" spacing={2}>
        <Card sx={{ width: 400, height: 400 }}>
          <Stack p={3} direction="row" spacing={2} justifyContent="center">
            <Button
              variant="contained"
              onClick={() => setAuth('login')}
              sx={{
                background:
                  auth === 'login'
                    ? colors.blueAccent[200]
                    : colors.blueAccent[100],
                '&:hover': {
                  background: colors.blueAccent[200],
                },
              }}
            >
              Login
            </Button>
            <Button
              variant="contained"
              onClick={() => setAuth('register')}
              sx={{
                background:
                  auth === 'register'
                    ? colors.blueAccent[200]
                    : colors.blueAccent[100],
                '&:hover': {
                  background: colors.blueAccent[200],
                },
              }}
            >
              Register
            </Button>
          </Stack>
          {auth === 'login' && (
            <Stack p={3} gap={3} mt={1}>
              <Input
                placeholder="Email"
                type="email"
                inputRef={loginEmailRef}
              />
              <Input
                placeholder="Password"
                inputRef={loginPasswordRef}
                type="password"
              />
              {error?.login && <Alert severity="error">{error?.login}</Alert>}
              <Button
                variant="contained"
                sx={{
                  background: colors.blueAccent[100],
                  '&:hover': {
                    background: colors.blueAccent[200],
                  },
                }}
                onClick={handleLogin}
              >
                {isLoading ? <CircularProgress /> : 'Login'}
              </Button>
            </Stack>
          )}
          {auth === 'register' && (
            <Stack p={3} gap={3} mt={1}>
              <Input placeholder="Name" type="text" inputRef={regNameRef} />
              <Input placeholder="Email" type="email" inputRef={regEmailRef} />
              <Input
                placeholder="Password"
                type="password"
                inputRef={regPasswordRef}
              />
              {error?.register && (
                <Alert severity="error">{error?.register}</Alert>
              )}
              <Button
                variant="contained"
                sx={{
                  background: colors.blueAccent[100],
                  '&:hover': {
                    background: colors.blueAccent[200],
                  },
                }}
                onClick={handleRegister}
              >
                Sign Up
              </Button>
            </Stack>
          )}
        </Card>
      </Stack>
    </Box>
  );
};

export default Auth;
