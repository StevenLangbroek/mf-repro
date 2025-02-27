import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';

// Import routes
import { Route as RootRoute } from './routes/__root';
import { Route as IndexRoute } from './routes/index';

// Create the route tree using the code-based approach
const routeTree = RootRoute.addChildren([IndexRoute]);

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);