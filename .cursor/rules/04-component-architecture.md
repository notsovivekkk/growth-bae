# Component Architecture

**Component design principles and architecture patterns for the GBAE codebase.**

## Component Hierarchy

The GBAE component architecture follows atomic design principles:

```
Atoms (components/ui/)
  → Pure presentational components
  → No business logic, no data fetching
  → Just layout, styling, and props

Molecules/Blocks (components/blocks/, components/layout/)
  → Composed sections
  → Reusable across pages
  → Accept content via props

Sections (components/sections/)
  → Page-specific sections
  → Composed from atoms and blocks
  → Accept data via props

Pages (app/)
  → Orchestrate data + blocks
  → Fetch data (server components)
  → Keep thin - just composition
```

## Atoms (`components/ui/`)

**Purpose:** Pure presentational components

### Rules for Atoms

- **Purely presentational** - No business logic
- **No data fetching** - Accept all data via props
- **Just layout, styling, and props** - Single responsibility
- **Accept all necessary data via props** - No internal state for data

### Good Atom Example

```typescript
// ✅ GOOD - Pure, presentational
export function Button({ variant, children, onClick }: ButtonProps) {
  return (
    <button 
      className={cn(variantStyles[variant])} 
      onClick={onClick}
    >
      {children}
    </button>
  )
}
```

### Bad Atom Example

```typescript
// ❌ BAD - Has business logic
export function Button({ userId }: { userId: string }) {
  const user = fetchUser(userId) // ❌ Fetching in atom
  return <button>Hello {user.name}</button>
}
```

### Atom Components in GBAE

- `Typography` (H1-H6, Body, Lead, etc.)
- `Button`
- `Input`
- `Card` and subcomponents
- `Container`
- `Section`
- `Logo`
- `NavLink`
- `IconWrapper`

## Blocks/Sections (`components/blocks/`, `components/sections/`)

**Purpose:** Compose atoms into larger sections

### Rules for Blocks/Sections

- **Accept props for content** - No hard-coded copy
- **Composable** - Reusable on multiple pages
- **Responsible for layout of atoms** - NOT data fetching
- **Can accept data as props** - But don't fetch internally

### Good Block Example

```typescript
// ✅ GOOD - Accepts data via props
interface HeroProps {
  title: string
  description: string
  ctaText: string
  ctaHref: string
}

export function HeroSection({ title, description, ctaText, ctaHref }: HeroProps) {
  return (
    <Section>
      <Container>
        <H1>{title}</H1>
        <Lead>{description}</Lead>
        <Button href={ctaHref}>{ctaText}</Button>
      </Container>
    </Section>
  )
}
```

### Bad Block Example

```typescript
// ❌ BAD - Hard-coded content
export function HeroSection() {
  return (
    <Section>
      <H1>Welcome to GrowthBae</H1> {/* ❌ Hard-coded */}
    </Section>
  )
}
```

### Block Components in GBAE

- `Navbar` (`components/blocks/`)
- `Header` (`components/layout/`)
- `Footer` (`components/layout/`)
- `HeroSection` (`components/sections/`)
- `FeaturesSection` (`components/sections/`)
- `CTASection` (`components/sections/`)

## Page-Level (`app/`)

**Purpose:** Orchestrate data + blocks

### Rules for Pages

- **Orchestrate data + blocks** - Composition layer
- **Fetch data** (in server components) and pass into blocks via props
- **Keep thin** - Just composition, no complex logic
- **Server components by default** - Use `"use client"` only when needed

### Good Page Example

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

### Bad Page Example

```typescript
// ❌ BAD - Business logic in page, hard-coded content
export default function ProjectsPage() {
  const [projects, setProjects] = useState([])
  
  useEffect(() => {
    fetch('https://api.example.com/projects')
      .then(r => r.json())
      .then(setProjects)
  }, [])
  
  return (
    <div>
      <h1>Our Projects</h1> {/* ❌ Hard-coded */}
      {projects.map(p => <div>{p.title}</div>)}
    </div>
  )
}
```

## Component Composition Patterns

### Pattern 1: Configuration-Driven Rendering

```typescript
// ✅ GOOD - Configurable, not duplicated
const FEATURES = [
  { icon: "🚀", title: "Fast", description: "Lightning fast" },
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

### Pattern 2: Props-Based Content

```typescript
// ✅ GOOD - Content via props
interface FeatureCardProps {
  icon: string
  title: string
  description: string
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Body>{description}</Body>
      </CardContent>
    </Card>
  )
}
```

## Component Splitting Rules

**If a component grows too big or has multiple responsibilities → SPLIT it**

### Signs to Split

- File > 200 lines
- Component does more than one thing
- Multiple levels of nested conditionals
- Hard to name the component concisely

### How to Split

1. **Extract subcomponents** - Break into smaller pieces
2. **Extract hooks** - Move logic to `useSomething` hooks
3. **Extract utilities** - Move pure functions to `lib/utils/`
4. **Split into multiple files** - One component per file

### Example: Splitting a Large Component

```typescript
// ❌ BAD - 150+ lines, multiple responsibilities
export function ProjectsPage() {
  // 30 lines of filter logic
  // 30 lines of fetch logic
  // 90 lines of JSX
}

// ✅ GOOD - Extracted logic
function useProjectFilters(projects: Project[]) {
  const [filters, setFilters] = useState<Filters>({})
  const filtered = useMemo(() => 
    applyFilters(projects, filters), 
    [projects, filters]
  )
  return { filtered, filters, setFilters }
}

export function ProjectsPage() {
  const { data: projects } = useProjects()
  const { filtered, filters, setFilters } = useProjectFilters(projects)
  
  return (
    <>
      <FilterBar filters={filters} onChange={setFilters} />
      <ProjectsGrid projects={filtered} />
    </>
  )
}
```

## Component Props Patterns

### Explicit Props with Defaults

```typescript
// ✅ GOOD
interface ButtonProps {
  variant?: "primary" | "ghost" | "underline"
  size?: "sm" | "md" | "lg"
  children: React.ReactNode
  onClick?: () => void
}

export function Button({ 
  variant = "primary", 
  size = "md", 
  children,
  onClick 
}: ButtonProps) {
  return <button onClick={onClick}>{children}</button>
}
```

### Forward Refs for Composable Components

```typescript
// ✅ GOOD - Forward refs for flexibility
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }, ref) => {
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

## Red Flags

❌ Business logic in UI components  
❌ Data fetching in atoms or blocks  
❌ Hard-coded content in reusable components  
❌ Components over 200 lines  
❌ Multiple responsibilities in one component  
❌ Inline complex logic in JSX  
❌ Missing prop types  
❌ No default values for optional props

