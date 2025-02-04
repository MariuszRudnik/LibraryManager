import { createFileRoute } from '@tanstack/react-router';
import { useBookStore } from '../../store/useBookStore';
import { useInput } from '../../hooks/useInput';
import { ModalContext } from '../../context/ModalContext';
import { FormEvent, useContext } from 'react';
import { Book } from '../../types';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useEditBookMutation } from '../../mutations/useEditBookMutation';
import Swal from 'sweetalert2';

export const Route = createFileRoute('/dashboard/books/edit/$id')({
  component: EditBook,
});

function EditBook() {
  const { id } = Route.useParams();
  const { book } = useBookStore();

  const titleInput = useInput(book.title);
  const authorInput = useInput(book.author);
  const yearInput = useInput(book.year);
  const countBookInput = useInput(book.availableCopies);
  const descriptionInput = useInput(book.description);
  const urlInput = useInput(book.images);
  const { mutate } = useEditBookMutation();

  const { handleClose } = useContext(ModalContext);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const editBookObj: Book = {
      id,
      title: titleInput.value,
      author: authorInput.value,
      year: yearInput.value,
      description: descriptionInput.value,
      borrowedCopies: book.borrowedCopies,
      availableCopies: countBookInput.value,
      images: urlInput.value,
    };

    mutate(editBookObj);

    handleClose();

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Książka została zaktualizowana',
      showConfirmButton: false,
      timer: 2000,
    });
  };

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#adaaaa',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '800px',
          backgroundColor: 'white',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          padding: '2rem',
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{
            marginBottom: '1.5rem',
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          Wprowadź książkę
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <TextField
            required
            id="title"
            label="Tytuł"
            type="text"
            variant="outlined"
            {...titleInput}
            sx={{ marginBottom: '1rem', width: '100%' }}
          />
          <TextField
            required
            id="author"
            label="Autor"
            type="text"
            variant="outlined"
            {...authorInput}
            sx={{ marginBottom: '1rem', width: '100%' }}
          />

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: '1rem',
              width: '100%',
              marginBottom: '1rem',
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
              label="Ilość dostępnych egzemplarzy"
              type="number"
              variant="outlined"
              slotProps={{
                input: {
                  inputProps: { min: 0 },
                },
              }}
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
            sx={{ marginBottom: '1rem', width: '100%' }}
          />
          <TextField
            required
            id="images"
            label="URL"
            type="url"
            variant="outlined"
            {...urlInput}
            sx={{ marginBottom: '1rem', width: '100%' }}
          />

          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{
              width: '100%',
              padding: '0.75rem',
              fontSize: '1rem',
            }}
          >
            Dodaj książkę
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
