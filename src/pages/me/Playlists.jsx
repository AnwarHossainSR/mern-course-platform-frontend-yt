import { Box, Stack, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import CourseCard from '../../components/Cards/CourseCard';

const Playlists = () => {
  const { user } = useSelector((state) => state.user);
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
        {user?.playlist?.map((item) => (
          <CourseCard key={item._id} course={item} type="playlist" />
        ))}

        {user?.playlist?.length === 0 && (
          <p style={{ marginLeft: '2rem' }}>
            You have not added any playlist yet
          </p>
        )}
      </Box>
    </Stack>
  );
};

export default Playlists;
