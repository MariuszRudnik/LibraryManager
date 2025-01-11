import { createFileRoute } from '@tanstack/react-router'
import Login from "../../pages/Login/Login.tsx";

export const Route = createFileRoute('/login/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div><Login/></div>
}
