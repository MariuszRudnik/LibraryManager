import { createFileRoute } from "@tanstack/react-router";
import { useBookStore } from "../../store/useBookStore";

export const Route = createFileRoute("/dashboard/books/edit/$id")({
  component: RouteComponent,
});

function RouteComponent() {
  const { id } = Route.useParams();
  const { book } = useBookStore();

  return (
    <div>
      <p>id: {id}</p>
      <p>title: {book.title}</p>
    </div>
  );
}
