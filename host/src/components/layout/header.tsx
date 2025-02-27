import { Link } from '@tanstack/react-router'
import { CircuitBoard } from 'lucide-react'

export function Header() {
  return (
    <header className="border-b bg-white">
      <div className="flex h-16 items-center px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <CircuitBoard className="h-6 w-6 text-primary" />
          <span className="text-xl">ModuleFed</span>
        </Link>
        <nav className="ml-auto flex items-center gap-4">
          <Link 
            to="/" 
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            activeProps={{
              className: 'text-primary'
            }}
          >
            Dashboard
          </Link>
          <Link 
            to="/about" 
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            activeProps={{
              className: 'text-primary'
            }}
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  )
}