import { Box } from '@mui/material';

const CourseDetails = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
      }}
    >
      <Box
        sx={{
          width: '60%',
          background: 'red',
        }}
      >
        Course Details
      </Box>
      <Box
        sx={{
          width: '40%',
          background: 'red',
        }}
      >
        Course Details
      </Box>
    </Box>
  );
};

export default CourseDetails;
