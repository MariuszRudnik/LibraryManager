import { CardMedia, Box, Typography, Container } from "@mui/material";

interface Book {
  id: string;
  title: string;
  author: string;
  copies: number;
  images: string;
  availableCopies: number;
  borrowedCopies: number;
  description: string;
  year: number;
}

interface BookLayoutProps {
  book: Book;
}

function BookLayout({ book }: BookLayoutProps) {
  const { title, author, year, images, description } = book;
  const imagePath = `../books/${images}`;

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#adaaaa",
        padding: "2rem",
      }}
    >
      <Box
        sx={{
          maxWidth: "800px",
          width: "100%",
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{ marginBottom: "1rem", fontWeight: "bold" }}
        >
          {title}
        </Typography>
        <Typography variant="subtitle1" sx={{ marginBottom: "1rem", color: "gray" }}>
          {author} &bull; {year}
        </Typography>
        {images && (
          <CardMedia
            component="img"
            image={imagePath}
            alt={`Okładka książki ${title}`}
            sx={{
              maxHeight: 480, 
              width: "100%", 
              objectFit: "contain",
              borderRadius: "8px",
              marginBottom: "1.5rem",
            }}
          />
        )}
        <Typography variant="body1" sx={{ color: "#333", lineHeight: 1.6 }}>
          {description}
        </Typography>
      </Box>
    </Container>
  );
}

export default BookLayout;
