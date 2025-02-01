import { Box } from '@mui/material';
import SingleBorrowedBook from './SingleBorrowedBook';

export const MyBorrowedBooks = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        width: '800px',
        // margin: '0 auto',
      }}
    >
      <SingleBorrowedBook />
      <SingleBorrowedBook />
      <SingleBorrowedBook />
      <SingleBorrowedBook />
      <SingleBorrowedBook />
      <SingleBorrowedBook />
      <SingleBorrowedBook />
    </Box>
  );
};
