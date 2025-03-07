import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { init, loadRemote } from '@module-federation/runtime';
import { createRouteTree, rootRoute } from './router';
import { fetchRemotes } from './lib/remotes';

const all = Promise.all.bind(Promise);

async function main() {
  const remotes = await fetchRemotes();

  init({
    name: 'host',
    remotes,
  });

  const remoteModules = await all(remotes.map(r => loadRemote(`${r.name}/routes`)));

  const routes = remoteModules.map(m => m.registerRoutes(rootRoute));

  const routeTree = createRouteTree(routes);

  const router = createRouter({ routeTree });

  createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

main().catch(err => {
  console.log(err);
})