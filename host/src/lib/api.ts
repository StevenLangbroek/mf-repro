import { fetchRemotes } from './remotes';
import { SidebarItem } from "./types";
import { loadRemote } from "@module-federation/runtime";

export async function fetchNavigation(): Promise<SidebarItem[]> {
  const remoteItems = await Promise.all(
    (
      await fetchRemotes()
    ).map(async (remote) => {
      // @ts-expect-error
      const { getNavigationItems } = await loadRemote(
        `${remote.name}/navigation`
      );
      return getNavigationItems();
    })
  );

  const hostItems = [
    {
      id: "1",
      title: "Dashboard",
      href: "/",
      icon: "LayoutDashboard",
    },
    {
      id: "2",
      title: "About",
      href: "/about",
      icon: "BarChart",
    },
  ];

  return [...hostItems, ...remoteItems.flat()];
}
