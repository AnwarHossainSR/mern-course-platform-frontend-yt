import { Button, Stack } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CourseTable from '../../../components/Tables/CourseTable';
import { getCoursesAction } from '../../../redux/actions/CourseAction';

const AdminCourses = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoursesAction());
  }, [dispatch]);

  return (
    <Stack
      sx={{
        width: '100%',
      }}
    >
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <h2>Courses</h2>
        <Button
          variant="contained"
          sx={{
            height: '40px',
          }}
          onClick={() => navigate('./add')}
        >
          Add Course
        </Button>
      </Stack>
      <Stack pb={3}>
        <CourseTable />
      </Stack>
    </Stack>
  );
};

export default AdminCourses;
