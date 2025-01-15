import { createFileRoute, Outlet } from '@tanstack/react-router'
import { AppProvider } from '@toolpad/core/AppProvider'
import { useDemoRouter } from '@toolpad/core/internal'
import {demoTheme, NAVIGATION} from "../pages/Dashbaorad/styleDashboard.tsx";
import Dashboard from "../pages/Dashbaorad/Dashboard.tsx";


export const Route = createFileRoute('/dashboard')({
  component: DashboardLayoutBasic,
})

export default function DashboardLayoutBasic() {
  const router = useDemoRouter('/dashboard')

  // Remove this const when copying and pasting into your project.

  return (
    <AppProvider navigation={NAVIGATION} router={router} theme={demoTheme}>
      <h1>Dashboard</h1>

        <Dashboard>
        <Outlet />
        </Dashboard>


    </AppProvider>
  )
}
