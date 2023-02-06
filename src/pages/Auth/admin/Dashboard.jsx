import { Stack } from '@mui/material';
import StateCard from '../../../components/Cards/StateCard';
import CustomBarChart from '../../../components/Chart/CustomBarChart';
import { tokens, useMode } from '../../../context/theme';
import { stateData } from '../../../utils/data';

const Dashboard = () => {
  const [theme] = useMode();
  const colors = tokens(theme.palette.mode);

  return (
    <Stack>
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 2,
        }}
      >
        {stateData.map((item, index) => (
          <StateCard key={index} data={item} colors={colors} />
        ))}
      </Stack>
      <Stack mt={5} width="100%">
        <CustomBarChart colors={colors} />
      </Stack>
    </Stack>
  );
};

export default Dashboard;
