import { Link } from "@tanstack/react-router";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import { Book } from "../../types";

type BookListProps = {
  books: Book[];
};

const BookList = ({ books }: BookListProps) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", padding: 4 }}>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{ maxWidth: 1200 }}
      >
        {books.map((book) => (
          <Grid item xs={12} sm={6} md={4} key={book.id}>
            <Card
              sx={{
                height: 650,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#121212",
                color: "white",
                padding: 2,
                textAlign: "center",
              }}
            >
              {book.images && (
                <CardMedia
                  component="img"
                  image={book.images}
                  alt={`Okładka książki ${book.title}`}
                  sx={{
                    height: 480,
                    objectFit: "cover",
                    borderRadius: 1,
                    width: "100%",
                  }}
                />
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
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  component={Link}
                >
                  Wypożycz
                </Button>
                <Button
                  size="small"
                  variant="outlined"
                  color="secondary"
                  component={Link}
                  to={`/book/${book.id}`}
                >
                  Opis
                </Button>
                <Button
                  size="small"
                  variant="text"
                  color="info"
                  component={Link}
                  to={`/books/${book.id}/edit`}
                >
                  Edytuj
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
