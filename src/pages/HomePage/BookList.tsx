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
  Tooltip,
} from "@mui/material";
import { Book } from "../../types";
import { useUserStore } from "../../store/useUserStore";

type BookListProps = {
  books: Book[];
};

const BookList = ({ books }: BookListProps) => {
  const { isLoggedIn } = useUserStore();
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
                <Box
                  sx={{
                    width: "100%",
                    height: "420px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#1e1e1e",
                    borderRadius: 1,
                    overflow: "hidden",
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
                      objectFit: "cover",
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
                    component={Link}
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
