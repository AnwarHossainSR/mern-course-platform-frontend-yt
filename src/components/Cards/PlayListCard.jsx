import { Box, Button, Card } from '@mui/material';
import { tokens, useMode } from '../../context/theme';

const PlaylistCard = ({ poster, course }) => {
  const [theme] = useMode();
  const colors = tokens(theme.palette.mode);
  return (
    <Card sx={{ m: 2, width: 300 }}>
      <Box
        component="img"
        src={poster}
        sx={{ width: '100%', height: '200px' }}
      />
      <Box sx={{ p: 2, textAlign: 'center' }}>
        <Button
          sx={{
            background: colors.blueAccent[100],
            '&:hover': {
              background: colors.blueAccent[200],
            },
          }}
          variant="contained"
          onClick={() => console.log(course)}
        >
          Watch Now
        </Button>
      </Box>
    </Card>
  );
};

export default PlaylistCard;
