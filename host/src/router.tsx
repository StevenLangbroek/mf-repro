import { RootRoute, Route, Router, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Header } from './components/layout/header'
import { Sidebar } from './components/layout/sidebar'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true
    }
  }
})

// Root Component
function RootComponent() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-6">
            <Outlet />
          </main>
        </div>
        <TanStackRouterDevtools />
        <ReactQueryDevtools initialIsOpen={false} />
      </div>
    </QueryClientProvider>
  )
}

// Index Component
function IndexComponent() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border bg-card p-6">
          <h2 className="text-lg font-semibold">Welcome to ModuleFed</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            This is the host application that provides the main layout and navigation.
            Remote applications will be loaded into this shell.
          </p>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <h2 className="text-lg font-semibold">Features</h2>
          <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
            <li>✨ Shared Layout & Navigation</li>
            <li>🎨 Consistent Design System</li>
            <li>🔌 Module Federation</li>
            <li>🎯 TypeScript Support</li>
          </ul>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <h2 className="text-lg font-semibold">Getting Started</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Click on the sidebar navigation to explore different sections of the application.
          </p>
        </div>
      </div>
    </div>
  )
}

// About Component
function AboutComponent() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">About</h1>
      <div className="rounded-lg border bg-card p-6">
        <p className="text-muted-foreground">
          This is the host application that serves as the shell for our micro-frontend architecture.
          It provides consistent navigation and layout while dynamically loading remote applications.
        </p>
      </div>
    </div>
  )
}

// Create the root route
export const rootRoute = new RootRoute({
  component: RootComponent,
})

// Create the index route
const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: IndexComponent,
})

// Create the about route
const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutComponent,
})

// Create the route tree
export const createRouteTree = (routes: Route[]) => {
  return rootRoute.addChildren([indexRoute, aboutRoute, ...routes]);
}

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}