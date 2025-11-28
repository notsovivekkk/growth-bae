# API & Data Layer

**API clients, data fetching patterns, and error handling for the GBAE codebase.**

## Structure

All data fetching lives in:
- `lib/api/` for client-side fetching
- Server components for server-side fetching

## API File Organization

**One file per domain:**

```
lib/api/
  ├── projects.ts
  ├── case-studies.ts
  ├── users.ts
  └── analytics.ts
```

### Good API File Structure

```typescript
// lib/api/projects.ts
export async function fetchProjects(): Promise<Project[]> { }
export async function fetchProjectById(id: string): Promise<Project> { }
export async function createProject(data: CreateProjectInput): Promise<Project> { }
export async function updateProject(id: string, data: UpdateProjectInput): Promise<Project> { }
```

## API Function Guidelines

### Typed, Clear, Handles Errors

```typescript
// ✅ GOOD - Typed, clear, handles errors
export async function fetchProjects(): Promise<Project[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/projects`, {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`,
        "Content-Type": "application/json",
      },
    })
    
    if (!response.ok) {
      throw new Error(`Failed to fetch projects: ${response.status}`)
    }
    
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching projects:', error)
    return [] // Graceful fallback
  }
}
```

### Bad API Function

```typescript
// ❌ BAD - No types, no error handling
export async function fetchProjects() {
  const res = await fetch('https://hardcoded-url.com/projects')
  return res.json()
}
```

## API Rules

### 1. Use Typed Functions

```typescript
// ✅ GOOD - Clear input + output types
export async function fetchProjects(): Promise<Project[]>
export async function createProject(data: CreateProjectInput): Promise<Project>
export async function updateProject(id: string, data: UpdateProjectInput): Promise<Project>

// ❌ BAD - No types
export async function fetchProjects() { }
export async function createProject(data: any) { }
```

### 2. Handle Errors Gracefully

```typescript
// ✅ GOOD - Don't crash the UI
export async function fetchProjects(): Promise<Project[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/projects`)
    if (!response.ok) {
      throw new Error(`Failed: ${response.status}`)
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching projects:', error)
    return [] // Graceful fallback
  }
}
```

### 3. Never Hard-Code URLs or Tokens

```typescript
// ❌ BAD - Hard-coded values
export async function fetchProjects() {
  const res = await fetch('https://api.example.com/projects')
  return res.json()
}

// ✅ GOOD - Read from env variables
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'

export async function fetchProjects(): Promise<Project[]> {
  const response = await fetch(`${API_BASE_URL}/projects`, {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  })
  // ...
}
```

### 4. Return Fallback Data or Throw Meaningful Errors

```typescript
// ✅ GOOD - Return empty array on error
export async function fetchProjects(): Promise<Project[]> {
  try {
    // ... fetch logic
    return data
  } catch (error) {
    console.error('Error:', error)
    return [] // Graceful fallback
  }
}

// ✅ GOOD - Throw meaningful error for critical operations
export async function createProject(data: CreateProjectInput): Promise<Project> {
  const response = await fetch(`${API_BASE_URL}/projects`, {
    method: 'POST',
    body: JSON.stringify(data),
  })
  
  if (!response.ok) {
    throw new Error(`Failed to create project: ${response.statusText}`)
  }
  
  return await response.json()
}
```

## Server-Side Data Fetching

### Next.js Server Components

```typescript
// ✅ GOOD - Fetch in server component
export default async function ProjectsPage() {
  const projects = await fetchProjects()
  
  return (
    <>
      <HeroSection title="Our Projects" />
      <ProjectsGrid projects={projects} />
    </>
  )
}
```

### Server Actions (Next.js 14+)

```typescript
// app/actions/projects.ts
'use server'

export async function createProject(formData: FormData) {
  const data = {
    title: formData.get('title'),
    // ...
  }
  
  const project = await fetch(`${API_BASE_URL}/projects`, {
    method: 'POST',
    body: JSON.stringify(data),
  })
  
  return project
}
```

## Client-Side Data Fetching

### Custom Hooks Pattern

```typescript
// lib/hooks/use-projects.ts
'use client'

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
```

### Usage in Client Components

```typescript
'use client'

export function ProjectsList() {
  const { projects, isLoading, error } = useProjects()
  
  if (isLoading) return <Skeleton />
  if (error) return <ErrorMessage>{error.message}</ErrorMessage>
  
  return <ProjectsGrid projects={projects} />
}
```

## API Client Patterns

### Base API Client

```typescript
// lib/api/client.ts
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'

async function apiClient<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.API_TOKEN}`,
      ...options?.headers,
    },
  })
  
  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`)
  }
  
  return response.json()
}

export { apiClient }
```

### Using Base Client

```typescript
// lib/api/projects.ts
import { apiClient } from './client'
import type { Project } from '@/types'

export async function fetchProjects(): Promise<Project[]> {
  return apiClient<Project[]>('/projects')
}

export async function fetchProjectById(id: string): Promise<Project> {
  return apiClient<Project>(`/projects/${id}`)
}
```

## Error Handling Patterns

### Try-Catch with Fallback

```typescript
export async function fetchProjects(): Promise<Project[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/projects`)
    if (!response.ok) throw new Error(`Failed: ${response.status}`)
    return await response.json()
  } catch (error) {
    console.error('Error fetching projects:', error)
    return [] // Graceful fallback
  }
}
```

### Error Types

```typescript
// types/errors.ts
export class APIError extends Error {
  constructor(
    message: string,
    public status: number,
    public data?: unknown
  ) {
    super(message)
    this.name = 'APIError'
  }
}

// Usage
export async function fetchProjects(): Promise<Project[]> {
  const response = await fetch(`${API_BASE_URL}/projects`)
  if (!response.ok) {
    throw new APIError(
      'Failed to fetch projects',
      response.status,
      await response.json()
    )
  }
  return await response.json()
}
```

## No API Calls in UI Components

```typescript
// ❌ BAD - API call in component
export function ProjectsList() {
  const [projects, setProjects] = useState([])
  
  useEffect(() => {
    fetch('https://api.example.com/projects')
      .then(r => r.json())
      .then(setProjects)
  }, [])
  
  return <div>{projects.map(p => <div>{p.title}</div>)}</div>
}

// ✅ GOOD - Extract to hook or server component
export function ProjectsList({ projects }: { projects: Project[] }) {
  return <div>{projects.map(p => <div>{p.title}</div>)}</div>
}
```

## Red Flags

❌ Hard-coded URLs or API tokens  
❌ No error handling  
❌ Missing TypeScript types  
❌ API calls directly in UI components  
❌ No fallback data on error  
❌ Unhandled promise rejections  
❌ No loading states  
❌ Scattered API logic across files

