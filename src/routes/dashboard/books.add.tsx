import { Box, Button, TextField, Typography, Container } from "@mui/material";
import { createFileRoute } from "@tanstack/react-router";
import { useInput } from "../../hooks/useInput";
import { FormEvent } from "react";
import { BookDto } from "../../types";

export const Route = createFileRoute("/dashboard/books/add")({
  component: RouteComponent,
});

function RouteComponent() {
  const titleInput = useInput("");
  const authorInput = useInput("");
  const yearInput = useInput("");
  const countBookInput = useInput("");
  const descriptionInput = useInput("");
  const urlInput = useInput("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const addBook: BookDto = {
      title: titleInput.value,
      author: authorInput.value,
      year: Number(yearInput.value),
      description: descriptionInput.value,
      borrowedCopies: 0,
      availableCopies: Number(countBookInput.value),
      images: urlInput.value,
    };

    console.log(addBook);
  };

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem 0",
        backgroundColor: "#adaaaa",
        minHeight: "calc(100vh - 96px)", // Zmniejszamy wysokość tła o 4% (2% z góry, 2% z dołu)
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "800px",
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          padding: "2rem",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{ marginBottom: "1.5rem", fontWeight: "bold", textAlign: "center" }}
        >
          Wprowadź książkę
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TextField
            required
            id="title"
            label="Tytuł"
            type="text"
            variant="outlined"
            {...titleInput}
            sx={{ marginBottom: "1rem", width: "100%" }}
          />
          <TextField
            required
            id="author"
            label="Autor"
            type="text"
            variant="outlined"
            {...authorInput}
            sx={{ marginBottom: "1rem", width: "100%" }}
          />

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: "1rem",
              width: "100%",
              marginBottom: "1rem",
            }}
          >
            <TextField
              required
              id="year"
              label="Rok"
              type="number"
              variant="outlined"
              {...yearInput}
              sx={{ flex: 1 }}
            />
            <TextField
              required
              id="countBook"
              label="Ilość"
              type="number"
              variant="outlined"
              {...countBookInput}
              sx={{ flex: 1 }}
            />
          </Box>

          <TextField
            required
            id="description"
            label="Opis"
            type="text"
            variant="outlined"
            multiline
            rows={3}
            {...descriptionInput}
            sx={{ marginBottom: "1rem", width: "100%" }}
          />
          <TextField
            required
            id="images"
            label="URL"
            type="url"
            variant="outlined"
            {...urlInput}
            sx={{ marginBottom: "1rem", width: "100%" }}
          />

          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{
              width: "100%",
              padding: "0.75rem",
              fontSize: "1rem",
            }}
          >
            Dodaj książkę
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
