import { createFileRoute } from "@tanstack/react-router";
import { bookOptions } from "../../queries/book.ts";
import { Book } from "../../pages/Book/Book.tsx";

export const Route = createFileRoute("/book/$book")({
  loader: (data) => {
    const { queryClient } = data.context;
    return queryClient.ensureQueryData(bookOptions(data.params.book));
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { book } = Route.useParams();

  return (
    <div>
      <Book book={book} />
    </div>
  );
}
