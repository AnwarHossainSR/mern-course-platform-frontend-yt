import { Box, Chip, Typography } from '@mui/material';
import moment from 'moment';
import { useSelector } from 'react-redux';
import WhiteSpace from '../Common/WhiteSpace';

const Subscription = () => {
  const { user } = useSelector((state) => state.user);
  console.log(user?.subscription);
  return (
    <Box p={3}>
      <Typography variant="h5">Subscription Info</Typography>
      {user?.subscription?.status !== 'active' && user?.role !== 'admin' && (
        <Box>
          <Typography variant="body1">
            You are not subscribed to any plan.
          </Typography>
          <WhiteSpace height={20} />
          <Typography variant="body1">
            Please subscribe to a plan to access all the features.
          </Typography>
        </Box>
      )}
      {user?.role === 'admin' && (
        <Box>
          <Typography variant="body1">
            You are an admin and you have access to all the features.
          </Typography>
        </Box>
      )}
      {user?.subscription?.status === 'active' && (
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
              {moment
                .unix(user?.subscription?.current_period_start)
                .format('LL')}
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
      )}
    </Box>
  );
};

export default Subscription;
