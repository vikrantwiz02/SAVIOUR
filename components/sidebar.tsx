'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Home, Bell, Map, Users, Package, Settings } from "lucide-react"

const sidebarItems = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Alerts", href: "/alerts", icon: Bell },
  { name: "Navigation", href: "/navigation", icon: Map },
  { name: "User Support", href: "/support", icon: Users },
  { name: "User Resources", href: "/user-resources", icon: Package },
  { name: "Settings", href: "/settings", icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <ScrollArea className="h-full py-6 pl-4 pr-6">
      <nav className="flex flex-col space-y-2">
        {sidebarItems.map((item) => (
          <Button
            key={item.href}
            variant={pathname === item.href ? "secondary" : "ghost"}
            className={cn(
              "w-full justify-start",
              pathname === item.href && "bg-muted font-semibold"
            )}
            asChild
          >
            <Link href={item.href}>
              <item.icon className="mr-2 h-4 w-4" />
              {item.name}
            </Link>
          </Button>
        ))}
      </nav>
    </ScrollArea>
  )
}