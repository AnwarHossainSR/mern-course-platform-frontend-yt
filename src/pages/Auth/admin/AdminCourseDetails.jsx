import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Box, Button, Card, CardMedia, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { assets } from '../../../assets';
import LectureAddModal from '../../../components/Modal/LectureAddModal';
import {
  getCourseLectureAction,
  removeLectureAction,
} from '../../../redux/actions/CourseAction';

const AdminCourseDetails = () => {
  const [open, setOpen] = useState(false);
  const { course } = useSelector((state) => state.course);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getCourseLectureAction(id));
  }, [id]);

  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
        mb={4}
      >
        <Typography variant="h4">
          Total Lecture {course?.lectures?.length}
        </Typography>

        <Button
          variant="contained"
          component="label"
          sx={{
            height: '40px',
          }}
          onClick={() => setOpen(true)}
        >
          Add New Lecture
        </Button>
      </Stack>
      <Box>
        {course?.lectures?.map((lecture) => (
          <Card
            sx={{
              width: '350px',
            }}
            key={lecture._id}
          >
            <CardMedia
              component="video"
              width="100%"
              height="100%"
              src={assets?.demoVideo}
              controls
              autoPlay
            />
            <Stack
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: '10px',
              }}
            >
              <Typography variant="h5" sx={{ p: 2 }}>
                {lecture?.title?.length > 20
                  ? `${lecture?.title?.slice(0, 20)}...`
                  : lecture?.title}
              </Typography>
              <DeleteForeverIcon
                sx={{
                  color: 'error.main',
                  fontSize: '35px',
                  cursor: 'pointer',
                }}
                onClick={() => dispatch(removeLectureAction(lecture._id, id))}
              />
            </Stack>
            <Typography variant="h5" sx={{ p: 2 }}>
              {lecture?.description?.length > 100
                ? `${lecture?.description?.slice(0, 100)}...`
                : lecture?.description}
            </Typography>
          </Card>
        ))}
      </Box>
      {open && <LectureAddModal open={open} setOpen={setOpen} courseId={id} />}
    </Box>
  );
};

export default AdminCourseDetails;
