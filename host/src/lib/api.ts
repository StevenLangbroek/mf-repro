import { SidebarItem } from './types'

export async function fetchNavigation(): Promise<SidebarItem[]> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1500))

  return [
    {
      id: '1',
      title: 'Dashboard',
      href: '/',
      icon: 'LayoutDashboard'
    },
    {
      id: '2',
      title: 'Analytics',
      href: '/analytics',
      icon: 'BarChart'
    },
    {
      id: '3',
      title: 'Settings',
      href: '/settings',
      icon: 'Settings'
    },
    {
      id: '4',
      title: 'Profile',
      href: '/profile',
      icon: 'User'
    },
    {
      id: '5',
      title: 'Help',
      href: '/help',
      icon: 'HelpCircle'
    },
    {
      id: '6',
      title: 'Hello World',
      href: '/hello-world',
      icon: 'Hand'
    }
  ]
}