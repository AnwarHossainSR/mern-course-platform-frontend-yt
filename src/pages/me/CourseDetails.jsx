import { Box, Card, CardMedia, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { assets } from '../../assets';
import { tokens, useMode } from '../../context/theme';
import { getCourseLectureAction } from '../../redux/actions/CourseAction';

const CourseDetails = () => {
  const [theme] = useMode();
  const colors = tokens(theme.palette.mode);
  const { course } = useSelector((state) => state.course);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [lectureItem, setLectureItem] = useState(course?.lectures?.[0] ?? {});
  useEffect(() => {
    dispatch(getCourseLectureAction(id));
  }, [id]);
  useEffect(() => {
    if (course?.lectures?.length > 0) setLectureItem(course?.lectures?.[0]);
  }, [course]);
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
                  lectureItem._id === lecture._id && colors.blueAccent[1000],
              }}
              onClick={() => setLectureItem(lecture)}
            >
              {index} {lecture?.title}
            </Typography>
          ))}
        </Card>
      </Box>
    </Box>
  );
};

export default CourseDetails;
