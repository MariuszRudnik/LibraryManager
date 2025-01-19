import { createFileRoute, redirect } from "@tanstack/react-router";
import { getUserFromLocalStorage } from "../utills/getUserFromLocalStorage";
import { Dashboard } from "../pages/Dashborad/Dashboard";
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage";

export const Route = createFileRoute("/dashboard")({
  beforeLoad: () => {
    const user = getUserFromLocalStorage();
    if (user?.role !== "admin") {
      throw redirect({
        to: "/",
      });
    }
  },
  component: Dashboard,
  notFoundComponent: NotFoundPage,
});
