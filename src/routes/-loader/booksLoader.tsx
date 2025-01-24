import { queryOptions } from "@tanstack/react-query";
import { fetchBooks } from "../../queries/bookss.tsx";

export const booksQuery = () =>
  queryOptions({
    queryKey: ["books"],
    queryFn: fetchBooks,
  });
