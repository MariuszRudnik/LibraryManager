import {routeTree} from "./routeTree.gen.ts";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {createRouter, RouterProvider} from "@tanstack/react-router";

const router = createRouter({
    routeTree,
    context: { queryClient: undefined! },
});

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}
function App() {

    const queryClient = new QueryClient();
  return (
      <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} context={{ queryClient }} />
      </QueryClientProvider>
  )
}

export default App
