import { Box, Button } from '@mui/material';
import { useState } from 'react';
import BasicInfo from '../../components/settings/BasicInfo';
import Subscription from '../../components/settings/Subscription';
import { tokens, useMode } from '../../context/theme';

const Settings = () => {
  const [selected, setSelected] = useState(0);
  const [theme] = useMode();
  const colors = tokens(theme.palette.mode);
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          gap: 2,
        }}
        ml={3}
      >
        <Button
          variant="contained"
          sx={{
            background:
              selected === 0 ? colors.blueAccent[200] : colors.blueAccent[100],
            '&:hover': {
              background: colors.blueAccent[200],
            },
          }}
          onClick={() => setSelected(0)}
        >
          Basic Info
        </Button>
        <Button
          variant="contained"
          sx={{
            background:
              selected === 1 ? colors.blueAccent[200] : colors.blueAccent[100],
            '&:hover': {
              background: colors.blueAccent[200],
            },
          }}
          onClick={() => setSelected(1)}
        >
          Subscription
        </Button>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        {selected === 0 && <BasicInfo colors={colors} />}
        {selected === 1 && <Subscription colors={colors} />}
      </Box>
    </Box>
  );
};

export default Settings;
