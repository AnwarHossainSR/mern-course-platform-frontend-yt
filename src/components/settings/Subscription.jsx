import { Box, Chip, Typography } from '@mui/material';
import moment from 'moment';
import { useSelector } from 'react-redux';
import WhiteSpace from '../Common/WhiteSpace';

const Subscription = () => {
  const { user } = useSelector((state) => state.user);
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
            gap: '10px',
          }}
        >
          <Typography variant="p">
            Subscribe Date :{' '}
            {moment.unix(user?.subscription?.current_period_start).format('LL')}
          </Typography>
          <Typography variant="p">
            Expiry Date :{' '}
            {moment.unix(user?.subscription?.current_period_end).format('LL')}
          </Typography>
          <Typography variant="p">
            Plan :{' '}
            <Typography variant="p" fontWeight="bold">
              {user?.subscription?.plan_name}
            </Typography>
          </Typography>
          <Typography variant="p">
            Status :{' '}
            <Chip
              label={user?.subscription?.status}
              color={
                user?.subscription?.status == 'active' ? 'success' : 'warning'
              }
              sx={{
                textTransform: 'capitalize',
              }}
            />
          </Typography>
        </Box>

        <WhiteSpace height={20} />
      </Box>
    </Box>
  );
};

export default Subscription;
