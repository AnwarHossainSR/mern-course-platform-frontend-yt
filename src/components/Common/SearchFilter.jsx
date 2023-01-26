import { Button, Input, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { tokens, useMode } from '../../context/theme';
import { getQueryUrl, useQuery } from '../../utils/helper';

const SearchFilter = () => {
  const [theme] = useMode();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState('all');
  const navigate = useNavigate();
  const query = useQuery();
  const category = query.get('category');
  const keyword = query.get('keyword');
  const handleKeyDown = async (event) => {
    if (event.key === 'Enter' && event.target.value !== '') {
      if (category === null) {
        return navigate(`?keyword=${event.target.value}`);
      } else {
        const queryUrl = getQueryUrl({
          keyword: event.target.value,
          category,
        });
        navigate(`?${queryUrl}`);
      }
    }
  };

  const handleFilter = async (value) => {
    if (keyword === null) {
      return navigate(`?category=${value}`);
    } else {
      console.log(keyword);
      const queryUrl = getQueryUrl({
        keyword,
        category: value,
      });
      navigate(`?${queryUrl}`);
    }
  };

  return (
    <>
      <Typography variant="h4">Coursecity Top Courses</Typography>

      <Input
        sx={{ width: '40%', margin: '1rem' }}
        placeholder="Search"
        onKeyDown={handleKeyDown}
      />

      <Stack py={4} gap={1} direction="row">
        <Button
          variant="contained"
          sx={{
            background:
              selected === 'all'
                ? colors.blueAccent[200]
                : colors.blueAccent[100],
            '&:hover': {
              background: colors.blueAccent[200],
            },
          }}
          onClick={() => {
            setSelected('all');
            handleFilter('all');
          }}
        >
          All
        </Button>
        <Button
          sx={{
            background:
              selected === 'Web Development'
                ? colors.blueAccent[200]
                : colors.blueAccent[100],
            '&:hover': {
              background: colors.blueAccent[200],
            },
          }}
          variant="contained"
          onClick={() => {
            setSelected('Web Development');
            handleFilter('Web Development');
          }}
        >
          Web Development
        </Button>
        <Button
          sx={{
            background:
              selected === 'Data Science'
                ? colors.blueAccent[200]
                : colors.blueAccent[100],
            '&:hover': {
              background: colors.blueAccent[200],
            },
          }}
          variant="contained"
          onClick={() => {
            setSelected('Data Science');
            handleFilter('Data Science');
          }}
        >
          Data Science
        </Button>
        <Button
          sx={{
            background:
              selected === 'Machine Learning'
                ? colors.blueAccent[200]
                : colors.blueAccent[100],
            '&:hover': {
              background: colors.blueAccent[200],
            },
          }}
          variant="contained"
          onClick={() => {
            setSelected('Machine Learning');
            handleFilter('Machine Learning');
          }}
        >
          Machine Learning
        </Button>
      </Stack>
    </>
  );
};

export default SearchFilter;
