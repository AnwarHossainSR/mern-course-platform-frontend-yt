import { Box, Card, CardMedia, Typography } from '@mui/material';
import { useState } from 'react';
import { assets } from '../../assets';
import { tokens, useMode } from '../../context/theme';

const CourseDetails = () => {
  const [lectureItem, setLectureItem] = useState(0);
  const [theme] = useMode();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: '60%',
        }}
      >
        <Box>
          <CardMedia
            component="video"
            width="100%"
            height="100%"
            src={assets?.demoVideo}
            controls
            autoPlay
          />
        </Box>
        <Box mt={1}>
          <Card
            width="100%"
            sx={{
              p: 2,
              height: 'auto',
            }}
          >
            <Typography variant="h5">Course Title</Typography>
          </Card>
        </Box>
      </Box>
      <Box
        sx={{
          width: '40%',
        }}
      >
        <Card
          sx={{
            display: 'flex',
            minWidth: '40%',
            height: '100%',
            gap: 2,
            flexDirection: 'column',
            p: 2,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              cursor: 'pointer',
              '&:hover': {
                color: colors.blueAccent[1000],
              },
              fontSize: lectureItem === 0 && '1.2rem',
              color: lectureItem === 0 && colors.blueAccent[1000],
            }}
            onClick={() => setLectureItem(0)}
          >
            Lecture Video 1
          </Typography>
          <Typography
            variant="h5"
            sx={{
              cursor: 'pointer',
              '&:hover': {
                color: colors.blueAccent[1000],
              },
              fontSize: lectureItem === 1 && '1.2rem',
              color: lectureItem === 1 && colors.blueAccent[1000],
            }}
            onClick={() => setLectureItem(1)}
          >
            Lecture Video 2
          </Typography>
          <Typography
            variant="h5"
            sx={{
              cursor: 'pointer',
              '&:hover': {
                color: colors.blueAccent[1000],
              },
              fontSize: lectureItem === 2 && '1.2rem',
              color: lectureItem === 2 && colors.blueAccent[1000],
            }}
            onClick={() => setLectureItem(2)}
          >
            Lecture Video 3
          </Typography>
          <Typography
            variant="h5"
            sx={{
              cursor: 'pointer',
              '&:hover': {
                color: colors.blueAccent[1000],
              },
              fontSize: lectureItem === 3 && '1.2rem',
              color: lectureItem === 3 && colors.blueAccent[1000],
            }}
            onClick={() => setLectureItem(3)}
          >
            Lecture Video 4
          </Typography>
          <Typography
            variant="h5"
            sx={{
              cursor: 'pointer',
              '&:hover': {
                color: colors.blueAccent[1000],
              },
              fontSize: lectureItem === 111 && '1.2rem',
              color: lectureItem === 111 && colors.blueAccent[1000],
            }}
          >
            Lecture Video 5
          </Typography>
          <Typography
            variant="h5"
            sx={{
              cursor: 'pointer',
              '&:hover': {
                color: colors.blueAccent[1000],
              },
              fontSize: lectureItem === 111 && '1.2rem',
              color: lectureItem === 111 && colors.blueAccent[1000],
            }}
          >
            Lecture Video 6
          </Typography>
          <Typography
            variant="h5"
            sx={{
              cursor: 'pointer',
              '&:hover': {
                color: colors.blueAccent[1000],
              },
              fontSize: lectureItem === 111 && '1.2rem',
              color: lectureItem === 111 && colors.blueAccent[1000],
            }}
          >
            Lecture Video 7
          </Typography>
          <Typography
            variant="h5"
            sx={{
              cursor: 'pointer',
              '&:hover': {
                color: colors.blueAccent[1000],
              },
              fontSize: lectureItem === 111 && '1.2rem',
              color: lectureItem === 111 && colors.blueAccent[1000],
            }}
          >
            Lecture Video 8
          </Typography>
          <Typography
            variant="h5"
            sx={{
              cursor: 'pointer',
              '&:hover': {
                color: colors.blueAccent[1000],
              },
              fontSize: lectureItem === 111 && '1.2rem',
              color: lectureItem === 111 && colors.blueAccent[1000],
            }}
          >
            Lecture Video 9
          </Typography>
          <Typography
            variant="h5"
            sx={{
              cursor: 'pointer',
              '&:hover': {
                color: colors.blueAccent[1000],
              },
              fontSize: lectureItem === 111 && '1.2rem',
              color: lectureItem === 111 && colors.blueAccent[1000],
            }}
          >
            Lecture Video 10
          </Typography>
          <Typography
            variant="h5"
            sx={{
              cursor: 'pointer',
              '&:hover': {
                color: colors.blueAccent[1000],
              },
              fontSize: lectureItem === 111 && '1.2rem',
              color: lectureItem === 111 && colors.blueAccent[1000],
            }}
          >
            Lecture Video 11
          </Typography>
          <Typography
            variant="h5"
            sx={{
              cursor: 'pointer',
              '&:hover': {
                color: colors.blueAccent[1000],
              },
              fontSize: lectureItem === 111 && '1.2rem',
              color: lectureItem === 111 && colors.blueAccent[1000],
            }}
          >
            Lecture Video 12
          </Typography>
        </Card>
      </Box>
    </Box>
  );
};

export default CourseDetails;
