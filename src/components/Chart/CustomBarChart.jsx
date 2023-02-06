import { Stack } from '@mui/material';
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import { barChartData } from '../../utils/data';

const CustomBarChart = ({ colors }) => {
  return (
    <Stack
      sx={{
        width: '100%',
      }}
    >
      <BarChart width={1000} height={350} data={barChartData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="uv" fill={colors.greenAccent[400]} />
      </BarChart>
    </Stack>
  );
};

export default CustomBarChart;
