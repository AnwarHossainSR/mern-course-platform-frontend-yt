import { Box, Button, Input, Stack } from '@mui/material';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { requestCourseAction } from '../redux/actions/CourseAction';

const RequestCourse = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const courseNameRef = useRef();
  const courseDescriptionRef = useRef();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      course: courseNameRef.current.value,
      description: courseDescriptionRef.current.value,
    };
    dispatch(requestCourseAction(data));
  };
  return (
    <Stack
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Stack
        sx={{
          width: 300,
          textAlign: 'center',
        }}
      >
        <h2>Request Course</h2>
        <Box
          component="form"
          sx={{
            width: 300,
            height: 'auto',
            display: 'flex',
            gap: 3,
            flexDirection: 'column',
            mt: 5,
          }}
        >
          <Input placeholder=" Name" fullWidth inputRef={nameRef} />
          <Input placeholder="Email" fullWidth inputRef={emailRef} />
          <Input placeholder="Course Name" fullWidth inputRef={courseNameRef} />
          <Input
            placeholder="Course Description"
            fullWidth
            inputRef={courseDescriptionRef}
          />

          <Button variant="contained" sx={{ mt: 2 }} onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </Stack>
    </Stack>
  );
};

export default RequestCourse;
