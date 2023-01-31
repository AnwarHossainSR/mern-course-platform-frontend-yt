import { Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CourseTable from '../../../components/Tables/CourseTable';

const AdminCourses = () => {
  const navigate = useNavigate();
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
      <Stack>
        <CourseTable />
      </Stack>
    </Stack>
  );
};

export default AdminCourses;
