import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/dashboard/AllBooks')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Tu będą wszystkie książki w postaci tabeli </div>;
}
