import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/book/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hells "/bookds222"!</div>
}
