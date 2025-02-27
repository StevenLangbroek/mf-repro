import { createRoute } from '@tanstack/react-router';
import { Route as RootRoute } from './__root';
import HelloWorld from '../components/HelloWorld';

// Define the index route using code-based approach
export const Route = createRoute({
  getParentRoute: () => RootRoute,
  path: '/',
  component: HelloWorld,
});

// Export the route for Module Federation
export default Route;