import { queryOptions } from "@tanstack/react-query";
import { Book } from "../types";
import { apiCall } from "../utills/apiCall";

export const booksOptions = queryOptions({
  queryKey: ["books"],
  queryFn: async () => {
    return apiCall<Book[]>("books");
  },
});
