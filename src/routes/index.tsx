import { createFileRoute } from "@tanstack/react-router";
import HomePage from "../pages/HomePage/HomePage.tsx";
import { booksOptions } from "../queries/books.ts";

export const Route = createFileRoute("/")({
  loader: async (data) => {
    const { queryClient } = data.context;
    return queryClient.ensureQueryData(booksOptions);
  },
  component: HomePage,
});
