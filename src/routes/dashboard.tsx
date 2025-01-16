import { createFileRoute, redirect } from "@tanstack/react-router";
import { getUserFromLocalStorage } from "../utills/getUserFromLocalStorage";
import { Dashboard } from "../pages/Dashborad/Dashboard";

export const Route = createFileRoute("/dashboard")({
  beforeLoad: () => {
    const user = getUserFromLocalStorage();
    console.log(user?.role);
    if (user?.role !== "admin") {
      throw redirect({
        to: "/",
      });
    }
  },
  component: Dashboard,
});
