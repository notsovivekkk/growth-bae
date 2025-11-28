# Components Directory

This directory contains all React components organized by purpose.

## 📁 Structure

### `/ui`

**Purpose:** ShadCN UI components  
**Usage:** Install via `npx shadcn-ui@latest add [component]`  
**Examples:** Button, Card, Dialog, Input, etc.

These are low-level, reusable UI primitives that follow ShadCN design patterns.

### `/layout`

**Purpose:** Layout components used across multiple pages  
**Examples:**

- `header.tsx` - Site navigation header
- `footer.tsx` - Site footer
- `sidebar.tsx` - Sidebar navigation (if needed)

These components define the structural layout of your application.

### `/sections`

**Purpose:** Page-specific section components  
**Examples:**

- `hero-section.tsx` - Landing page hero
- `features-section.tsx` - Features showcase
- `cta-section.tsx` - Call-to-action section

These are larger, composed components that make up distinct sections of pages.

## 🎯 Component Guidelines

1. **Keep it focused:** Each component should do one thing well
2. **Make it reusable:** Write components that can be used in multiple contexts
3. **Type everything:** Always define proper TypeScript types for props
4. **Document complex logic:** Add JSDoc comments for non-obvious functionality
5. **Mobile-first:** Design components to work on mobile, then enhance for desktop

## 📝 Naming Conventions

- Use **PascalCase** for component files: `HeroSection.tsx`
- Use **kebab-case** for file names: `hero-section.tsx`
- Export components as named exports: `export function HeroSection()`

## 🔧 Example Component Structure

```typescript
import { cn } from "@/lib/utils"

interface ComponentProps {
  title: string
  className?: string
}

/**
 * Component description
 * Explain what this component does
 */
export function Component({ title, className }: ComponentProps) {
  return (
    <div className={cn("default-styles", className)}>
      <h1>{title}</h1>
    </div>
  )
}
```
