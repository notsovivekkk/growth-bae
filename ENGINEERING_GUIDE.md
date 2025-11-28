# 🏗️ Engineering Guide

**Welcome to the GrowthBae codebase!** This guide will help you understand our engineering standards and best practices.

## 📋 Table of Contents

1. [Quick Start](#quick-start)
2. [Philosophy](#philosophy)
3. [Project Structure](#project-structure)
4. [Key Rules](#key-rules)
5. [Common Patterns](#common-patterns)
6. [Checklist](#checklist)

## Quick Start

### Before You Code

1. Read `.cursorrules` - Core engineering standards
2. Read `GBAE_DESIGN_SYSTEM.md` - Design system rules
3. Study existing components in `src/components/`

### Golden Rules

✅ **DO:**

- Write minimal, boring, predictable code
- Use design tokens only (no raw hex colors)
- Follow 8px grid spacing
- Handle loading/error/empty states
- Extract repeated code
- Keep files < 200 lines

❌ **DON'T:**

- Put business logic in UI components
- Make API calls in UI components
- Use `any` type
- Hard-code content in reusable components
- Use arbitrary Tailwind values

## Philosophy

> "Boring, predictable code that's easy to delete is better than clever code that's hard to change."

### Core Principles

1. **Minimal & Boring** - Simple solutions over clever ones
2. **Single Responsibility** - One file, one purpose
3. **Easy to Delete** - Code should be easy to remove or replace
4. **Future-Proof** - Structure for tomorrow's features

## Project Structure

```
src/
├── app/                    # Next.js routes (Server Components)
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── [...routes]        # Other pages
│
├── components/
│   ├── ui/                # ⚛️ ATOMS - Pure presentation
│   │   ├── typography.tsx # H1-H6, Body, etc.
│   │   ├── button.tsx     # Button variants
│   │   ├── input.tsx      # Form input
│   │   └── ...
│   │
│   ├── blocks/            # 🧪 MOLECULES - Composed sections
│   │   └── navbar.tsx     # Reusable navbar
│   │
│   ├── layout/            # 📐 LAYOUT - Page structure
│   │   ├── header.tsx
│   │   └── footer.tsx
│   │
│   └── sections/          # 📦 SECTIONS - Page-specific
│       ├── hero-section.tsx
│       └── features-section.tsx
│
├── lib/
│   ├── api/               # 🌐 API clients
│   │   └── projects.ts
│   ├── hooks/             # 🪝 Custom React hooks
│   │   └── use-projects.ts
│   ├── design/            # 🎨 Design tokens
│   │   └── tokens.ts
│   └── utils/             # 🔧 Utilities
│       └── format-date.ts
│
└── types/                 # 📝 TypeScript types
    └── index.ts
```

## Key Rules

### 1. Component Architecture

#### Atoms (`components/ui/`)

**Purpose:** Pure presentational components

```typescript
// ✅ GOOD - Pure, accepts all data via props
export function Button({ variant, children, onClick }: ButtonProps) {
  return (
    <button
      className={cn(getVariantClasses(variant))}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

// ❌ BAD - Has business logic
export function Button({ userId }: { userId: string }) {
  const user = fetchUser(userId) // ❌ Fetching
  return <button>Hello {user.name}</button>
}
```

**Rules:**

- Zero business logic
- No data fetching
- Accept all data via props
- Pure presentation

#### Blocks/Sections (`components/blocks/`, `components/sections/`)

**Purpose:** Compose atoms into larger sections

```typescript
// ✅ GOOD - Accepts data via props
interface HeroProps {
  title: string
  description: string
  ctaText: string
}

export function HeroSection({ title, description, ctaText }: HeroProps) {
  return (
    <Section padding="lg">
      <Container>
        <H1>{title}</H1>
        <Lead>{description}</Lead>
        <Button variant="primary">{ctaText}</Button>
      </Container>
    </Section>
  )
}

// ❌ BAD - Hard-coded content
export function HeroSection() {
  return (
    <Section>
      <H1>Welcome</H1> {/* ❌ Hard-coded */}
    </Section>
  )
}
```

**Rules:**

- Compose atoms
- Accept content via props
- No hard-coded copy
- Reusable across pages

#### Pages (`app/`)

**Purpose:** Orchestrate data + blocks

```typescript
// ✅ GOOD - Server component, fetches and composes
export default async function ProjectsPage() {
  const projects = await fetchProjects()

  return (
    <>
      <HeroSection
        title="Our Projects"
        description="Explore our work"
        ctaText="Get Started"
      />
      <ProjectsGrid projects={projects} />
    </>
  )
}
```

**Rules:**

- Fetch data (server components)
- Pass data to blocks
- Keep thin - just composition

### 2. TypeScript Standards

```typescript
// ✅ GOOD
type Status = "draft" | "published" | "archived"

interface Project {
  id: string
  title: string
  status: Status
  createdAt: Date
}

export async function fetchProjects(): Promise<Project[]> {
  // Implementation
}

// ❌ BAD
function fetchProjects(): any {} // ❌ any type
const project = { title: "Test" } // ❌ No type
```

**Rules:**

- Strict mode enabled
- Never use `any` (unless justified with comment)
- Export types from `types/` folder
- Use union types for fixed values

### 3. Design System (GBAE)

```typescript
// ✅ GOOD - Using design tokens
<div className="bg-secondary text-primary">
<div className="space-y-4"> {/* 32px = 4 * 8px */}

// ❌ BAD
<div className="bg-[#F5F1E5]"> {/* ❌ Raw hex */}
<div className="space-y-[23px]"> {/* ❌ Not 8px grid */}
<div style={{ color: '#004225' }}> {/* ❌ Inline style */}
```

**Rules:**

- Use design tokens only
- Follow 8px grid for spacing
- No inline styles
- No raw hex colors

### 4. State Management

```typescript
// ✅ GOOD - All states handled
export function ProjectsList({ projects, isLoading, error }: Props) {
  if (isLoading) return <Skeleton />

  if (error) {
    return <ErrorMessage>Failed to load. <button>Retry</button></ErrorMessage>
  }

  if (projects.length === 0) {
    return <EmptyState>No projects yet. <Button>Create one</Button></EmptyState>
  }

  return <ProjectsGrid projects={projects} />
}

// ❌ BAD - Missing states
export function ProjectsList({ projects }: Props) {
  return <ProjectsGrid projects={projects} />
}
```

**Rules:**

- Every async view needs: loading, error, empty states
- No `TODO: add error handling` placeholders
- Graceful error messages

## Common Patterns

### Pattern 1: Feature Card Grid

```typescript
// Configuration-driven (not duplicated JSX)
const FEATURES = [
  { icon: "🚀", title: "Fast", description: "Lightning fast performance" },
  { icon: "🔒", title: "Secure", description: "Bank-level security" },
  { icon: "📈", title: "Scalable", description: "Grows with you" },
]

export function FeaturesSection() {
  return (
    <Section>
      <Container>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(feature => (
            <Card key={feature.title}>
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Body>{feature.description}</Body>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
```

### Pattern 2: Custom Hook

```typescript
// Extract complex logic into hooks
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

### Pattern 3: API Client

```typescript
// lib/api/projects.ts
export async function fetchProjects(): Promise<Project[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/projects`, {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      },
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Error fetching projects:", error)
    return [] // Graceful fallback
  }
}
```

## Checklist

### Before Submitting Code

- [ ] No business logic in UI components
- [ ] All colors using design tokens (`bg-primary`, not `bg-[#004225]`)
- [ ] All spacing following 8px grid
- [ ] Loading/error/empty states handled
- [ ] TypeScript types defined (no `any`)
- [ ] File < 200 lines (or consciously split)
- [ ] Functions < 40 lines (or consciously split)
- [ ] Repeated code extracted (3+ times rule)
- [ ] Meaningful names (no abbreviations like `usr`, `proj`)
- [ ] No unused imports
- [ ] Server Components by default, `"use client"` only when needed

### Red Flags

❌ **Stop if you see:**

- Hard-coded content in reusable components
- API calls directly in UI components
- Inline styles or raw hex colors
- Missing error handling
- Files over 200 lines without reason
- `any` type without comment
- Duplicated code (3+ times)

## Resources

- **Engineering Rules:** `.cursorrules`
- **Design System:** `GBAE_DESIGN_SYSTEM.md`
- **Quick Reference:** `GBAE_QUICK_REFERENCE.md`
- **Component Library:** `COMPONENT_LIBRARY.md`

---

**Remember:** Write code that's easy to delete tomorrow. Future you will thank you.
