import { Box, Button, Card, Input, Stack } from '@mui/material';
import WhiteSpace from '../../components/Common/WhiteSpace';
import { tokens, useMode } from '../../context/theme';

const ChangePassword = () => {
  const [theme] = useMode();
  const colors = tokens(theme.palette.mode);
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
            <Input type="password" placeholder="Current password" />
            <Input type="password" placeholder="New password" />
            <Input type="password" placeholder="Confirm new password" />

            <WhiteSpace />

            <Button
              variant="contained"
              sx={{
                background: colors.blueAccent[100],
                '&:hover': {
                  background: colors.blueAccent[200],
                },
              }}
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
