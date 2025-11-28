/**
 * Global TypeScript type definitions
 * Centralized location for shared types and interfaces
 */

export interface NavItem {
  title: string
  href: string
  disabled?: boolean
  external?: boolean
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[]
}

export interface MainNavItem extends NavItem {}

export interface SidebarNavItem extends NavItemWithChildren {}
