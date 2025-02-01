import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/dashboard/borrowed-books')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Informacje o wypożyczonych książkach</div>;
}
