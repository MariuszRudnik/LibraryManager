import { Box } from '@mui/material';
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
      {data.length > 0 ? (
        data.map((BorrowedBook: RentalBook) => (
          <SingleBorrowedBook
            key={BorrowedBook.id}
            BorrowedBook={BorrowedBook}
          />
        ))
      ) : (
        <p>Nie masz jeszcze wypożyczonych książek.</p>
      )}
    </Box>
  );
};
