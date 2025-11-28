# React & Next.js Rules

**React and Next.js specific patterns and rules for the GBAE codebase.**

## Component Architecture

### Server Components by Default

1. **Server Components by default** in Next.js App Router
2. Only use `"use client"` when:
   - Using state, effects, or browser APIs
   - Handling user interactions
   - Using React hooks (useState, useEffect, etc.)
3. Prefer **functional components** with explicit props types
4. Keep components **small** (ideally < 150 lines)

### When to Use Client Components

```typescript
// ✅ GOOD - Client component for interactivity
"use client"

import { useState } from "react"

export function InteractiveButton() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}

// ✅ GOOD - Server component by default
export default async function ProjectsPage() {
  const projects = await fetchProjects()
  return <ProjectsGrid projects={projects} />
}
```

## Logic Extraction

Extract complex logic into:
- **Custom hooks** in `lib/hooks/` (e.g., `useFeatureX`)
- **Pure helpers** in `lib/utils/`
- **API clients** in `lib/api/`

### Custom Hooks Pattern

```typescript
// lib/hooks/use-projects.ts
export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    fetchProjects()
      .then(setProjects)
      .catch(setError)
      .finally(() => setIsLoading(false))
  }, [])

  return { projects, isLoading, error }
}

// Usage in component
export function ProjectsPage() {
  const { projects, isLoading, error } = useProjects()
  return <ProjectsList projects={projects} isLoading={isLoading} error={error} />
}
```

## JSX Rules

### Clean, Extracted Logic

```typescript
// ✅ GOOD - Clean, extracted logic
export function ProjectCard({ project }: ProjectCardProps) {
  const statusColor = getStatusColor(project.status)
  const formattedDate = formatDate(project.createdAt)

  return (
    <Card>
      <CardTitle>{project.title}</CardTitle>
      <Badge color={statusColor}>{project.status}</Badge>
      <Caption>{formattedDate}</Caption>
    </Card>
  )
}
```

### Avoid Inline Complex Logic

```typescript
// ❌ BAD - Inline complex logic
export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card>
      <CardTitle>{project.title}</CardTitle>
      <Badge color={
        project.status === "draft" ? "gray" : 
        project.status === "published" ? "green" : "red"
      }>
        {project.status}
      </Badge>
    </Card>
  )
}
```

## Props Guidelines

### Explicit and Typed Props

- Props should be **explicit and typed**
- No `any` or unstructured `props`
- Use destructuring with types
- Provide sensible defaults

```typescript
// ✅ GOOD
interface ButtonProps {
  variant?: "primary" | "ghost" | "underline"
  size?: "sm" | "md" | "lg"
  children: React.ReactNode
}

export function Button({ 
  variant = "primary", 
  size = "md", 
  children 
}: ButtonProps) {
  return <button className={cn(variantStyles[variant])}>{children}</button>
}

// ❌ BAD
export function Button(props: any) { }
export function Button({ variant, size, children }: any) { }
```

## Next.js App Router Patterns

### Page Components (Server Components)

```typescript
// ✅ GOOD - Server component, fetches and composes
export default async function ProjectsPage() {
  const projects = await fetchProjects()
  
  return (
    <>
      <HeroSection 
        title="Our Projects"
        description="Explore our case studies"
      />
      <ProjectsGrid projects={projects} />
    </>
  )
}
```

### Layout Components

```typescript
// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn("bg-secondary text-primary", aktivGrotesk.variable)}>
        {children}
      </body>
    </html>
  )
}
```

## Component Patterns

### Forward Refs for UI Components

```typescript
// ✅ GOOD - Forward refs for composability
import { forwardRef } from "react"

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant }), className)}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"
```

### Component Composition

```typescript
// ✅ GOOD - Composable components
export function Card({ children, className }: CardProps) {
  return <div className={cn("rounded-lg shadow-md", className)}>{children}</div>
}

export function CardHeader({ children }: CardHeaderProps) {
  return <div className="p-6 border-b">{children}</div>
}

export function CardContent({ children }: CardContentProps) {
  return <div className="p-6">{children}</div>
}
```

## State Management

### Local State with useState

```typescript
// ✅ GOOD - Simple local state
"use client"

export function Counter() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}
```

### Server State (Next.js)

```typescript
// ✅ GOOD - Server components fetch data
export default async function Page() {
  const data = await fetchData()
  return <DataDisplay data={data} />
}
```

## Effects and Side Effects

### useEffect Patterns

```typescript
// ✅ GOOD - Clear dependencies, cleanup
useEffect(() => {
  const subscription = subscribe()
  return () => subscription.unsubscribe()
}, [dependencies])

// ❌ BAD - Missing dependencies or cleanup
useEffect(() => {
  fetchData() // Missing dependencies
})
```

## Performance Patterns

### React.memo for Expensive Components

```typescript
// ✅ GOOD - Memoize expensive renders
export const ExpensiveComponent = React.memo(function ExpensiveComponent({ data }: Props) {
  const result = expensiveCalculation(data)
  return <div>{result}</div>
})
```

### useMemo and useCallback

```typescript
// ✅ GOOD - Memoize expensive computations
const filteredProjects = useMemo(
  () => projects.filter(p => p.status === filter),
  [projects, filter]
)

const handleClick = useCallback(() => {
  // Handler logic
}, [dependencies])
```

## File Organization

### Component File Structure

```typescript
// 1. Imports
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

// 2. Types
interface ComponentProps {
  title: string
}

// 3. Constants
const DEFAULT_TITLE = "Welcome"

// 4. Component
export function Component({ title = DEFAULT_TITLE }: ComponentProps) {
  return <div>{title}</div>
}
```

## Red Flags

❌ Using `"use client"` unnecessarily  
❌ Business logic in UI components  
❌ API calls in client components (use server components or hooks)  
❌ Missing prop types  
❌ Inline complex logic in JSX  
❌ No error boundaries for async components  
❌ Missing loading/error states

