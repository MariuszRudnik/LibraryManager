import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import DoneIcon from '@mui/icons-material/Done';
import { Button, Chip } from '@mui/material';
import { brown, red } from '@mui/material/colors';
import { RentalBook } from '../../../types';
import { getDaysFromNow } from '../../../utills/getDaysBetweenLogs';
import { booksOptions } from '../../../queries/books';
import { useSuspenseQuery } from '@tanstack/react-query';

type SingleBorrowedBookProps = {
  BorrowedBook: RentalBook;
};

export default function SingleBorrowedBook({
  BorrowedBook,
}: SingleBorrowedBookProps) {
  const { text, isWarning } = getDaysFromNow(BorrowedBook.borrowDate);
  const { data } = useSuspenseQuery(booksOptions);
  const book = data.find((book) => book.id === BorrowedBook.bookId);

  return (
    <Card sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <CardMedia
        component="img"
        sx={{ width: 120 }}
        image={book?.images}
        alt={book?.title}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {book?.title}
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: 'text.secondary' }}
          >
            {book?.author}
          </Typography>
        </CardContent>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
        }}
      >
        <Box
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'end' }}
        >
          <Typography variant="h5" component="div">
            Termin zwrotu
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: isWarning ? red[800] : 'text.secondary' }}
          >
            {text}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h5" component="div">
            Data Wypożyczenia
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: 'text.secondary' }}
          >
            {BorrowedBook.borrowDate}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: '1rem',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'flex-end',
          }}
        >
          <Typography variant="h5" component="div">
            Status
          </Typography>

          <Chip
            variant="outlined"
            color="success"
            label="Wypożyczona"
            icon={<DoneIcon />}
          />
        </Box>
        <Button sx={{ background: brown[500] }} color="secondary">
          Zwróć książkę
        </Button>
      </Box>
    </Card>
  );
}
