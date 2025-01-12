import { createFileRoute } from "@tanstack/react-router";
import { Register } from "../../pages/Register/Register.tsx";
import { usersOptions } from "../../queries/users.ts";

export const Route = createFileRoute("/register/")({
  loader: ({ context }) => {
    const { queryClient } = context;
    return queryClient.ensureQueryData(usersOptions);
  },
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Register />
    </div>
  );
}
