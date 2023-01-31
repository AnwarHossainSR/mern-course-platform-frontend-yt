import {
  Box,
  Button,
  FormControl,
  Input,
  MenuItem,
  Select,
  Stack,
} from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { createCourseAction } from '../../../redux/actions/CourseAction';

const CreateCourse = () => {
  const { isLoading } = useSelector((state) => state.course);
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [course, setCourse] = useState({
    title: '',
    createdBy: '',
    category: '',
    description: '',
    file: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !course.title ||
      !course.createdBy ||
      !course.category ||
      !course.description ||
      !course.file
    )
      return toast.error('Please add all fields');
    const formData = new FormData();
    formData.append('title', course.title);
    formData.append('createdBy', course.createdBy);
    formData.append('category', course.category);
    formData.append('description', course.description);
    formData.append('file', course.file);
    dispatch(createCourseAction(formData));
    // setCourse({
    //   title: '',
    //   createdBy: '',
    //   category: '',
    //   description: '',
    //   file: '',
    // });
    // setImage(null);
  };
  return (
    <Box>
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <h1>Create Course</h1>
        <Button
          variant="contained"
          component="label"
          sx={{
            height: '40px',
          }}
        >
          Upload Poster
          <input
            type="file"
            hidden
            onChange={(e) => {
              setCourse({ ...course, file: e.target.files[0] });
              const reader = new FileReader();
              reader.readAsDataURL(e.target.files[0]);
              reader.onload = () => {
                setImage(reader.result);
              };
            }}
          />
        </Button>
      </Stack>
      <Box
        sx={{
          ml: 1,
        }}
        component="form"
        onSubmit={handleSubmit}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <Stack
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: 2,
            }}
          >
            <Input
              placeholder="Course Name"
              value={course?.title ?? ''}
              fullWidth
              onChange={(e) => setCourse({ ...course, title: e.target.value })}
            />
            <Input
              placeholder="Course Author"
              fullWidth
              value={course?.createdBy ?? ''}
              onChange={(e) =>
                setCourse({ ...course, createdBy: e.target.value })
              }
            />

            <FormControl variant="standard" sx={{ minWidth: 220 }}>
              <Select
                value={course?.category ?? ''}
                onChange={(e) =>
                  setCourse({ ...course, category: e.target.value })
                }
              >
                <MenuItem value="Web Development">Web Development</MenuItem>
                <MenuItem value="Data Science">Data Science</MenuItem>
                <MenuItem value="Machine Learning">Machine Learning</MenuItem>
              </Select>
            </FormControl>
          </Stack>
          <Stack
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: 2,
            }}
            mt={3}
          >
            <Input
              label="Course Details"
              placeholder="Course Details"
              fullWidth
              multiline
              rows={2}
              onChange={(e) =>
                setCourse({ ...course, description: e.target.value })
              }
            />
          </Stack>
          <Stack
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: 2,
              justifyContent: 'space-between',
              alignItems: 'center',
              mt: 3,
            }}
          >
            <Button
              variant="contained"
              sx={{
                height: '40px',
              }}
              type="submit"
            >
              {isLoading ? 'Loading...' : 'Create Course'}
            </Button>
            {image && (
              <img src={image} alt="avatar" width="350px" height="250px" />
            )}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateCourse;
