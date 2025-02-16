import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import DoneIcon from '@mui/icons-material/Done';
import { Button, Chip } from '@mui/material';
import { brown, green, red } from '@mui/material/colors';
import { LogDto, MessageDto, RentalBook } from '../../types';
import { useSuspenseQuery } from '@tanstack/react-query';
import { formatDate } from '../../utills/formatData';
import { useCreateLogMutation } from '../../mutations/useCreateLogMutation';
import { useUserStore } from '../../store/useUserStore';
import Swal from 'sweetalert2';
import { bookOptions } from '../../queries/book';
import { userOptions } from '../../queries/user';
import { getDaysFromNow } from '../../utills/getDaysBetweenLogs';
import { useCreateMessageMutation } from '../../mutations/useCreateMessageMutation';

type AdminSingleBorrowedBookProps = {
  rentalBook: RentalBook;
};

export const AdminSingleBorrowedBook = ({
  rentalBook,
}: AdminSingleBorrowedBookProps) => {
  const { data: book } = useSuspenseQuery(bookOptions(rentalBook.bookId));
  const { data: user } = useSuspenseQuery(userOptions(rentalBook.userId));
  const { mutate: SaveLog } = useCreateLogMutation();
  const { mutate: SendMessage } = useCreateMessageMutation();
  const { user: ThisUser } = useUserStore();

  const { text, isWarning, expired } = getDaysFromNow(rentalBook.borrowDate);

  const handleSubmitMessage = () => {
    Swal.fire({
      title: 'Wyślij przypomnienie',
      text: `Czy chcesz wysłać przypomnienie o zwrocie książki do użytkownika ${user.firstName} ${user.lastName}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Tak, wyślij',
      cancelButtonText: 'Anuluj',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Wysłano!',
          text: 'Przypomnienie zostało wysłane do użytkownika.',
          icon: 'success',
          timer: 2000,
        });

        const logData: LogDto = {
          userId: ThisUser.id,
          action: 'ADMIN_SENT_RETURN_REMINDER',
          timestamp: new Date().toISOString(),
        };

        const message: MessageDto = {
          userId: user.id,
          preMessage: `Proszę zwrócić książkę `,
          title: book.title,
          bookId: book.id,
        };

        SaveLog(logData);
        SendMessage(message);
      }
    });
  };

  return (
    <Card
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '1rem',
        backgroundColor: expired ? red[100] : green[100],
        maxWidth: '1400px',
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
              justifyContent: 'space-between',
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
                maxWidth: '500px',
              }}
            >
              {book?.title}
            </Typography>
            <Box>
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
                Wypożyczone przez
              </Typography>
              <Typography
                component="div"
                variant="h6"
                sx={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  maxWidth: '400px',
                }}
              >
                {`${user.firstName} ${user.lastName}`}
              </Typography>
              <Typography
                component="div"
                variant="subtitle1"
                sx={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  maxWidth: '400px',
                }}
              >
                {`Numer karty ${user.libraryCardCode}`}
              </Typography>
            </Box>
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
              {formatDate(rentalBook.borrowDate)}
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
            onClick={handleSubmitMessage}
          >
            Poproś o zwrot
          </Button>
        </Box>
      </Box>
    </Card>
  );
};
