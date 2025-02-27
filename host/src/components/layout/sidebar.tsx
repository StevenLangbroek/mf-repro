import { Suspense } from 'react'
import { Link } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import * as Icons from 'lucide-react'
import { Skeleton } from '@/components/ui/skeleton'
import { fetchNavigation } from '@/lib/api'
import type { SidebarItem } from '@/lib/types'

function SidebarSkeleton() {
  return (
    <div className="flex h-full flex-col gap-2 p-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="flex items-center gap-3 rounded-lg px-3 py-2"
        >
          <Skeleton className="h-5 w-5 shrink-0" />
          <Skeleton className="h-4 w-32" />
        </div>
      ))}
    </div>
  )
}

function SidebarContent() {
  const { data: items = [] } = useQuery({
    queryKey: ['navigation'],
    queryFn: fetchNavigation,
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchOnWindowFocus: false,
  })

  return (
    <div className="flex h-full flex-col gap-2 p-4">
      {items.map((item) => {
        // Dynamically get the icon component
        const IconComponent = Icons[item.icon as keyof typeof Icons] as Icons.LucideIcon

        return (
          <Link
            key={item.id}
            to={item.href}
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 hover:bg-gray-100"
            activeProps={{
              className: 'bg-gray-100 text-gray-900'
            }}
          >
            <IconComponent className="h-5 w-5" />
            <span className="text-sm font-medium">{item.title}</span>
          </Link>
        )
      })}
    </div>
  )
}

export function Sidebar() {
  return (
    <aside className="hidden border-r bg-gray-50/40 lg:block lg:w-64">
      <Suspense fallback={<SidebarSkeleton />}>
        <SidebarContent />
      </Suspense>
    </aside>
  )
}