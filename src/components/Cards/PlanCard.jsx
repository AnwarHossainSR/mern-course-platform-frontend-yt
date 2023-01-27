import { Box, Button, Stack, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { getSubscribeAction } from '../../redux/actions/PaymentAction';
import WhiteSpace from '../Common/WhiteSpace';

const PlanCard = ({ plan }) => {
  const dispatch = useDispatch();
  const handleSubscribe = (plan) => {
    dispatch(getSubscribeAction({ plan }));
  };
  return (
    <Stack
      sx={{
        p: 3,
        width: 280,
        height: 280,
        borderRadius: 1,
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
      }}
    >
      <Typography variant="h4">
        {plan?.title} / {`${plan?.duration}  ${plan?.durationText}`}
      </Typography>
      <Typography variant="body1">{plan?.description}</Typography>
      <WhiteSpace height={100} />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 1,
          mt: 2,
        }}
      >
        <Typography variant="h6">$</Typography>
        <Typography variant="h4">{plan?.price}</Typography>
        <Typography variant="h6">/{plan?.durationText}</Typography>
      </Box>
      <WhiteSpace height={230} />
      <Button variant="contained" onClick={() => handleSubscribe(plan?.id)}>
        Subscribe
      </Button>
    </Stack>
  );
};

export default PlanCard;
