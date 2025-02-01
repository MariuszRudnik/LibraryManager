import { CardMedia, Box, Typography, Container, Button } from '@mui/material';
import { Book } from '../../../types';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from '@tanstack/react-router';

interface BookLayoutProps {
  book: Book;
}

function BookLayout({ book }: BookLayoutProps) {
  const { title, author, year, images, description, availableCopies } = book;

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
              component={Link}
              to="/"
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
