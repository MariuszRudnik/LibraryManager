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

interface Column {
  id: keyof Data;
  label: string;
  minWidth?: number;
  align?: "right" | "center";
}

const columns: readonly Column[] = [
  { id: "title", label: "Tytuł", minWidth: 170 },
  { id: "author", label: "Autor", minWidth: 100 },
  {
    id: "year",
    label: "Rok",
    minWidth: 50,
    align: "center",
  },
  {
    id: "availableCopies",
    label: "Dos.",
    minWidth: 50,
    align: "center",
  },
  {
    id: "borrowedCopies",
    label: "Wyp.",
    minWidth: 50,
    align: "center",
  },
  {
    id: "allBooks",
    label: "Wszystkie",
    minWidth: 50,
    align: "center",
  },
  {
    id: "img",
    label: "Foto",
    minWidth: 50,
    align: "center",
  },
  {
    id: "action",
    label: "Akcje",
    minWidth: 170,
    align: "center",
  },
];

interface Data {
  id: string;
  title: string;
  author: string;
  year: number;
  availableCopies: number;
  borrowedCopies: number;
  allBooks: number;
  img: boolean;
  action: string;
}

const createData = (data: Book): Data => {
  return {
    ...data,
    action: "kot",
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
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {books
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {typeof value === "boolean"
                            ? value
                              ? "Tak"
                              : "Nie"
                            : value}
                        </TableCell>
                      );
                    })}
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
