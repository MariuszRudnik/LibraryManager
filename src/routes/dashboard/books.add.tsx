import { Box, Button, TextField, Typography } from "@mui/material";
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
    <Box display="flex" flexDirection="row">
      {/* <img src={urlInput.value} loading="lazy" /> */}
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Typography variant="h4" component="h1" sx={{ marginBottom: "1.5rem" }}>
          Wprowadź książkę
        </Typography>
        <TextField
          required
          id="title"
          label="Tytuł"
          type="text"
          variant="outlined"
          {...titleInput}
          sx={{ marginBottom: "1rem" }}
        />
        <TextField
          required
          id="author"
          label="Autor"
          type="text"
          variant="outlined"
          {...authorInput}
          sx={{ marginBottom: "1rem" }}
        />
        <Box display="flex" flexDirection="row">
          <TextField
            required
            id="year"
            label="Rok"
            type="number"
            variant="outlined"
            {...yearInput}
            sx={{ marginBottom: "1rem" }}
          />
          <TextField
            required
            id="countBook"
            label="Ilość"
            type="number"
            variant="outlined"
            {...countBookInput}
            sx={{ marginBottom: "1rem" }}
          />
        </Box>
        <TextField
          required
          id="description"
          label="Opis"
          type="text"
          variant="outlined"
          {...descriptionInput}
          sx={{ marginBottom: "1rem" }}
        />
        <TextField
          required
          id="images"
          label="URL"
          type="url"
          variant="outlined"
          {...urlInput}
          sx={{ marginBottom: "1rem" }}
        />

        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{
            marginBottom: "1rem",
            width: "100%",
            padding: "0.75rem",
            fontSize: "1rem",
          }}
        >
          Zaloguj się
        </Button>
      </Box>
    </Box>
  );
}
