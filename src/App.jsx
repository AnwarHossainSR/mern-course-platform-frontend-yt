import { Stack } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Stack>
      <Routes>
        <Route path="/" element={<h1>Hello</h1>} />
      </Routes>
    </Stack>
  );
};

export default App;
