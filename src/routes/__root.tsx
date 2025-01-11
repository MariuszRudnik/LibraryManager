import * as React from 'react'
import {Outlet,  createRootRouteWithContext} from '@tanstack/react-router'

export const Route = createRootRouteWithContext()({
    component: RootComponent,
});
const TanStackRouterDevtools = import.meta.env.DEV
    ? React.lazy(() =>
        import('@tanstack/router-devtools').then((res) => ({
            default: res.TanStackRouterDevtools,
        }))
    )
    : null;

function RootComponent() {
  return (
    <React.Fragment>

      <Outlet />
        {TanStackRouterDevtools && <TanStackRouterDevtools />}
    </React.Fragment>
  )
}
