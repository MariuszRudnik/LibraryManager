import { useSuspenseQuery } from "@tanstack/react-query";
import BookLayout from "./components/BookLayout.tsx";
import { bookOptions } from "../../queries/book.ts";

type BookProps = {
  book: string;
};

export const Book = ({ book }: BookProps) => {
  const { data } = useSuspenseQuery(bookOptions(book));
  return <BookLayout book={data} />;
};
