import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/dashboard/LogSystem')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Tu będą lista wszystkich logów systemowych</div>;
}
