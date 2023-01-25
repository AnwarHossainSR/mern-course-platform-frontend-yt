import { Box, Stack, Typography } from '@mui/material';
import CourseCard from '../../components/Cards/CourseCard';

const Playlists = () => {
  return (
    <Stack>
      <Typography variant="h2" pl={3}>
        Your Playlists
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </Box>
    </Stack>
  );
};

export default Playlists;
