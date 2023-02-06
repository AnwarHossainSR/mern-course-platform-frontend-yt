import { Stack } from '@mui/material';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';
import { barChartData } from '../../utils/data';

const CustomBarChart = ({ colors }) => {
  return (
    <Stack
      sx={{
        width: '100%',
      }}
    >
      <BarChart width={950} height={330} data={barChartData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip cursor={{ fill: 'transparent' }} />
        <Bar dataKey="amount" fill={colors.greenAccent[400]} />
      </BarChart>
    </Stack>
  );
};

export default CustomBarChart;
