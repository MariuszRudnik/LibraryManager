import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/books/add")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Tu będzie formularz dodawania książek </div>;
}
