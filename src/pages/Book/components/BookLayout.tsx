import { CardMedia, Box, Typography, Container, Button } from '@mui/material';
import { Book, LogDto } from '../../../types';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Swal from 'sweetalert2';
import { useCreateRentalBookMutation } from '../../../mutations/useCreateRentalBookMutation';
import { useEditBookMutation } from '../../../mutations/useEditBookMutation';
import { useUserStore } from '../../../store/useUserStore';
import { useCreateLogMutation } from '../../../mutations/useCreateLogMutation';

interface BookLayoutProps {
  book: Book;
}

function BookLayout({ book }: BookLayoutProps) {
  const { title, author, year, images, description, availableCopies } = book;
  const { mutate: RentalBookMutation } = useCreateRentalBookMutation();
  const { mutate: EditBookMutation } = useEditBookMutation();
  const { mutate: SaveLog } = useCreateLogMutation();
  const { user } = useUserStore();

  const handleRentalBook = () => {
    RentalBookMutation({
      userId: user.id,
      bookId: book.id,
      status: 'borrowed',
      borrowDate: new Date().toISOString(),
      returnDate: null,
    });

    EditBookMutation({
      ...book,
      availableCopies: book.availableCopies - 1,
      borrowedCopies: book.borrowedCopies + 1,
    });

    const logData: LogDto = {
      userId: user.id,
      action: `Borrowed book - ID: ${book.id}`,
      timestamp: new Date().toISOString(),
    };

    SaveLog(logData);

    Swal.fire({
      title: book.title,
      text: 'Książka została wypożyczona',
      imageUrl: book.images,
      imageWidth: 300,
      imageHeight: 400,
      imageAlt: 'Custom image',
    });
  };

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#adaaaa',
        padding: '2rem',
      }}
    >
      <Box
        sx={{
          maxWidth: '1000px',
          width: '100%',
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          overflow: 'hidden',
        }}
      >
        {/* Sekcja opisu */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
          }}
        >
          <Box
            sx={{
              flex: 1,
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography
              variant="h4"
              component="h1"
              sx={{ marginBottom: '1rem', fontWeight: 'bold' }}
            >
              {title}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ marginBottom: '1rem', color: 'gray' }}
            >
              {author} &bull; {year}
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: '#333', lineHeight: 1.6, marginBottom: '1rem' }}
            >
              {description}
            </Typography>
            <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.6 }}>
              Dostępnych egzemplarzy: {availableCopies}
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              margin: '1rem',
              gap: '1rem',
            }}
          >
            <Box
              sx={{
                padding: '1rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
              }}
              onClick={() => window.history.back()}
            >
              <ArrowBackIcon sx={{ marginRight: '0.5rem' }} />
              <Typography variant="body1" sx={{ color: '#333', lineHeight: 1 }}>
                Powrót
              </Typography>
            </Box>
            <Button
              size="medium"
              variant="contained"
              color="primary"
              onClick={handleRentalBook}
              disabled={availableCopies <= 0}
            >
              Wypożycz
            </Button>
          </Box>
        </Box>
        {/* Sekcja obrazu */}
        {images && (
          <CardMedia
            component="img"
            image={images}
            alt={`Okładka książki ${title}`}
            sx={{
              flex: 1,
              width: { xs: '100%', md: '50%' },
              objectFit: 'cover',
              height: { xs: 'auto', md: '100%' },
            }}
          />
        )}
      </Box>
    </Container>
  );
}

export default BookLayout;
