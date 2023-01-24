import { Box, Button, Card, Stack, Typography } from '@mui/material';
import { tokens, useMode } from '../../context/theme';

const CourseCard = () => {
  const [theme] = useMode();
  const colors = tokens(theme.palette.mode);
  return (
    <Card sx={{ m: 2, width: 300 }}>
      <Box
        component="img"
        src="https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
        sx={{ width: '100%' }}
      />
      <Box sx={{ p: 2 }}>
        <Typography variant="h5" fontWeight="bold">
          Course 1
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          quod, voluptate, quia,
        </Typography>
        <Stack direction="column" spacing={1} sx={{ mt: 2 }}>
          <Typography variant="h5" fontWeight="bold">
            Instructor: Development Kit
          </Typography>
          <Typography variant="h5" fontWeight="bold">
            Lecture: 21
          </Typography>
          <Typography variant="h5" fontWeight="bold">
            View:14
          </Typography>
        </Stack>
        <Stack
          sx={{
            display: 'flex',
            justifyContent: 'spae-between',
            flexDirection: 'row',
            gap: 2,
          }}
          my={2}
        >
          <Button
            sx={{
              background: colors.blueAccent[100],
              '&:hover': {
                background: colors.blueAccent[200],
              },
            }}
            variant="contained"
          >
            Watch Now
          </Button>
          <Button
            sx={{
              background: colors.blueAccent[100],
              '&:hover': {
                background: colors.blueAccent[200],
              },
            }}
            variant="contained"
          >
            Add to Playlist
          </Button>
        </Stack>
      </Box>
    </Card>
  );
};

export default CourseCard;
