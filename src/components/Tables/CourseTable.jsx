import { Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useNavigate } from 'react-router-dom';

const CourseTable = () => {
  const navigate = useNavigate();
  const handleDelete = (id) => {
    console.log(id);
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Course Name</TableCell>
            <TableCell align="right">Author</TableCell>
            <TableCell align="right">Lectures</TableCell>
            <TableCell align="right">Views</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[1, 2, 3, 4, 5, 6].map((row) => (
            <TableRow
              key={row}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Test 1
              </TableCell>
              <TableCell align="right">Test 1</TableCell>
              <TableCell align="right">Test 1</TableCell>
              <TableCell align="right">Test 1</TableCell>
              <TableCell align="right">
                <Button
                  variant="contained"
                  onClick={() => navigate(`./${row._id}`)}
                >
                  View
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: 'red',
                    ml: 1,
                  }}
                  onClick={() => handleDelete(row._id)}
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
