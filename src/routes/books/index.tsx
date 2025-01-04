import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/books/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/books/"!</div>
}
