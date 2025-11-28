# 📁 Project Structure

Complete overview of the folder structure and file organization.

## 🌳 Directory Tree

```
growthbae_web/
│
├── 📄 Configuration Files
│   ├── package.json              # Dependencies and scripts
│   ├── tsconfig.json             # TypeScript configuration
│   ├── next.config.js            # Next.js configuration
│   ├── tailwind.config.ts        # Tailwind CSS configuration
│   ├── postcss.config.js         # PostCSS configuration
│   ├── components.json           # ShadCN UI configuration
│   ├── .eslintrc.json           # ESLint rules
│   ├── .prettierrc              # Prettier formatting rules
│   └── .gitignore               # Git ignore patterns
│
├── 📚 Documentation
│   ├── README.md                # Project overview
│   ├── SETUP.md                 # Setup instructions
│   ├── CONTRIBUTING.md          # Contribution guidelines
│   └── PROJECT_STRUCTURE.md     # This file
│
├── 🎨 Public Assets
│   └── public/
│       └── README.md            # Static assets guide
│       └── (images, icons, fonts will go here)
│
├── 💻 Source Code
│   └── src/
│       │
│       ├── 📱 app/              # Next.js App Router
│       │   ├── layout.tsx      # Root layout with metadata
│       │   ├── page.tsx        # Home page
│       │   └── README.md       # App Router guide
│       │
│       ├── 🧩 components/       # React Components
│       │   ├── ui/             # ShadCN UI components
│       │   │   └── README.md   # UI components guide
│       │   ├── layout/         # Layout components
│       │   │   ├── header.tsx  # Site header/navigation
│       │   │   └── footer.tsx  # Site footer
│       │   ├── sections/       # Page sections
│       │   │   ├── hero-section.tsx
│       │   │   ├── features-section.tsx
│       │   │   └── cta-section.tsx
│       │   └── README.md       # Components guide
│       │
│       ├── 🎨 styles/           # Global Styles
│       │   ├── globals.css     # Global CSS + design tokens
│       │   └── README.md       # Styling guide
│       │
│       ├── 🔧 lib/              # Utilities & Helpers
│       │   ├── utils.ts        # Common utilities (cn, etc.)
│       │   └── README.md       # Utilities guide
│       │
│       ├── 🪝 hooks/            # Custom React Hooks
│       │   └── README.md       # Hooks guide
│       │
│       ├── 📝 types/            # TypeScript Types
│       │   ├── index.ts        # Global type definitions
│       │   └── README.md       # Types guide
│       │
│       └── ⚙️ config/           # App Configuration
│           ├── site.ts         # Site metadata & config
│           └── README.md       # Configuration guide
│
└── 🔒 Environment Variables
    └── .env.example            # Example environment variables
```

## 📂 Directory Purposes

### `/src/app`

**Purpose:** Next.js 14 App Router pages and layouts  
**Contains:** Route pages, layouts, loading states, error boundaries  
**Pattern:** File-based routing (`app/about/page.tsx` → `/about`)

### `/src/components`

**Purpose:** Reusable React components  
**Subdirectories:**

- `ui/` - ShadCN UI primitives (Button, Card, Dialog, etc.)
- `layout/` - Structural components (Header, Footer, Sidebar)
- `sections/` - Page sections (Hero, Features, CTA)

### `/src/styles`

**Purpose:** Global CSS and design tokens  
**Contains:** Tailwind directives, CSS variables, custom utilities

### `/src/lib`

**Purpose:** Utility functions and helpers  
**Contains:** Pure functions, API clients, validators, formatters

### `/src/hooks`

**Purpose:** Custom React hooks  
**Contains:** Reusable stateful logic (useMediaQuery, useLocalStorage)

### `/src/types`

**Purpose:** TypeScript type definitions  
**Contains:** Interfaces, types, and type utilities

### `/src/config`

**Purpose:** Application configuration  
**Contains:** Site metadata, navigation, feature flags, constants

### `/public`

**Purpose:** Static assets  
**Contains:** Images, fonts, icons, favicon, manifest

## 🎯 Import Patterns

### Absolute Imports (Preferred)

```typescript
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/config/site"
import type { User } from "@/types"
```

### Relative Imports (Avoid)

```typescript
// ❌ Bad
import { Button } from "../../../components/ui/button"

// ✅ Good
import { Button } from "@/components/ui/button"
```

## 🏗️ Scalability Considerations

### Adding New Features

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

## 📊 File Naming Conventions

| Type       | Convention     | Example              |
| ---------- | -------------- | -------------------- |
| Components | kebab-case.tsx | `hero-section.tsx`   |
| Pages      | page.tsx       | `app/about/page.tsx` |
| Layouts    | layout.tsx     | `app/layout.tsx`     |
| Types      | kebab-case.ts  | `user-types.ts`      |
| Utils      | kebab-case.ts  | `format-date.ts`     |
| Config     | kebab-case.ts  | `site-config.ts`     |
| Hooks      | use-\*.ts      | `use-media-query.ts` |

## 🔍 Finding Files Quickly

- **Components:** `src/components/[ui|layout|sections]/`
- **Pages:** `src/app/*/page.tsx`
- **Types:** `src/types/`
- **Utilities:** `src/lib/`
- **Styles:** `src/styles/globals.css`
- **Config:** `src/config/`

## 🚀 Next Steps

1. **Add features** to `src/app/`
2. **Create components** in `src/components/`
3. **Define types** in `src/types/`
4. **Add utilities** to `src/lib/`
5. **Install UI components** via ShadCN CLI
6. **Customize tokens** in `src/styles/globals.css`

## 📚 Related Documentation

- [README.md](./README.md) - Project overview
- [SETUP.md](./SETUP.md) - Getting started
- [CONTRIBUTING.md](./CONTRIBUTING.md) - How to contribute
- Individual README files in each directory for detailed guides
