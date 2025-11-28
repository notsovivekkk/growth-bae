# State Management

**Loading, error, and empty state patterns for the GBAE codebase.**

## Every Async View Must Have

### 1. Loading State

```tsx
// ✅ GOOD - Loading state
if (isLoading) return <Skeleton />
if (isLoading) return <LoadingSpinner />
```

### 2. Error State

```tsx
// ✅ GOOD - Error state
if (error) return <ErrorMessage>Failed to load projects</ErrorMessage>
if (error) {
  return (
    <ErrorState>
      <Body>Failed to load projects. Please try again.</Body>
      <Button onClick={retry}>Retry</Button>
    </ErrorState>
  )
}
```

### 3. Empty State (when applicable)

```tsx
// ✅ GOOD - Empty state
if (projects.length === 0) {
  return (
    <EmptyState>
      <Body>No projects yet. Create your first one!</Body>
      <Button href="/projects/new">Create Project</Button>
    </EmptyState>
  )
}
```

## Complete State Handling

### Good Example - All States Handled

```tsx
// ✅ GOOD - Complete states
export function ProjectsList({ 
  projects, 
  isLoading, 
  error 
}: ProjectsListProps) {
  if (isLoading) {
    return <ProjectsSkeleton />
  }
  
  if (error) {
    return (
      <ErrorState>
        <Body>Failed to load projects. Please try again.</Body>
        <Button onClick={retry}>Retry</Button>
      </ErrorState>
    )
  }
  
  if (projects.length === 0) {
    return (
      <EmptyState>
        <Body>No projects yet. Create your first one!</Body>
        <Button href="/projects/new">Create Project</Button>
      </EmptyState>
    )
  }
  
  return <ProjectsGrid projects={projects} />
}
```

### Bad Example - Missing States

```tsx
// ❌ BAD - No error/empty states
export function ProjectsList({ projects }: ProjectsListProps) {
  return <ProjectsGrid projects={projects} />
}
```

## UI Rule

❌ **Do NOT leave placeholders** like `TODO: add error handling`

✅ **Always show proper UX:**
- Loading → Use skeleton or subtle loader
- Error → Simple, clear message with retry option
- Empty → Soft, helpful copy with next action

## Loading States

### Skeleton Loaders

```tsx
// ✅ GOOD - Skeleton for list
export function ProjectsSkeleton() {
  return (
    <div className="space-y-4">
      {[1, 2, 3].map(i => (
        <Card key={i}>
          <CardHeader>
            <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse" />
          </CardHeader>
          <CardContent>
            <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
```

### Loading Spinner

```tsx
// ✅ GOOD - Simple spinner
export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="h-8 w-8 border-4 border-accent border-t-transparent rounded-full animate-spin" />
    </div>
  )
}
```

## Error States

### Error Message with Retry

```tsx
// ✅ GOOD - Error with retry
export function ErrorState({ 
  message, 
  onRetry 
}: { 
  message: string
  onRetry?: () => void 
}) {
  return (
    <div className="text-center py-12 space-y-4">
      <Body className="text-text-muted">{message}</Body>
      {onRetry && (
        <Button variant="primary" onClick={onRetry}>
          Try Again
        </Button>
      )}
    </div>
  )
}
```

### Error Boundary Pattern

```tsx
// ✅ GOOD - Error boundary for component tree
'use client'

export function ErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundaryProvider>
      {children}
    </ErrorBoundaryProvider>
  )
}
```

## Empty States

### Empty State with Action

```tsx
// ✅ GOOD - Empty state with next action
export function EmptyState({ 
  message, 
  actionLabel, 
  actionHref 
}: EmptyStateProps) {
  return (
    <div className="text-center py-12 space-y-4">
      <Body className="text-text-muted">{message}</Body>
      {actionHref && (
        <Button variant="primary" href={actionHref}>
          {actionLabel}
        </Button>
      )}
    </div>
  )
}
```

## Custom Hooks with States

### Hook with Loading/Error/Data

```tsx
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

  const retry = useCallback(() => {
    setIsLoading(true)
    setError(null)
    fetchProjects()
      .then(setProjects)
      .catch(setError)
      .finally(() => setIsLoading(false))
  }, [])

  return { projects, isLoading, error, retry }
}
```

### Usage in Component

```tsx
export function ProjectsPage() {
  const { projects, isLoading, error, retry } = useProjects()
  
  if (isLoading) return <ProjectsSkeleton />
  if (error) return <ErrorState message={error.message} onRetry={retry} />
  if (projects.length === 0) {
    return <EmptyState message="No projects yet" actionHref="/projects/new" />
  }
  
  return <ProjectsGrid projects={projects} />
}
```

## Server Component States

### Loading.tsx and error.tsx

```tsx
// app/projects/loading.tsx
export default function Loading() {
  return <ProjectsSkeleton />
}

// app/projects/error.tsx
'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <ErrorState 
      message="Failed to load projects" 
      onRetry={reset} 
    />
  )
}
```

## State Management Patterns

### Local State with useState

```tsx
// ✅ GOOD - Simple local state
'use client'

export function Counter() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}
```

### Form State

```tsx
// ✅ GOOD - Form state with validation
'use client'

export function ContactForm() {
  const [formData, setFormData] = useState({ email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    
    try {
      await submitForm(formData)
    } catch (err) {
      setError('Failed to submit form')
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <form onSubmit={handleSubmit}>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {/* form fields */}
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </Button>
    </form>
  )
}
```

## Red Flags

❌ No loading state for async operations  
❌ No error handling or error UI  
❌ No empty states  
❌ Placeholders like `TODO: add error handling`  
❌ Crashes on error instead of graceful fallback  
❌ Loading states that flash too quickly  
❌ No retry mechanism for failed requests  
❌ Missing loading indicators for forms

## Before Submitting Code

- [ ] Loading state handled?
- [ ] Error state with retry option?
- [ ] Empty state with helpful message?
- [ ] No TODO placeholders?
- [ ] Graceful error fallbacks?
- [ ] Loading indicators for async operations?
- [ ] Proper state management in hooks?

