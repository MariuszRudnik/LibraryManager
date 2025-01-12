import { createFileRoute } from "@tanstack/react-router";
import HomePage from "../pages/HomePage/HomePage.tsx";

export const Route = createFileRoute("/")({
  component: HomePage,
});
