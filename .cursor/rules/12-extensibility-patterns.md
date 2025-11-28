# Extensibility Patterns

**Future-proofing, configuration patterns, and the 3x rule for the GBAE codebase.**

## Design for Tomorrow

When implementing a feature, structure as if we might:
- Add one more variant
- Add one more data source
- Add one more page using the same block

## The "3 Times Rule"

**If you copy-paste similar code 3 times, stop and extract it into:**
- A reusable component
- A utility function
- A configuration object

### Example: Extracting Repeated Code

```typescript
// ❌ BAD - Duplicated 3+ times
return (
  <>
    <FeatureCard icon="🚀" title="Fast" description="Lightning fast performance" />
    <FeatureCard icon="🔒" title="Secure" description="Bank-level security" />
    <FeatureCard icon="📈" title="Scalable" description="Grows with you" />
  </>
)

// ✅ GOOD - Configuration-driven
const FEATURES = [
  { icon: "🚀", title: "Fast", description: "Lightning fast performance" },
  { icon: "🔒", title: "Secure", description: "Bank-level security" },
  { icon: "📈", title: "Scalable", description: "Grows with you" },
]

return FEATURES.map(feature => (
  <FeatureCard key={feature.title} {...feature} />
))
```

## Prefer Configuration Over Duplication

### Pattern 1: Configuration Objects

```typescript
// ✅ GOOD - Configurable, extensible
const FEATURE_CONFIG = [
  { icon: "🚀", title: "Fast", description: "..." },
  { icon: "🔒", title: "Secure", description: "..." },
  { icon: "📈", title: "Scalable", description: "..." },
]

export function FeaturesSection() {
  return (
    <Section>
      <Container>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURE_CONFIG.map(feature => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </Container>
    </Section>
  )
}

// ❌ BAD - Duplicated JSX
export function FeaturesSection() {
  return (
    <Section>
      <Container>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard icon="🚀" title="Fast" description="..." />
          <FeatureCard icon="🔒" title="Secure" description="..." />
          <FeatureCard icon="📈" title="Scalable" description="..." />
        </div>
      </Container>
    </Section>
  )
}
```

### Pattern 2: Props and Mapping

```typescript
// ✅ GOOD - Accept data via props, use mapping
interface FeaturesSectionProps {
  features: Array<{
    icon: string
    title: string
    description: string
  }>
}

export function FeaturesSection({ features }: FeaturesSectionProps) {
  return (
    <Section>
      <Container>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(feature => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
```

## Extensibility Patterns

### 1. Variant-Based Components

```typescript
// ✅ GOOD - Easy to add new variants
interface ButtonProps {
  variant?: "primary" | "ghost" | "underline" | "outline" // Easy to extend
  size?: "sm" | "md" | "lg"
  children: React.ReactNode
}

const buttonVariants = {
  primary: "bg-accent text-white",
  ghost: "bg-transparent hover:bg-accent/10",
  underline: "underline underline-offset-4",
  outline: "border border-primary",
}

export function Button({ variant = "primary", size, children }: ButtonProps) {
  return (
    <button className={cn(buttonVariants[variant], sizeVariants[size])}>
      {children}
    </button>
  )
}
```

### 2. Composable Components

```typescript
// ✅ GOOD - Composable, extensible
export function Card({ children, className }: CardProps) {
  return <div className={cn("rounded-lg shadow-md", className)}>{children}</div>
}

export function CardHeader({ children }: CardHeaderProps) {
  return <div className="p-6 border-b">{children}</div>
}

export function CardContent({ children }: CardContentProps) {
  return <div className="p-6">{children}</div>
}

// Usage - flexible composition
<Card>
  <CardHeader>Title</CardHeader>
  <CardContent>Content</CardContent>
</Card>
```

### 3. Custom Hooks for Logic

```typescript
// ✅ GOOD - Extract complex logic to hooks
export function useProjectFilters(projects: Project[]) {
  const [filters, setFilters] = useState<Filters>({})
  const [sortBy, setSortBy] = useState<SortOption>("date")
  
  const filtered = useMemo(() => {
    let result = applyFilters(projects, filters)
    result = applySorting(result, sortBy)
    return result
  }, [projects, filters, sortBy])
  
  return { filtered, filters, setFilters, sortBy, setSortBy }
}

// Easy to extend with new filter types or sort options
```

### 4. API Client Abstraction

```typescript
// ✅ GOOD - Abstract API client, easy to extend
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

// Easy to add new endpoints
export async function fetchProjects(): Promise<Project[]> {
  return apiClient<Project[]>('/projects')
}

export async function fetchCaseStudies(): Promise<CaseStudy[]> {
  return apiClient<CaseStudy[]>('/case-studies')
}
```

## Future-Proofing Strategies

### 1. Accept Props, Not Hard-Code

```typescript
// ✅ GOOD - Accept content via props
interface HeroSectionProps {
  tagText?: string
  headline?: string | string[]
  subtext?: string
  primaryCtaText?: string
  primaryCtaHref?: string
}

export function HeroSection({
  tagText = "Founder Build Studio",
  headline = ["Build MVPs", "that scale"],
  subtext = "Description",
  primaryCtaText = "Start your project",
  primaryCtaHref = "#",
}: HeroSectionProps) {
  // Implementation
}

// ❌ BAD - Hard-coded content
export function HeroSection() {
  return (
    <Section>
      <H1>Build MVPs that scale</H1> {/* ❌ Hard-coded */}
    </Section>
  )
}
```

### 2. Use Type Unions for Extensibility

```typescript
// ✅ GOOD - Easy to add new variants
type ButtonVariant = "primary" | "ghost" | "underline" | "outline"
type ProjectStatus = "draft" | "published" | "archived" | "scheduled"

// Adding new variant is just adding to union type
```

### 3. Separate Configuration from Logic

```typescript
// ✅ GOOD - Configuration separate from component
const FEATURE_CONFIG = [
  { icon: "🚀", title: "Fast", description: "..." },
  { icon: "🔒", title: "Secure", description: "..." },
]

export function FeaturesSection() {
  return (
    <Section>
      {FEATURE_CONFIG.map(feature => (
        <FeatureCard key={feature.title} {...feature} />
      ))}
    </Section>
  )
}

// Easy to modify config without touching component logic
```

## Refactoring for Extensibility

### When to Refactor

Refactor when you see:
- Same code pattern repeated 3+ times
- Hard to add a new variant or option
- Configuration mixed with logic
- Components doing multiple things

### How to Refactor

1. **Extract repeated code** into reusable component/function
2. **Separate configuration** from logic
3. **Use props** instead of hard-coding
4. **Create abstractions** for common patterns
5. **Extract hooks** for complex logic

### Example Refactoring

```typescript
// ❌ BEFORE - Hard to extend
export function ProjectsPage() {
  const [projects, setProjects] = useState([])
  const [filters, setFilters] = useState({})
  const [sortBy, setSortBy] = useState("date")
  
  useEffect(() => {
    fetchProjects().then(setProjects)
  }, [])
  
  const filtered = projects.filter(p => {
    if (filters.status && p.status !== filters.status) return false
    if (filters.category && p.category !== filters.category) return false
    return true
  })
  
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "date") return b.date - a.date
    if (sortBy === "name") return a.name.localeCompare(b.name)
    return 0
  })
  
  // 100+ lines of JSX
}

// ✅ AFTER - Extensible, separated concerns
export function ProjectsPage() {
  const { data: projects, isLoading, error } = useProjects()
  const { filtered, filters, setFilters, sortBy, setSortBy } = useProjectFilters(projects)
  
  if (isLoading) return <ProjectsSkeleton />
  if (error) return <ErrorState />
  
  return (
    <>
      <FilterBar filters={filters} onChange={setFilters} />
      <SortBar sortBy={sortBy} onChange={setSortBy} />
      <ProjectsGrid projects={filtered} />
    </>
  )
}
```

## Red Flags

❌ Copy-pasting code 3+ times  
❌ Hard-coded content in reusable components  
❌ Configuration mixed with component logic  
❌ Difficult to add new variants or options  
❌ Components doing multiple things  
❌ No abstraction for common patterns  
❌ Logic that's hard to test or modify

## Before Submitting Code

- [ ] Repeated code extracted (3+ times rule)?
- [ ] Configuration separate from logic?
- [ ] Easy to add new variants/options?
- [ ] Props instead of hard-coding?
- [ ] Abstractions for common patterns?
- [ ] Logic extracted to hooks/utils?
- [ ] Components focused on one thing?

