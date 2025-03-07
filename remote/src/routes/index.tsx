import { createRoute, Route } from '@tanstack/react-router';
import HelloWorld from '../components/HelloWorld';

// Export the route for Module Federation
export { Route };

export function registerRoutes(RootRoute: Route) {
  const helloWorldRoute = createRoute({
    getParentRoute: () => RootRoute,
    path: '/hello-world',
    component: HelloWorld,
  });
  
  return helloWorldRoute;
}