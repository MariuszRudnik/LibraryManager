import { Link } from '@tanstack/react-router';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Box,
  Tooltip,
} from '@mui/material';
import { Book } from '../../types';
import { useUserStore } from '../../store/useUserStore';
import { useCreateRentalBookMutation } from '../../mutations/useCreateRentalBookMutation';
import Swal from 'sweetalert2';
import { useEditBookMutation } from '../../mutations/useEditBookMutation';

type BookListProps = {
  books: Book[];
};

const BookList = ({ books }: BookListProps) => {
  const { mutate: RentalBookMutation } = useCreateRentalBookMutation();
  const { mutate: EditBookMutation } = useEditBookMutation();
  const { isLoggedIn, user } = useUserStore();

  const handleRentalBook = (book: Book) => {
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
    <Box
      data-testid="booklist"
      id="book-list"
      sx={{ display: 'flex', justifyContent: 'center', padding: 4 }}
    >
      <Grid
        data-testid="booklist2"
        container
        spacing={3}
        justifyContent="center"
        sx={{ maxWidth: 1200 }}
      >
        {books.map((book) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={book.id}
            data-testid={`map-item-${book.id}`}
          >
            <Card
              sx={{
                height: 650,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#121212',
                color: 'white',
                padding: 2,
                textAlign: 'center',
              }}
            >
              {book.images && (
                <Box
                  sx={{
                    width: '100%',
                    height: '420px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#1e1e1e',
                    borderRadius: 1,
                    overflow: 'hidden',
                  }}
                >
                  <CardMedia
                    component="img"
                    image={book.images}
                    alt={`Okładka książki ${book.title}`}
                    sx={{
                      // maxWidth: "100%",
                      // maxHeight: "100%",
                      // width: "",
                      // height: "auto",
                      objectFit: 'cover',
                    }}
                  />
                </Box>
              )}
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {book.title}
                </Typography>
                <Typography variant="subtitle1" color="gray">
                  {book.author}
                </Typography>
                <Typography variant="body2" color="gray">
                  {book.availableCopies} egzemplarzy dostępnych
                </Typography>
              </CardContent>
              <CardActions>
                {isLoggedIn ? (
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    onClick={() => handleRentalBook(book)}
                    disabled={book.availableCopies === 0}
                    sx={{
                      '&.Mui-disabled': {
                        backgroundColor: 'rgba(100, 100, 100, 0.3)',
                        color: 'rgba(255, 255, 255, 0.5)',
                        opacity: 0.6,
                        cursor: 'not-allowed',
                      },
                    }}
                  >
                    Wypożycz
                  </Button>
                ) : (
                  <Tooltip title="Musisz być zalogowany">
                    <span>
                      <Button size="small" variant="contained" color="primary">
                        Wypożycz
                      </Button>
                    </span>
                  </Tooltip>
                )}

                <Button
                  size="small"
                  variant="outlined"
                  color="secondary"
                  component={Link}
                  to={`/book/${book.id}`}
                >
                  Opis
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BookList;
