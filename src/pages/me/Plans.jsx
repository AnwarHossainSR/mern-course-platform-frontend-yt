import { Box } from '@mui/material';
import PlanCard from '../../components/Cards/PlanCard';
import { plansData } from '../../utils/data';

const Plans = () => {
  return (
    <Box
      sx={{
        p: 3,
        display: 'flex',
        gap: 3,
        flexWrap: 'wrap',
      }}
    >
      {plansData &&
        plansData.map((plan, index) => <PlanCard key={index} plan={plan} />)}
    </Box>
  );
};

export default Plans;
