import { createFileRoute } from "@tanstack/react-router";
import { Books } from "../../pages/AdminBooks/Books";
import { booksOptions } from "../../queries/books";

export const Route = createFileRoute("/dashboard/books")({
  component: Books,
  loader: async (data) => {
    const { queryClient } = data.context;
    return queryClient.ensureQueryData(booksOptions);
  },
});
