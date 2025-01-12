import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/books/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hells "/books/"!</div>
}
