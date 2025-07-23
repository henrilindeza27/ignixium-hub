import { useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { 
  LayoutDashboard, 
  Users, 
  CreditCard, 
  Bell, 
  FileText, 
  BarChart3, 
  LogOut,
  Settings
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const menuItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Núcleos", url: "/nucleos", icon: Users },
  { title: "Planos", url: "/planos", icon: CreditCard },
  { title: "Notificações", url: "/notificacoes", icon: Bell },
  { title: "Pedidos", url: "/pedidos", icon: FileText },
  { title: "Estatísticas", url: "/estatisticas", icon: BarChart3 },
]

export function AdminSidebar() {
  const { state } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname
  const collapsed = state === "collapsed"

  const isActive = (path: string) => {
    if (path === "/") return currentPath === path
    return currentPath.startsWith(path)
  }
  
  const getNavCls = (path: string) => {
    const base = "w-full justify-start gap-3 px-3 py-2 rounded-lg transition-all duration-200"
    return isActive(path) 
      ? `${base} bg-primary text-primary-foreground shadow-soft` 
      : `${base} hover:bg-sidebar-accent hover:text-sidebar-accent-foreground`
  }

  return (
    <Sidebar className={`border-r border-sidebar-border ${collapsed ? "w-16" : "w-64"}`}>
      {/* Header com perfil do admin */}
      <SidebarHeader className="p-4 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 ring-2 ring-primary/20">
            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" />
            <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
              IG
            </AvatarFallback>
          </Avatar>
          {!collapsed && (
            <div className="flex flex-col">
              <span className="font-semibold text-sidebar-foreground">
                Admin Ignixium
              </span>
              <span className="text-xs text-muted-foreground">
                admin@ignixium.com
              </span>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="px-3 py-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-medium text-muted-foreground mb-2 px-3">
            NAVEGAÇÃO
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavCls(item.url)}>
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      {!collapsed && <span className="font-medium">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer com logout */}
      <SidebarFooter className="p-3 border-t border-sidebar-border">
        <Button 
          variant="ghost" 
          size="sm"
          className="w-full justify-start gap-3 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
        >
          <LogOut className="h-4 w-4" />
          {!collapsed && <span>Logout</span>}
        </Button>
      </SidebarFooter>
    </Sidebar>
  )
}