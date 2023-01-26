import { Box, Button, Card, Input, Stack } from '@mui/material';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import WhiteSpace from '../../components/Common/WhiteSpace';
import {
  getUpdateProfileAction,
  getUpdateProfilePictureAction,
} from '../../redux/actions/UserAction';

const BasicInfo = ({ colors }) => {
  const dispatch = useDispatch();
  const nameRef = useRef();
  const emailRef = useRef();
  const { user, isLoading } = useSelector((state) => state.user);
  const handleUpdateData = () => {
    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
    };
    dispatch(getUpdateProfileAction(data));
  };
  return (
    <>
      <Card sx={{ p: 2, m: 2, width: '40%' }}>
        <Stack>
          <Box component="img" src={user?.avatar?.url} sx={{ width: '100%' }} />
          <Button
            variant="contained"
            component="label"
            sx={{
              background: colors.blueAccent[100],
              '&:hover': {
                background: colors.blueAccent[200],
              },
            }}
          >
            Change
            <input
              type="file"
              hidden
              onChange={(e) => {
                const formData = new FormData();
                formData.append('file', e.target.files[0]);
                dispatch(getUpdateProfilePictureAction(formData));
              }}
            />
          </Button>
        </Stack>
      </Card>
      <Card sx={{ p: 2, m: 2, width: '50%' }}>
        <Stack
          spacing={2}
          sx={{
            p: 5,
          }}
        >
          <Input
            placeholder=" Name"
            defaultValue={user?.name}
            inputRef={nameRef}
          />
          <Input
            placeholder="Email"
            defaultValue={user?.email}
            inputRef={emailRef}
          />
          <WhiteSpace height={20} />
          <Button
            variant="contained"
            sx={{
              background: colors.blueAccent[100],
            }}
            onClick={handleUpdateData}
          >
            {isLoading ? 'Loading..' : 'Update'}
          </Button>
        </Stack>
      </Card>
    </>
  );
};

export default BasicInfo;
