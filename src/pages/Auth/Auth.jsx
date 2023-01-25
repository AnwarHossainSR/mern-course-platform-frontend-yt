import { Box, Button, Card, Input, Stack } from '@mui/material';
import { useState } from 'react';
import WhiteSpace from '../../components/Common/WhiteSpace';
import { tokens, useMode } from '../../context/theme';

const Auth = () => {
  const [auth, setAuth] = useState('login');
  const [theme] = useMode();
  const colors = tokens(theme.palette.mode);
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
            <Stack p={3} gap={3} mt={3}>
              <Input placeholder="Email" />
              <Input placeholder="Password" />
              <WhiteSpace height={20} />
              <Button
                variant="contained"
                sx={{
                  background: colors.blueAccent[100],
                  '&:hover': {
                    background: colors.blueAccent[200],
                  },
                }}
              >
                Login
              </Button>
            </Stack>
          )}
          {auth === 'register' && (
            <Stack p={3} gap={3} mt={3}>
              <Input placeholder="Name" />
              <Input placeholder="Email" />
              <Input placeholder="Password" />
              <WhiteSpace height={20} />
              <Button
                variant="contained"
                sx={{
                  background: colors.blueAccent[100],
                  '&:hover': {
                    background: colors.blueAccent[200],
                  },
                }}
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
