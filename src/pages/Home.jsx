import { Box, Stack, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CourseCard from '../components/Cards/CourseCard';
import SearchFilter from '../components/Common/SearchFilter';
import { tokens, useMode } from '../context/theme';
import { getCoursesAction } from '../redux/actions/CourseAction';
import { getQueryUrl, useQuery } from '../utils/helper';

const Home = () => {
  const query = useQuery();
  const category = query.get('category');
  const keyword = query.get('keyword');
  const { courses } = useSelector((state) => state.course);
  const [theme] = useMode();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();

  const fetchCourses = async () => {
    const cat = category || '';
    const queryUrl = getQueryUrl({
      keyword: keyword || '',
      category: cat === 'all' ? '' : cat,
    });
    dispatch(getCoursesAction(`?${queryUrl}`));
  };

  useEffect(() => {
    if (category === null && keyword === null && courses.length === 0) {
      dispatch(getCoursesAction());
    } else {
      fetchCourses();
    }
  }, [category, keyword]);

  return (
    <Stack
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <SearchFilter colors={colors} />

      <Box sx={{ flexGrow: 1 }}>
        <Stack
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            flexDirection: 'row',
          }}
        >
          {courses &&
            courses.map((course) => (
              <CourseCard key={course?._id} course={course} />
            ))}
          {courses.length === 0 && (
            <Typography variant="h4">No courses found</Typography>
          )}
        </Stack>
      </Box>
    </Stack>
  );
};

export default Home;
