import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Book } from "../types";

type BookStore = {
  book: Book;
  editBook: (book: Book) => void;
};

export const useBookStore = create<BookStore>()(
  persist(
    (set) => ({
      book: {
        id: "",
        title: "",
        author: "",
        year: 0,
        availableCopies: 0,
        borrowedCopies: 0,
        images: "",
        description: "",
      },
      editBook: (book) =>
        set({
          book,
        }),
    }),
    {
      name: "book",
    }
  )
);
