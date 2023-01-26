import { Box, Stack, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import PlaylistCard from '../../components/Cards/PlayListCard';

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
          <PlaylistCard
            key={item._id}
            poster={item?.poster}
            course={item?.course}
          />
        ))}
      </Box>
    </Stack>
  );
};

export default Playlists;
