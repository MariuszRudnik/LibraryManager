import * as React from "react";
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
import { Divider, Stack, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { blue, red } from "@mui/material/colors";

interface Data {
  id: string;
  title: string;
  author: string;
  year: number;
  availableCopies: number;
  borrowedCopies: number;
  allBooks: number;
  img: boolean;
}

const createData = (data: Book): Data => {
  return {
    ...data,
    allBooks: data.availableCopies + data.borrowedCopies,
    img: !!data.images,
  };
};

export const BooksList = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const { data } = useSuspenseQuery(booksOptions);

  const books: Data[] = [];
  data.forEach((book) => {
    return books.push(createData(book));
  });
  console.log(books);

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

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
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="left" style={{ minWidth: "170px" }}>
                Tytył
              </TableCell>
              <TableCell align="left" style={{ minWidth: "170px" }}>
                Autor
              </TableCell>
              <TableCell align="left" style={{ minWidth: "50px" }}>
                Rok
              </TableCell>
              <TableCell align="left" style={{ minWidth: "50px" }}>
                Dos.
              </TableCell>
              <TableCell align="left" style={{ minWidth: "50px" }}>
                Wyp.
              </TableCell>
              <TableCell align="left" style={{ minWidth: "50px" }}>
                Wszy.
              </TableCell>
              <TableCell align="left" style={{ minWidth: "50px" }}>
                Foto
              </TableCell>
              <TableCell align="left" style={{ minWidth: "50px" }}>
                Akcje
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    <TableCell align="left">{row.title}</TableCell>
                    <TableCell align="left">{row.author}</TableCell>
                    <TableCell align="left">{row.year}</TableCell>
                    <TableCell align="left">{row.availableCopies}</TableCell>
                    <TableCell align="left">{row.borrowedCopies}</TableCell>
                    <TableCell align="left">{row.allBooks}</TableCell>
                    <TableCell align="left">
                      {row.img ? "Tak" : "Nie"}
                    </TableCell>
                    <TableCell align="left">
                      <Stack spacing={2} direction="row">
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
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
