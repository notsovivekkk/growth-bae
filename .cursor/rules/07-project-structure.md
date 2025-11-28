# Project Structure

**File organization, directory purposes, and import patterns for the GBAE codebase.**

## Directory Structure

```
src/
├── app/                    # Next.js App Router (Server Components)
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   └── [...routes]        # Other pages
│
├── components/
│   ├── ui/                # ⚛️ ATOMS - Pure presentation
│   │   ├── typography.tsx # H1-H6, Body, etc.
│   │   ├── button.tsx     # Button variants
│   │   ├── input.tsx      # Form input
│   │   ├── card.tsx       # Card components
│   │   ├── container.tsx  # Container wrapper
│   │   ├── section.tsx    # Section wrapper
│   │   └── index.ts       # Barrel exports
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
│       ├── features-section.tsx
│       └── cta-section.tsx
│
├── lib/
│   ├── api/               # 🌐 API clients
│   │   └── projects.ts
│   ├── hooks/             # 🪝 Custom React hooks
│   │   └── use-projects.ts
│   ├── design/            # 🎨 Design tokens
│   │   └── tokens.ts
│   └── utils/             # 🔧 Utilities
│       └── utils.ts        # cn() and helpers
│
├── types/                 # 📝 TypeScript types
│   └── index.ts
│
├── config/                # ⚙️ App Configuration
│   └── site.ts            # Site metadata & config
│
└── styles/                # 🎨 Global Styles
    └── globals.css        # Global CSS + design tokens
```

## Directory Purposes

### `/src/app`

**Purpose:** Next.js 14 App Router pages and layouts  
**Contains:** Route pages, layouts, loading states, error boundaries  
**Pattern:** File-based routing (`app/about/page.tsx` → `/about`)

**Rules:**
- Server components by default
- Fetch data in page components
- Pass data to sections/blocks via props
- Keep pages thin - just composition

### `/src/components`

**Purpose:** Reusable React components

**Subdirectories:**

- `ui/` - Atomic, presentational components (Button, Card, Typography)
- `blocks/` - Composed reusable sections (Navbar)
- `layout/` - Structural components (Header, Footer)
- `sections/` - Page-specific sections (Hero, Features, CTA)

**Rules:**
- No business logic in UI components
- No data fetching in components
- Accept all data via props
- One component per file

### `/src/lib`

**Purpose:** Utility functions, helpers, and shared logic

**Subdirectories:**

- `api/` - API clients and data fetching
- `hooks/` - Custom React hooks
- `design/` - Design tokens and theme config
- `utils/` - Pure utility helpers

**Rules:**
- Pure functions when possible
- One file per domain (e.g., `lib/api/projects.ts`)
- Export named functions
- Add JSDoc comments for complex functions

### `/src/types`

**Purpose:** TypeScript type definitions  
**Contains:** Interfaces, types, and type utilities

**Rules:**
- Export reusable types
- One file per domain or `index.ts` for shared types
- Use `interface` for objects, `type` for unions

### `/src/config`

**Purpose:** Application configuration  
**Contains:** Site metadata, navigation, feature flags, constants

### `/src/styles`

**Purpose:** Global CSS and design tokens  
**Contains:** Tailwind directives, CSS variables, custom utilities

### `/public`

**Purpose:** Static assets  
**Contains:** Images, fonts, icons, favicon, manifest

## Import Patterns

### Absolute Imports (Preferred)

**Always use absolute imports with `@/` alias:**

```typescript
// ✅ GOOD - Absolute imports
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/config/site"
import type { User } from "@/types"
import { colors } from "@/lib/design/tokens"
```

### Relative Imports (Avoid)

```typescript
// ❌ BAD - Relative imports
import { Button } from "../../../components/ui/button"
import { cn } from "../../lib/utils"

// ✅ GOOD - Absolute imports
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
```

### Import Order

```typescript
// 1. External dependencies
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

// 2. Internal absolute imports
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { Project } from "@/types"

// 3. Relative imports (if necessary)
import { localHelper } from "./helpers"
```

## File Naming Conventions

| Type       | Convention     | Example              |
| ---------- | -------------- | -------------------- |
| Components | kebab-case.tsx | `hero-section.tsx`   |
| Pages      | page.tsx        | `app/about/page.tsx` |
| Layouts    | layout.tsx     | `app/layout.tsx`     |
| Types      | kebab-case.ts  | `user-types.ts`      |
| Utils      | kebab-case.ts  | `format-date.ts`     |
| Config     | kebab-case.ts  | `site-config.ts`     |
| Hooks      | use-*.ts       | `use-media-query.ts` |
| API        | kebab-case.ts  | `case-studies.ts`    |

## File Organization Rules

### One File = One Concern

```typescript
// ✅ GOOD - One component per file
// components/ui/button.tsx
export function Button() { }

// ❌ BAD - Multiple components in one file
// components/ui/buttons.tsx
export function Button() { }
export function IconButton() { }
export function LinkButton() { }
```

### Colocate Related Code

```typescript
// ✅ GOOD - Related API calls together
// lib/api/projects.ts
export async function fetchProjects() { }
export async function createProject() { }
export async function updateProject() { }

// ❌ BAD - Scattered across files
// lib/api/projects-fetch.ts
// lib/api/projects-create.ts
// lib/api/projects-update.ts
```

## Barrel Exports

### Use Index Files for Clean Imports

```typescript
// ✅ GOOD - Barrel export
// components/ui/index.ts
export { Button } from "./button"
export { Card } from "./card"
export { H1, H2, Body } from "./typography"

// Usage
import { Button, Card, H1 } from "@/components/ui"
```

## Organization Rules

1. **No business logic inside UI components**
2. **No network calls directly in components** (except server components)
3. **Keep cross-cutting concerns** (API, state, design, utils) in `lib/` or `types/`
4. **One file = one concern**
5. **Colocate related code** (e.g., all user-related API calls in `lib/api/users.ts`)

## Scalability Considerations

### Adding New Features

As the project grows, consider feature-based organization:

```
src/
└── features/              # Feature-based organization (optional)
    ├── auth/
    │   ├── components/
    │   ├── hooks/
    │   ├── types/
    │   └── utils/
    └── dashboard/
        ├── components/
        ├── hooks/
        └── types/
```

### Multiple Pages

Use Next.js route groups for organization:

```
app/
├── (marketing)/          # Route group
│   ├── layout.tsx       # Marketing layout
│   ├── page.tsx         # Home
│   ├── about/
│   └── pricing/
└── (app)/               # Route group
    ├── layout.tsx       # App layout
    ├── dashboard/
    └── settings/
```

## Finding Files Quickly

- **Components:** `src/components/[ui|layout|sections]/`
- **Pages:** `src/app/*/page.tsx`
- **Types:** `src/types/`
- **Utilities:** `src/lib/`
- **Styles:** `src/styles/globals.css`
- **Config:** `src/config/`
- **API:** `src/lib/api/`
- **Hooks:** `src/lib/hooks/`

## Red Flags

❌ Relative imports with `../../../`  
❌ Business logic in UI components  
❌ API calls in component files  
❌ Multiple concerns in one file  
❌ Scattered related code  
❌ Inconsistent naming conventions  
❌ No barrel exports for common imports

