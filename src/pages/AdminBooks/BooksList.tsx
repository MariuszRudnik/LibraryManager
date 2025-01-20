import { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { booksOptions } from "../../queries/books";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Book } from "../../types/index";
import {
  Autocomplete,
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { blue, brown, red } from "@mui/material/colors";
import Swal from "sweetalert2";
import { useDeleteBookMutation } from "../../mutations/useDeleteBookMutation";

interface BookRow extends Book {
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
  const { data } = useSuspenseQuery(booksOptions);
  const [filteredBooks, setFilteredBooks] = useState<BookRow[]>([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const books = createData(data);

  const filterData = (v: BookRow | null) => {
    if (v) {
      setFilteredBooks([v]);
      setIsFiltered(true);
    } else {
      setFilteredBooks([]);
      setIsFiltered(false);
    }
  };

  const { mutate } = useDeleteBookMutation();

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const deleteBook = (
    id: string,
    title: string,
    availableCopies: number,
    borrowedCopies: number,
    allBooks: number
  ) => {
    Swal.fire({
      title: "Jesteś pewien",
      text: "Czy na pewno chcesz usunąć tę pozycję?",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "Nie",
      cancelButtonColor: brown[500],
      confirmButtonColor: red[600],
      confirmButtonText: "Tak, usuń książkę",
    }).then((result) => {
      if (result.value) {
        Swal.fire(title, "Ta książka została usunięta.", "success");
        // mutate(id, {
        //   onSuccess: () => {
        //     Swal.fire(title, "Ta książka została usunięta.", "success");
        //   },
        // });
      }
    });
  };

  const displayedBooks = isFiltered ? filteredBooks : books;

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{ padding: "20px" }}
      >
        Wszystkie książki
      </Typography>
      <Divider />
      <Box height={10} />
      <Stack direction="row" spacing={2} className="my-2 mb-2">
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={books}
          sx={{ width: 300 }}
          onChange={(_e, v) => filterData(v)}
          getOptionLabel={(books) => books.title || ""}
          renderInput={(params) => (
            <TextField
              {...params}
              size="small"
              label="Wyszukaj książkę po tytule"
            />
          )}
        />
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        ></Typography>
        <Button variant="contained">Add</Button>
      </Stack>
      <Box height={10} />
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="left" style={{ minWidth: "170px" }}>
                Tytuł
              </TableCell>
              <TableCell align="left" style={{ minWidth: "170px" }}>
                Autor
              </TableCell>
              <TableCell align="center" style={{ minWidth: "50px" }}>
                Rok
              </TableCell>
              <TableCell align="center" style={{ minWidth: "50px" }}>
                Dos.
              </TableCell>
              <TableCell align="center" style={{ minWidth: "50px" }}>
                Wyp.
              </TableCell>
              <TableCell align="center" style={{ minWidth: "50px" }}>
                Wszy.
              </TableCell>
              <TableCell align="center" style={{ minWidth: "50px" }}>
                Foto
              </TableCell>
              <TableCell align="center" style={{ minWidth: "50px" }}>
                Akcje
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedBooks
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    <TableCell align="left">{row.title}</TableCell>
                    <TableCell align="left">{row.author}</TableCell>
                    <TableCell align="center">{row.year}</TableCell>
                    <TableCell align="center">{row.availableCopies}</TableCell>
                    <TableCell align="center">{row.borrowedCopies}</TableCell>
                    <TableCell align="center">{row.allBooks}</TableCell>
                    <TableCell align="center">
                      {row.img ? "Tak" : "Nie"}
                    </TableCell>
                    <TableCell align="center">
                      <Stack direction="row" justifyContent="space-between">
                        <EditIcon
                          style={{
                            fontSize: "20px",
                            color: blue[500],
                            cursor: "pointer",
                          }}
                        />
                        <DeleteIcon
                          style={{
                            fontSize: "20px",
                            color: red[800],
                            cursor: "pointer",
                          }}
                          onClick={() =>
                            deleteBook(
                              row.id,
                              row.title,
                              row.availableCopies,
                              row.borrowedCopies,
                              row.allBooks
                            )
                          }
                        />
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
