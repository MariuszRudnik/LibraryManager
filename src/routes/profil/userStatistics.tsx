import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/profil/userStatistics')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/profil/userStatistics"!</div>
}
