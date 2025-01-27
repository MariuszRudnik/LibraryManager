import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/dashboard/AddBook')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Tu będzie panel dodawania książek</div>;
}
