import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box, Button, Card, Stack } from '@mui/material';

const PaymentSuccess = () => {
  return (
    <Stack
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          fontSize: '2rem',
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        <Card
          sx={{
            padding: '1rem',
            width: '30rem',
            height: '30rem',
            color: 'green',
          }}
        >
          <p>Subscription Success!</p>

          <p>
            <CheckCircleIcon sx={{ fontSize: '5rem' }} />
          </p>

          <Button variant="contained" href="/me">
            Go to Home
          </Button>
        </Card>
      </Box>
    </Stack>
  );
};

export default PaymentSuccess;
