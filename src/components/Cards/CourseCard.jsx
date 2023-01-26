import {
  Box,
  Button,
  Card,
  CircularProgress,
  Stack,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tokens, useMode } from '../../context/theme';
import { addToPlaylistAction } from '../../redux/actions/CourseAction';

const CourseCard = ({ course }) => {
  const [selectedId, setSelectedId] = useState('');
  const { isLoading } = useSelector((state) => state.course);
  const dispatch = useDispatch();
  const [theme] = useMode();
  const colors = tokens(theme.palette.mode);
  const handleAddToPlaylist = (courseId) => {
    setSelectedId(courseId);
    dispatch(addToPlaylistAction({ id: courseId }));
  };

  return (
    <Card sx={{ m: 2, width: 300 }}>
      <Box
        component="img"
        src="https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
        sx={{ width: '100%' }}
      />
      <Box sx={{ p: 2 }}>
        <Typography variant="h5" fontWeight="bold">
          {course?.title}
        </Typography>
        <Typography variant="body1">
          {course?.description.substring(0, 100)}
        </Typography>
        <Stack direction="column" spacing={1} sx={{ mt: 2 }}>
          <Typography variant="h5" fontWeight="bold">
            Instructor: {course?.createdBy}
          </Typography>
          <Typography variant="h5" fontWeight="bold">
            Lecture: {course?.numOfVideos}
          </Typography>
          <Typography variant="h5" fontWeight="bold">
            View:{course?.views}
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
          {isLoading && course._id === selectedId ? (
            <CircularProgress size={20} />
          ) : (
            <Button
              sx={{
                background: colors.blueAccent[100],
                '&:hover': {
                  background: colors.blueAccent[200],
                },
              }}
              variant="contained"
              onClick={() => handleAddToPlaylist(course?._id)}
            >
              Add to Playlist
            </Button>
          )}
        </Stack>
      </Box>
    </Card>
  );
};

export default CourseCard;
