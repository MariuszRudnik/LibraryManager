import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import DoneIcon from '@mui/icons-material/Done';
import { Button, Chip } from '@mui/material';
import { brown, red } from '@mui/material/colors';
import { LogDto, RentalBook } from '../../../types';
import { getDaysFromNow } from '../../../utills/getDaysBetweenLogs';
import { booksOptions } from '../../../queries/books';
import { useSuspenseQuery } from '@tanstack/react-query';
import { formatDate } from '../../../utills/formatData';
import { useEditRentalBookMutation } from '../../../mutations/useEditRentalBookMutation';
import { useEditBookMutation } from '../../../mutations/useEditBookMutation';
import { useCreateLogMutation } from '../../../mutations/useCreateLogMutation';
import { useUserStore } from '../../../store/useUserStore';
import Swal from 'sweetalert2';
import styles from './styles.module.scss';
import { usePageStore } from '../../../store/usePageStore';

type SingleBorrowedBookProps = {
  BorrowedBook: RentalBook;
};

export default function SingleBorrowedBook({
  BorrowedBook,
}: SingleBorrowedBookProps) {
  const { text, isWarning, expired } = getDaysFromNow(BorrowedBook.borrowDate);
  const { data } = useSuspenseQuery(booksOptions);
  const { mutate: SaveLog } = useCreateLogMutation();
  const book = data.find((book) => book.id === BorrowedBook.bookId);
  const { user } = useUserStore();
  const { SelectElement } = usePageStore();

  const { mutate: EditRentalBookMutation } = useEditRentalBookMutation();
  const { mutate: EditBookMutation } = useEditBookMutation();

  const handleEditRentalBook = () => {
    Swal.fire({
      title: 'Czy na pewno chcesz zwrócić książkę?',
      text: book?.title,
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Anuluj',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Tak, zwróć',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Dziękujemy za oddanie książki',
          text: 'zapraszamy po kolejne lektury',
          icon: 'success',
          timer: 1500,
        });
        if (book) {
          EditBookMutation({
            ...book,
            id: book.id,
            availableCopies: book.availableCopies + 1,
            borrowedCopies: book.borrowedCopies - 1,
          });

          const logData: LogDto = {
            userId: user.id,
            action: `Returned book - ID: ${book.id}`,
            timestamp: new Date().toISOString(),
          };

          SaveLog(logData);
        }
        EditRentalBookMutation({
          ...BorrowedBook,
          returnDate: new Date().toISOString(),
          status: 'returned',
        });
      }
    });
  };

  return (
    <Card
      className={SelectElement === book?.id ? styles.scaleUpDown : ''}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          minWidth: 0,
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: 120, flexShrink: 0 }}
          image={book?.images}
          alt={book?.title}
        />
        <Box sx={{ display: 'flex', minWidth: 0 }}>
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              padding: '12px',
              gap: '4px',
              minWidth: 0,
              '&:last-child': {
                paddingBottom: '12px',
              },
            }}
          >
            <Typography
              component="div"
              variant="h5"
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                maxWidth: '400px',
              }}
            >
              {book?.title}
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{
                color: 'text.secondary',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {book?.author}
            </Typography>
          </CardContent>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          gap: '2rem',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            gap: '2rem',
            flexShrink: 0,
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
          <Box sx={{ textAlign: 'end' }}>
            <Typography variant="h5" component="div">
              Data Wypożyczenia
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ color: 'text.secondary' }}
            >
              {formatDate(BorrowedBook.borrowDate)}
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
              color={expired ? 'error' : 'success'}
              label={expired ? 'Termin upłynął' : 'Wypożyczona'}
              icon={<DoneIcon />}
            />
          </Box>
          <Button
            sx={{ background: brown[500] }}
            color="secondary"
            onClick={handleEditRentalBook}
          >
            Zwróć książkę
          </Button>
        </Box>
      </Box>
    </Card>
  );
}
