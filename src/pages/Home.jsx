import { Box, Stack, Typography } from '@mui/material';
import CourseCard from '../components/Cards/CourseCard';

const Home = () => {
  return (
    <Stack
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Typography variant="h4">Coursecity Top Courses</Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Stack
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            flexDirection: 'row',
          }}
        >
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </Stack>
      </Box>
    </Stack>
  );
};

export default Home;
