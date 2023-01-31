import { Avatar, Button, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteCourseAction } from '../../redux/actions/CourseAction';

const CourseTable = () => {
  const dispatch = useDispatch();
  const { courses, isLoading } = useSelector((state) => state.course);

  const navigate = useNavigate();

  const handleDelete = (id) => {
    dispatch(deleteCourseAction(id));
  };
  if (isLoading) return <Typography variant="h4">Loading...</Typography>;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Course Name</TableCell>
            <TableCell>Poster</TableCell>
            <TableCell align="right">Author</TableCell>
            <TableCell align="right">Lectures</TableCell>
            <TableCell align="right">Views</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {courses?.length > 0 &&
            courses.map((course) => (
              <TableRow
                key={course?._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {course?.title}
                </TableCell>
                <TableCell component="th" scope="row">
                  <Avatar src={course?.poster?.url} />
                </TableCell>
                <TableCell align="right">{course?.createdBy}</TableCell>
                <TableCell align="right">{course?.numOfVideos}</TableCell>
                <TableCell align="right">{course?.views}</TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    onClick={() => navigate(`./${course._id}`)}
                  >
                    View
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: 'red',
                      ml: 1,
                    }}
                    onClick={() => handleDelete(course._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CourseTable;
