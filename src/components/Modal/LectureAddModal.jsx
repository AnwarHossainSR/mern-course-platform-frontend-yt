import { Button, Input, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addLectureAction } from '../../redux/actions/CourseAction';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
};

export default function LectureAddModal({ open, setOpen, courseId }) {
  const { isLoading } = useSelector((state) => state.course);
  const dispatch = useDispatch();
  const handleClose = () => setOpen(false);
  const titleRef = useRef();
  const descriptionRef = useRef();
  const [video, setVideo] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', titleRef.current.value);
    formData.append('description', descriptionRef.current.value);
    formData.append('video', video);
    dispatch(addLectureAction(courseId, formData));
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Input name="title" inputRef={titleRef} placeholder="Title" fullWidth />
        <Input
          name="description"
          inputRef={descriptionRef}
          placeholder="Description"
          fullWidth
        />
        <Stack
          mt={3}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '10px',
            justifyContent: 'space-between',
          }}
        >
          <Button
            variant="contained"
            component="label"
            sx={{
              height: '40px',
            }}
          >
            Upload Lecture
            <input
              type="file"
              accept="video/*"
              hidden
              onChange={(e) => setVideo(e.target.files[0])}
              placeholder="Upload Lecture"
            />
          </Button>
          <Button variant="contained" onClick={handleSubmit}>
            {isLoading ? 'Loading...' : 'Add Lecture'}
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
}
