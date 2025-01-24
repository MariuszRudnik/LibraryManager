import { queryOptions } from "@tanstack/react-query";
import { Book } from "../types";
import { apiCall } from "../utills/apiCall";

export const bookOptions = (id: string) =>
  queryOptions({
    queryKey: ["book", id],
    queryFn: async () => {
      return apiCall<Book>(`books/${id}`);
    },
  });
