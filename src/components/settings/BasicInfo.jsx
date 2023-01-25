import { Box, Button, Card, Input, Stack } from '@mui/material';
import WhiteSpace from '../../components/Common/WhiteSpace';

const BasicInfo = ({ colors }) => {
  return (
    <>
      <Card sx={{ p: 2, m: 2, width: '40%' }}>
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
          sx={{ width: '100%' }}
        />
      </Card>
      <Card sx={{ p: 2, m: 2, width: '50%' }}>
        <Stack
          spacing={2}
          sx={{
            p: 5,
          }}
        >
          <Input placeholder=" Name" />
          <Input placeholder="Email" />
          <WhiteSpace height={20} />
          <Button
            variant="contained"
            sx={{
              background: colors.blueAccent[100],
            }}
          >
            Update
          </Button>
        </Stack>
      </Card>
    </>
  );
};

export default BasicInfo;
