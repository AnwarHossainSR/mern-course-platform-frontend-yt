import { Box, Button, Card, Input, Stack } from '@mui/material';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import WhiteSpace from '../../components/Common/WhiteSpace';
import { tokens, useMode } from '../../context/theme';
import { getChangePasswordAction } from '../../redux/actions/UserAction';

const ChangePassword = () => {
  const dispatch = useDispatch();
  const [theme] = useMode();
  const colors = tokens(theme.palette.mode);
  const cPasswordRef = useRef();
  const nPasswordRef = useRef();
  const handleChangePassword = () => {
    const data = {
      oldPassword: cPasswordRef.current.value,
      newPassword: nPasswordRef.current.value,
    };
    dispatch(getChangePasswordAction(data));
  };
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: 4,
      }}
    >
      <Stack
        sx={{
          width: '40%',
        }}
      >
        <Card sx={{ p: 3 }}>
          <p>Change your password here.</p>
          <Stack
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            <Input
              type="password"
              placeholder="Current password"
              inputRef={cPasswordRef}
            />
            <Input
              type="password"
              placeholder="New password"
              inputRef={nPasswordRef}
            />

            <WhiteSpace />

            <Button
              variant="contained"
              sx={{
                background: colors.blueAccent[100],
                '&:hover': {
                  background: colors.blueAccent[200],
                },
              }}
              onClick={handleChangePassword}
            >
              Changed Password
            </Button>
          </Stack>
        </Card>
      </Stack>
    </Box>
  );
};

export default ChangePassword;
