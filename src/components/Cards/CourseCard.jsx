import VisibilityIcon from '@mui/icons-material/Visibility';
import {
  Box,
  Button,
  Card,
  CardActions,
  IconButton,
  Typography,
} from '@mui/material';

const CourseCard = () => {
  return (
    <Card sx={{ p: 2, m: 2, width: 300 }}>
      <Box
        component="img"
        src="https://images.unsplash.com/photo-1661956601031-4cf09efadfce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"
        sx={{ width: '100%' }}
      />
      <Typography variant="h5">Course 1</Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod,
        voluptate, quia, voluptas quas voluptatem quae quibusdam voluptatum
        quidem quos nesciunt. Quisquam, quae. Quisquam, quae. Quisquam, quae.
        Quisquam, quae.
      </Typography>
      <CardActions sx={{ justifyContent: 'space-between' }}>
        <Button variant="contained">View Course</Button>
        <IconButton
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <VisibilityIcon fontSize="25" />
          <Typography variant="p">14</Typography>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CourseCard;
