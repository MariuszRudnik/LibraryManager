import { queryOptions } from "@tanstack/react-query";
import { fetchBookById } from "../../../queries/bookss.tsx";

export const bookQuery = (id: string) =>
  queryOptions({
    queryKey: ["book", id],
    queryFn: () => fetchBookById(id),
  });
