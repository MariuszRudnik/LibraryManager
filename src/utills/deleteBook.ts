import { brown, red } from "@mui/material/colors";
import Swal from "sweetalert2";
import { BookRow } from "../pages/AdminBooks/BooksList";
import { Book } from "../types";
import { MutateOptions } from "@tanstack/react-query";

export const deleteBook = (
  {
    id,
    title,
    author,
    allBooks,
    availableCopies,
    borrowedCopies,
    images,
    description,
    year,
  }: BookRow,
  mutateDelete: {
    (
      variables: string,
      options?: MutateOptions<unknown, Error, string, unknown> | undefined
    ): void;
    (arg0: string, arg1: { onSuccess: () => void; onError: () => void }): void;
  }
) => {
  const options = [];
  for (let i = 1; i <= availableCopies; i++) {
    const label = i === 1 ? "książkę" : i < 5 ? "książki" : "książek";
    options.push({
      label: `Usuń ${i} ${label}`,
      value: i,
    });
  }

  Swal.fire({
    title: "Usuwanie książki",
    html: `
        <div>
          <p> ${title}</p>
          <p>Stan książek:</p>
          <ul style="list-style-type: none; padding: 0; margin: 0;">
            <li>Dostępne egzemplarze: ${availableCopies}</li>
            <li>Wypożyczone egzemplarze: ${borrowedCopies}</li>
            <li>Wszystkie egzemplarze: ${allBooks}</li>
          </ul>
          <p>Wybierz ilość książek do usunięcia:</p>
          <select id="booksToDeleteSelect" class="swal2-select">
            ${options
              .map(
                (option) =>
                  `<option value="${option.value}">${option.label}</option>`
              )
              .join("")}
          </select>
        </div>
      `,
    icon: "warning",
    showCancelButton: true,
    cancelButtonText: "Anuluj",
    cancelButtonColor: brown[500],
    confirmButtonColor: red[600],
    confirmButtonText: "Usuń wybrane pozycje",
  }).then((result) => {
    if (result.isConfirmed) {
      const select = document.getElementById(
        "booksToDeleteSelect"
      ) as HTMLSelectElement;
      const numberOfBooksToDelete = parseInt(select.value);

      if (numberOfBooksToDelete === allBooks) {
        // Jeśli liczba wybranych książek = liczbie wszystkich, używamy mutateDelete
        console.log("całośc", id);
        mutateDelete(id, {
          onSuccess: () => {
            Swal.fire({
              title: "Sukces",
              text: "Pozycja została całkowicie usunięta z biblioteki",
              icon: "success",
            });
          },
          onError: () => {
            Swal.fire({
              title: "Błąd",
              text: "Wystąpił błąd podczas usuwania pozycji",
              icon: "error",
              confirmButtonColor: red[600],
            });
          },
        });
      } else {
        // W przeciwnym razie używamy mutateUpdate z całym obiektem książki

        const book: Book = {
          id,
          title,
          author,
          images,
          year,
          borrowedCopies,
          description,
          availableCopies: availableCopies - numberOfBooksToDelete,
        };
        console.log(book);
        mutateUpdate(book, {
          onSuccess: () => {
            Swal.fire({
              title: "Sukces",
              text: `Usunięto ${numberOfBooksToDelete} ${
                numberOfBooksToDelete === 1
                  ? "książkę"
                  : numberOfBooksToDelete < 5
                    ? "książki"
                    : "książek"
              }`,
              icon: "success",
            });
          },
          onError: () => {
            Swal.fire({
              title: "Błąd",
              text: "Wystąpił błąd podczas usuwania książek",
              icon: "error",
              confirmButtonColor: red[600],
            });
          },
        });
      }
    }
  });
};
