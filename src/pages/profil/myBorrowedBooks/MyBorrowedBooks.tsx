import { Box, Paper, Typography } from '@mui/material';
import SingleBorrowedBook from './SingleBorrowedBook';
import { useSuspenseQuery } from '@tanstack/react-query';
import { rentalBooksOptions } from '../../../queries/rentalBooks';
import { RentalBook } from '../../../types';
import { useUserStore } from '../../../store/useUserStore';

export const MyBorrowedBooks = () => {
  const {
    user: { id },
  } = useUserStore();
  const { data } = useSuspenseQuery(rentalBooksOptions(id));
  const sortedData = [...data].sort(
    (a, b) =>
      new Date(b.borrowDate).getTime() - new Date(a.borrowDate).getTime()
  );

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        width: '1000px',
        margin: '0 auto',
      }}
    >
      {sortedData.length > 0 ? (
        sortedData.map((BorrowedBook: RentalBook) => (
          <SingleBorrowedBook
            key={BorrowedBook.id}
            BorrowedBook={BorrowedBook}
          />
        ))
      ) : (
        <Paper elevation={24} sx={{ padding: '1rem' }}>
          <Typography variant="h4">Brak wypożyczonych książek</Typography>
          <Typography variant="h6">
            Nie masz aktualnie wypożyczonych książek
          </Typography>
        </Paper>
      )}
    </Box>
  );
};
