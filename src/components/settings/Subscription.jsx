import { Box, Chip, Typography } from '@mui/material';
import WhiteSpace from '../Common/WhiteSpace';

const Subscription = () => {
  return (
    <Box p={3}>
      <Typography variant="h5">Subscription Info</Typography>
      <Box>
        <Typography variant="body1">
          You are currently subscribed to the following plans:
        </Typography>
        <WhiteSpace height={20} />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography variant="p">Subscribe Date : 24th Nov, 2022</Typography>
          <Typography variant="p">Expiry Date : 24th Nov, 2023</Typography>
          <Typography variant="p">Plan : Basic</Typography>
          <Typography variant="p">
            Status : <Chip label="Active" color="success" />
          </Typography>
        </Box>

        <WhiteSpace height={20} />
      </Box>
    </Box>
  );
};

export default Subscription;
