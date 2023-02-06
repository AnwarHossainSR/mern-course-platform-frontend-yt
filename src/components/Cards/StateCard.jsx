import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Stack, Typography } from '@mui/material';

const StateCard = ({ data, colors }) => {
  return (
    <Stack
      sx={{
        width: '25%',
        borderRadius: '10px',
        boxShadow: `${colors.grey[600]} 0px 3px 6px`,
        padding: 2,
        display: 'flex',
        alignItems: 'flex-start',
        gap: 2,
      }}
    >
      <Stack>
        <Typography variant="h5" sx={{ color: colors.grey[500] }}>
          {data?.title}
        </Typography>
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="h2">
            {data?.value} {data.title === 'Amount' && '$'}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: colors.grey[500],
              ml: 3,
            }}
          >
            {data?.percentage}%{' '}
            {data?.growth === 'up' ? (
              <ArrowUpwardIcon
                sx={{
                  color: colors.greenAccent[500],
                }}
              />
            ) : (
              <ArrowDownwardIcon
                sx={{
                  color: colors.redAccent[500],
                }}
              />
            )}
          </Typography>
        </Stack>
        <Typography
          variant="body"
          sx={{
            color: colors.grey[500],
          }}
        >
          since last month
        </Typography>
      </Stack>
    </Stack>
  );
};

export default StateCard;
