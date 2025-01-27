import React, { Suspense } from 'react';
import { Outlet, createRootRouteWithContext } from '@tanstack/react-router';
import { QueryClient } from '@tanstack/react-query';
import { Navbar } from '../components/Navbar';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from '../assets/theme';

const TanStackRouterDevtools = import.meta.env.DEV
  ? React.lazy(() =>
      import('@tanstack/router-devtools').then((res) => ({
        default: res.TanStackRouterDevtools,
      }))
    )
  : null;

type RootContext = {
  queryClient: QueryClient;
};

export const Route = createRootRouteWithContext<RootContext>()({
  component: RootComponent,
});

function RootComponent() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Outlet />
      <Suspense>
        {TanStackRouterDevtools && <TanStackRouterDevtools />}
      </Suspense>
    </ThemeProvider>
  );
}
// <CssBaseline /> resetuje domyślne ustawienia css przeglądarki
