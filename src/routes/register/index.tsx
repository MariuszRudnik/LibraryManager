import { createFileRoute } from '@tanstack/react-router'
import Register from "../../pages/Register/Register.tsx";

export const Route = createFileRoute('/register/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div><Register/></div>
}
