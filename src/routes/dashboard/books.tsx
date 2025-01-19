import { createFileRoute } from "@tanstack/react-router";
import { Books } from "../../pages/AdminBooks/Books";

export const Route = createFileRoute("/dashboard/books")({
  component: Books,
});
