# Naming Conventions

**File, function, and component naming rules for the GBAE codebase.**

## File Naming Conventions

| Type       | Convention     | Example              |
| ---------- | -------------- | -------------------- |
| Components | kebab-case.tsx | `hero-section.tsx`   |
| Pages      | page.tsx        | `app/about/page.tsx` |
| Layouts    | layout.tsx     | `app/layout.tsx`     |
| Types      | kebab-case.ts  | `user-types.ts`      |
| Utils      | kebab-case.ts  | `format-date.ts`     |
| Config     | kebab-case.ts  | `site-config.ts`      |
| Hooks      | use-*.ts       | `use-media-query.ts` |
| API        | kebab-case.ts  | `case-studies.ts`    |

### Component Files

```typescript
// ✅ GOOD - kebab-case
hero-section.tsx
features-section.tsx
project-card.tsx
navbar.tsx

// ❌ BAD - Other conventions
HeroSection.tsx
featuresSection.tsx
project_card.tsx
NavBar.tsx
```

### Utility Files

```typescript
// ✅ GOOD - kebab-case, descriptive
format-date.ts
validate-email.ts
cn-utils.ts
api-client.ts

// ❌ BAD
formatDate.ts
validateEmail.ts
utils.ts
client.ts
```

### Hook Files

```typescript
// ✅ GOOD - use- prefix, kebab-case
use-projects.ts
use-media-query.ts
use-local-storage.ts

// ❌ BAD
useProjects.ts
useMediaQuery.ts
projects-hook.ts
```

## Component Naming

### PascalCase for Components

```typescript
// ✅ GOOD - PascalCase
export function HeroSection() { }
export function ProjectCard() { }
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(...)

// ❌ BAD
export function heroSection() { }
export function project_card() { }
export const button = ...
```

### Descriptive and Specific

```typescript
// ✅ GOOD - Specific, descriptive names
export function ProjectCard() { }
export function UserProfileHeader() { }
export function ContactFormInput() { }

// ❌ BAD - Vague, generic names
export function Card() { } // Too generic if there are multiple card types
export function Header() { } // Too vague
export function Input() { } // OK for atoms, bad for composed components
```

## Function Naming

### camelCase for Functions

```typescript
// ✅ GOOD - camelCase, descriptive
export function fetchProjects() { }
export function formatDate(date: Date) { }
export function validateEmail(email: string) { }
export async function createProject(data: CreateProjectInput) { }

// ❌ BAD
export function FetchProjects() { }
export function format_date() { }
export function validate() { } // Too vague
```

### Verb Prefixes for Actions

```typescript
// ✅ GOOD - Clear action verbs
fetchProjects()
createUser()
updateProject()
deleteItem()
formatDate()
validateEmail()
getUserById()

// ❌ BAD - Unclear or missing verbs
projects() // Should be fetchProjects or getProjects
user() // Should be getUser or createUser
data() // Too vague
```

## Variable Naming

### camelCase for Variables

```typescript
// ✅ GOOD - camelCase, descriptive
const projectList = []
const isLoading = true
const userEmail = "user@example.com"
const formattedDate = formatDate(date)

// ❌ BAD
const project_list = []
const is_loading = true
const UserEmail = "user@example.com"
const data = [] // Too vague
```

### Boolean Prefixes

```typescript
// ✅ GOOD - is, has, should, can prefixes
const isLoading = true
const hasError = false
const shouldShowModal = true
const canEdit = false

// ❌ BAD
const loading = true // Should be isLoading
const error = false // Should be hasError
const showModal = true // Should be shouldShowModal or isModalVisible
```

## Constant Naming

### UPPER_SNAKE_CASE for Constants

```typescript
// ✅ GOOD - UPPER_SNAKE_CASE for constants
const API_BASE_URL = "https://api.example.com"
const MAX_FILE_SIZE = 5 * 1024 * 1024
const DEFAULT_PAGE_SIZE = 20

// ❌ BAD
const apiBaseUrl = "https://api.example.com" // Should be constant
const maxFileSize = 5 * 1024 * 1024
```

### Configuration Objects

```typescript
// ✅ GOOD - camelCase for config objects
const siteConfig = {
  name: "GrowthBae",
  url: "https://growthbae.com",
}

const featureConfig = [
  { title: "Fast", description: "..." },
  { title: "Secure", description: "..." },
]

// ❌ BAD
const SITE_CONFIG = { } // Not a constant, should be camelCase
const config = { } // Too vague
```

## Type and Interface Naming

### PascalCase for Types and Interfaces

```typescript
// ✅ GOOD - PascalCase
interface ButtonProps { }
interface User { }
type Status = "draft" | "published" | "archived"
type ProjectCardProps = ButtonProps & { project: Project }

// ❌ BAD
interface buttonProps { }
interface user { }
type status = "draft" | "published"
```

### Descriptive Type Names

```typescript
// ✅ GOOD - Descriptive, specific
interface ProjectCardProps { }
interface CreateProjectInput { }
interface UpdateUserRequest { }
type ProjectStatus = "draft" | "published" | "archived"

// ❌ BAD - Vague
interface Props { }
interface Data { }
interface Request { }
type Status = string
```

## Avoid Abbreviations

### Use Full Words

```typescript
// ✅ GOOD - Full words
const userId = "123"
const userEmail = "user@example.com"
const projectTitle = "My Project"
const isLoading = true

// ❌ BAD - Abbreviations
const usrId = "123"
const usrEmail = "user@example.com"
const projTitle = "My Project"
const isLd = true
```

### Standard Abbreviations OK

```typescript
// ✅ GOOD - Standard abbreviations are OK
const id = "123"
const url = "https://example.com"
const api = "https://api.example.com"
const ui = "components"
```

## Import Aliases

### Use Absolute Imports with @/

```typescript
// ✅ GOOD - Absolute imports
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { Project } from "@/types"

// ❌ BAD - Relative imports
import { Button } from "../../../components/ui/button"
import { cn } from "../../lib/utils"
```

## Naming Patterns by Context

### API Functions

```typescript
// ✅ GOOD - fetch, get, create, update, delete prefixes
export async function fetchProjects(): Promise<Project[]>
export async function getProjectById(id: string): Promise<Project>
export async function createProject(data: CreateProjectInput): Promise<Project>
export async function updateProject(id: string, data: UpdateProjectInput): Promise<Project>
export async function deleteProject(id: string): Promise<void>
```

### Custom Hooks

```typescript
// ✅ GOOD - use prefix, descriptive
export function useProjects() { }
export function useMediaQuery(query: string) { }
export function useLocalStorage(key: string) { }
export function useProjectFilters(projects: Project[]) { }
```

### Utility Functions

```typescript
// ✅ GOOD - Verb-based, descriptive
export function formatDate(date: Date): string { }
export function validateEmail(email: string): boolean { }
export function cn(...inputs: ClassValue[]): string { }
export function debounce<T>(fn: Function, delay: number) { }
```

## Red Flags

❌ Inconsistent naming conventions  
❌ Abbreviations like `usr`, `proj`, `desc`, `btn`  
❌ Vague names like `data`, `item`, `props`  
❌ Missing prefixes for booleans (`loading` instead of `isLoading`)  
❌ PascalCase for functions or variables  
❌ camelCase for components  
❌ Generic names that don't describe purpose  
❌ Relative imports with `../../../`

## Before Submitting Code

- [ ] Files use kebab-case?
- [ ] Components use PascalCase?
- [ ] Functions use camelCase?
- [ ] Constants use UPPER_SNAKE_CASE?
- [ ] Types use PascalCase?
- [ ] No abbreviations (except standard ones)?
- [ ] Descriptive, specific names?
- [ ] Consistent naming throughout?

