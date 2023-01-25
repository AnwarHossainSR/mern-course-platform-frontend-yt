import { Box, Button, Input, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import CourseCard from '../components/Cards/CourseCard';
import { tokens, useMode } from '../context/theme';

const Home = () => {
  const [selected, setSelected] = useState(0);
  const [theme] = useMode();
  const colors = tokens(theme.palette.mode);
  return (
    <Stack
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Typography variant="h4">Coursecity Top Courses</Typography>

      <Input sx={{ width: '40%', margin: '1rem' }} placeholder="Search" />

      <Stack py={4} gap={1} direction="row">
        <Button
          variant="contained"
          sx={{
            background:
              selected === 0 ? colors.blueAccent[200] : colors.blueAccent[100],
            '&:hover': {
              background: colors.blueAccent[200],
            },
          }}
          onClick={() => setSelected(0)}
        >
          All
        </Button>
        <Button
          sx={{
            background:
              selected === 1 ? colors.blueAccent[200] : colors.blueAccent[100],
            '&:hover': {
              background: colors.blueAccent[200],
            },
          }}
          variant="contained"
          onClick={() => setSelected(1)}
        >
          Web Development
        </Button>
        <Button
          sx={{
            background:
              selected === 2 ? colors.blueAccent[200] : colors.blueAccent[100],
            '&:hover': {
              background: colors.blueAccent[200],
            },
          }}
          variant="contained"
          onClick={() => setSelected(2)}
        >
          Data Science
        </Button>
        <Button
          sx={{
            background:
              selected === 3 ? colors.blueAccent[200] : colors.blueAccent[100],
            '&:hover': {
              background: colors.blueAccent[200],
            },
          }}
          variant="contained"
          onClick={() => setSelected(3)}
        >
          Machine Learning
        </Button>
      </Stack>

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
