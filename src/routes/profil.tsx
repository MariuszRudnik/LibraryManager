import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/profil')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Profil użytkownika</div>;
}
