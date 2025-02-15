import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { booksOptions } from '../../queries/books';
import { useSuspenseQuery } from '@tanstack/react-query';
import { Book } from '../../types/index';
import {
  Autocomplete,
  Box,
  Button,
  CardMedia,
  Divider,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { blue, red } from '@mui/material/colors';

import { deleteBook } from '../../utills/deleteBook';
import { useDeleteBookMutation } from '../../mutations/useDeleteBookMutation';
import { ModalBook } from './Modal';
import { Link } from '@tanstack/react-router';
import { useBookStore } from '../../store/useBookStore';
import { useEditBookMutation } from '../../mutations/useEditBookMutation';

export interface BookRow extends Book {
  allBooks: number;
  img: boolean;
}

const createData = (data: Book[]) => {
  const newData = data.map((book) => ({
    ...book,
    allBooks: book.availableCopies + book.borrowedCopies,
    img: !!book.images,
  }));

  return newData;
};

export const BooksList = () => {
  const [filteredBooks, setFilteredBooks] = useState<BookRow[]>([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  const { data } = useSuspenseQuery(booksOptions);
  const books = createData(data);
  const { mutate: mutateDelete } = useDeleteBookMutation();
  const { mutate: mutateBookCount } = useEditBookMutation();
  const { editBook } = useBookStore();

  const handleEditBook = (row: BookRow) => {
    handleOpen();
    editBook(row);
  };

  const filterData = (v: BookRow | null) => {
    if (v) {
      setFilteredBooks([v]);
      setIsFiltered(true);
    } else {
      setFilteredBooks([]);
      setIsFiltered(false);
    }
  };

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const displayedBooks = isFiltered ? filteredBooks : books;

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{ padding: '20px' }}
      >
        Wszystkie książki
      </Typography>
      <Divider />
      <Box height={10} />
      <Stack
        direction="row"
        justifyContent="space-between"
        marginInline="1rem"
        spacing={2}
      >
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={books}
          sx={{ width: 300 }}
          onChange={(_e, v) => filterData(v)}
          getOptionLabel={(books) => books.title || ''}
          renderInput={(params) => (
            <TextField
              {...params}
              size="small"
              label="Wyszukaj książkę po tytule"
            />
          )}
        />

        <Link to="/dashboard/books/add">
          <Button variant="contained" onClick={handleOpen}>
            Dodaj Książke
          </Button>
        </Link>
        <ModalBook open={open} setOpen={setOpen} />
      </Stack>
      <Box height={10} />
      <TableContainer sx={{ maxHeight: `calc(100vh - 350px)` }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                style={{ minWidth: '40px' }}
              ></TableCell>
              <TableCell align="left" style={{ minWidth: '170px' }}>
                Tytuł
              </TableCell>
              <TableCell align="left" style={{ minWidth: '170px' }}>
                Autor
              </TableCell>
              <TableCell align="center" style={{ minWidth: '50px' }}>
                Rok
              </TableCell>
              <TableCell align="center" style={{ minWidth: '50px' }}>
                Dostępne
              </TableCell>
              <TableCell align="center" style={{ minWidth: '50px' }}>
                Wypożyczone
              </TableCell>
              <TableCell align="center" style={{ minWidth: '50px' }}>
                Wszytkie
              </TableCell>
              <TableCell align="center" style={{ minWidth: '50px' }}>
                Akcje
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedBooks
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    <TableCell
                      align="center"
                      sx={{
                        padding: 0,
                      }}
                    >
                      <CardMedia
                        component="img"
                        sx={{ width: 40 }}
                        image={row.images}
                        alt={row.title}
                      />
                    </TableCell>
                    <TableCell align="left">{row.title}</TableCell>
                    <TableCell align="left">{row.author}</TableCell>
                    <TableCell align="center">{row.year}</TableCell>
                    <TableCell align="center">{row.availableCopies}</TableCell>
                    <TableCell align="center">{row.borrowedCopies}</TableCell>
                    <TableCell align="center">{row.allBooks}</TableCell>
                    <TableCell align="center">
                      <Stack direction="row" justifyContent="space-between">
                        <Tooltip title={'Edytuj'}>
                          <Link
                            to="/dashboard/books/edit/$id"
                            params={{
                              id: row.id,
                            }}
                          >
                            <EditIcon
                              style={{
                                fontSize: '20px',
                                color: blue[500],
                                cursor: 'pointer',
                              }}
                              onClick={() => handleEditBook(row)}
                            />
                          </Link>
                        </Tooltip>

                        <Tooltip
                          title={
                            row.availableCopies ? 'Usuń' : 'Nie można usunąć'
                          }
                        >
                          <DeleteIcon
                            style={{
                              fontSize: '20px',
                              color: red[800],
                              cursor: 'pointer',
                              opacity: row.availableCopies ? 1 : 0.5,
                            }}
                            onClick={() =>
                              row.availableCopies &&
                              deleteBook(row, mutateDelete, mutateBookCount)
                            }
                          />
                        </Tooltip>
                      </Stack>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 50]}
        component="div"
        count={displayedBooks.length}
        rowsPerPage={rowsPerPage}
        labelRowsPerPage="liczba książek na stronie"
        labelDisplayedRows={({ from, to, count }) => {
          return `wiersze ${from}-${to} z ${count}`;
        }}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
