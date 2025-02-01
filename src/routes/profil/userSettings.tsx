import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/profil/userSettings')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/profil/userSettings"!</div>
}
