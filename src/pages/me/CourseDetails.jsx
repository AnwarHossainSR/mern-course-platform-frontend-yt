import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { Box, Card, CardMedia, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { assets } from '../../assets';
import { tokens, useMode } from '../../context/theme';
import { getCourseLectureAction } from '../../redux/actions/CourseAction';

const CourseDetails = () => {
  const navigate = useNavigate();
  const [theme] = useMode();
  const colors = tokens(theme.palette.mode);
  const { course } = useSelector((state) => state.course);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [lectureItem, setLectureItem] = useState(course?.lectures?.[0] ?? {});

  useEffect(() => {
    if (user.role === 'user' && user?.subscription?.status !== 'active') {
      toast.error('You need to subscribe to watch this course');
      navigate('/me');
    } else {
      dispatch(getCourseLectureAction(id));
    }
    if (course?.lectures?.length > 0) setLectureItem(course?.lectures?.[0]);
  }, [id, course.dispatch]);

  return (
    <Stack>
      {user?.role !== 'admin' &&
        user?.subscription &&
        user.subscription?.status !== 'active' && (
          <Typography variant="h5" fontWeight="bold" color="error">
            You need to subscribe to watch this course
          </Typography>
        )}
      {user?.subscription?.status === 'active' && (
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
                src={lectureItem?.video?.url ?? assets.video}
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
                <Typography variant="h5">{lectureItem?.title}</Typography>
                <Typography pt={2} variant="body1">
                  {lectureItem?.description}
                </Typography>
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
                background: '#82b1ff',
              }}
            >
              {course?.lectures?.map((lecture, index) => (
                <Typography
                  key={index}
                  variant="h5"
                  sx={{
                    cursor: 'pointer',
                    '&:hover': {
                      color: colors.blueAccent[1000],
                    },
                    fontSize: lectureItem._id === lecture._id && '1.2rem',
                    color:
                      lectureItem._id === lecture._id &&
                      colors.blueAccent[1000],
                    p: lectureItem._id === lecture._id && 1,
                    background: lectureItem._id === lecture._id && '#5b7bb2',
                    borderRadius: lectureItem._id === lecture._id && '5px',
                  }}
                  onClick={() => setLectureItem(lecture)}
                >
                  {lectureItem._id === lecture._id ? (
                    <PlayCircleIcon background="#fff" />
                  ) : (
                    index + 1
                  )}{' '}
                  {lecture?.title}
                </Typography>
              ))}
            </Card>
          </Box>
        </Box>
      )}
    </Stack>
  );
};

export default CourseDetails;
