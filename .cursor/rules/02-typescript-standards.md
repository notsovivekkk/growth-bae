# TypeScript Standards

**TypeScript strictness and type rules for the GBAE codebase.**

## Strictness Requirements

### Always Enable Strict Mode

- ✅ Enable **strict mode** always (configured in `tsconfig.json`)
- ✅ Use TypeScript for all `.ts` and `.tsx` files
- ❌ Never use `any` unless explicitly justified with a comment
- ✅ Prefer `type` and `interface` over inline object annotations
- ✅ Export reusable types from `types/` or closest domain folder
- ✅ Use enums/union types for fixed sets instead of magic strings

## Type Guidelines

### Good Type Practices

```typescript
// ✅ GOOD - Explicit types, union types
type Status = "draft" | "published" | "archived"

interface User {
  id: string
  name: string
  status: Status
  createdAt: Date
}

export async function fetchProjects(): Promise<Project[]> {
  // Implementation
}
```

### Bad Type Practices

```typescript
// ❌ BAD - No types, any usage
function doSomething(data: any) { }
const user = { name: "John" } // Missing type
export async function fetchProjects() { } // No return type
```

## Type Definition Rules

### 1. Use Interfaces for Objects

```typescript
// ✅ GOOD
interface ButtonProps {
  variant?: "primary" | "ghost" | "underline"
  size?: "sm" | "md" | "lg"
  children: React.ReactNode
}

// ❌ BAD
type ButtonProps = any
```

### 2. Use Union Types for Fixed Sets

```typescript
// ✅ GOOD
type ButtonVariant = "primary" | "ghost" | "underline"
type Status = "draft" | "published" | "archived"

// ❌ BAD
const variant = "primary" // Magic string, no type safety
```

### 3. Export Reusable Types

```typescript
// ✅ GOOD - Export from types/ or domain folder
// types/index.ts
export interface Project {
  id: string
  title: string
  status: Status
}

// ❌ BAD - Inline types everywhere
export function Component({ project }: { project: { id: string, title: string } }) { }
```

### 4. Explicit Function Types

```typescript
// ✅ GOOD - Clear input + output types
export async function fetchProjects(): Promise<Project[]> {
  // Implementation
}

export function formatDate(date: Date): string {
  // Implementation
}

// ❌ BAD - No return types
export async function fetchProjects() {
  return await fetch('/api/projects').then(r => r.json())
}
```

### 5. Props Should Be Explicit and Typed

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
}: ButtonProps) { }

// ❌ BAD
export function Button(props: any) { }
export function Button({ variant, size, children }: any) { }
```

## Type Safety Rules

### Never Use `any`

```typescript
// ❌ BAD
function processData(data: any) {
  return data.something
}

// ✅ GOOD
interface Data {
  something: string
}

function processData(data: Data) {
  return data.something
}

// ✅ GOOD - If absolutely necessary, justify with comment
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function handleUnknownData(data: any): void {
  // Legacy API returns untyped data, will be migrated
}
```

### Use Type Guards

```typescript
// ✅ GOOD
function isProject(obj: unknown): obj is Project {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'id' in obj &&
    'title' in obj
  )
}
```

### Avoid Type Assertions

```typescript
// ❌ BAD - Unsafe assertion
const data = response.json() as Project

// ✅ GOOD - Proper typing
const data: Project = await response.json()
```

## File Organization for Types

### Shared Types

Place in `src/types/index.ts` or domain-specific files:

```typescript
// types/index.ts
export interface User { }
export interface Project { }
export type Status = "draft" | "published" | "archived"
```

### Component-Specific Types

Colocate with component or in same directory:

```typescript
// components/ui/button.tsx
export interface ButtonProps {
  variant?: "primary" | "ghost" | "underline"
  children: React.ReactNode
}
```

## TypeScript Configuration

Key settings in `tsconfig.json`:

- `strict: true` - Enable all strict type checking
- `noEmit: true` - Next.js handles compilation
- `paths: { "@/*": ["./src/*"] }` - Absolute imports
- `jsx: "preserve"` - Next.js handles JSX

## Common Patterns

### Generic Functions

```typescript
// ✅ GOOD - Generic with constraints
function getById<T extends { id: string }>(items: T[], id: string): T | undefined {
  return items.find(item => item.id === id)
}
```

### Utility Types

```typescript
// ✅ GOOD - Use built-in utility types
type PartialProject = Partial<Project>
type ProjectKeys = keyof Project
type ReadonlyProject = Readonly<Project>
```

## ESLint Rules

From `.eslintrc.json`:

- `@typescript-eslint/no-unused-vars` - Warn on unused variables
- `@typescript-eslint/no-explicit-any` - Warn on `any` usage
- Unused vars can be prefixed with `_` to ignore

## Red Flags

❌ Using `any` without justification  
❌ Missing return types on functions  
❌ Inline object types instead of interfaces  
❌ Magic strings instead of union types  
❌ No type definitions for props  
❌ Type assertions instead of proper typing

