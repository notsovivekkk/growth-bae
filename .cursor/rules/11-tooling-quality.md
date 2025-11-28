# Tooling & Quality

**ESLint, Prettier, and code quality rules for the GBAE codebase.**

## ESLint Configuration

### Configuration File

ESLint is configured in `.eslintrc.json` with the following setup:

```json
{
  "extends": [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier"
  ],
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint", "prettier"],
  "rules": {
    "prettier/prettier": "warn",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_"
      }
    ],
    "@typescript-eslint/no-explicit-any": "warn",
    "react/no-unescaped-entities": "off"
  }
}
```

### Key ESLint Rules

1. **No Unused Variables** - Warn on unused vars
   - Prefix with `_` to ignore: `const _unused = value`
   - Applies to function args and variables

2. **No Explicit Any** - Warn on `any` usage
   - Use proper types instead
   - Add comment if `any` is necessary

3. **Prettier Integration** - ESLint runs Prettier
   - Formatting issues show as warnings

### Running ESLint

```bash
# Check for linting errors
npm run lint

# Auto-fix where possible
npm run lint -- --fix
```

## Prettier Configuration

### Configuration File

Prettier is configured in `.prettierrc`:

```json
{
  "semi": false,
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 80,
  "arrowParens": "always",
  "endOfLine": "lf",
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

### Prettier Rules

- **No semicolons** - `semi: false`
- **Double quotes** - `singleQuote: false`
- **2 space indentation** - `tabWidth: 2`
- **Trailing commas** - `trailingComma: "es5"`
- **80 character line width** - `printWidth: 80`
- **Always arrow parens** - `arrowParens: "always"`
- **LF line endings** - `endOfLine: "lf"`
- **Tailwind plugin** - Auto-sorts Tailwind classes

### Running Prettier

```bash
# Format all files
npm run format

# Format specific files
npx prettier --write "src/**/*.{ts,tsx}"
```

## Code Quality Standards

### 1. Enforce ESLint + Prettier

- No unused imports
- No unreachable code
- Consistent formatting
- Run before committing

### 2. Prefer Named Exports

```typescript
// ✅ GOOD - Named exports
export function Button() { }
export function Card() { }
export const H1 = forwardRef(...)

// ⚠️ Use sparingly - Default exports
export default function HomePage() { } // Only for pages
```

### 3. Use Meaningful Names

```typescript
// ✅ GOOD - Clear, descriptive
export function ProjectCard() { }
export function SectionWrapper() { }
export async function fetchProjects() { }

// ❌ BAD - Abbreviated or vague
export function PC() { }
export function Wrap() { }
export function getProj() { }
```

### 4. Avoid Abbreviations

```typescript
// ✅ OK - Standard abbreviations
const id = "123"
const url = "https://example.com"
const api = "https://api.example.com"
const ui = "components"

// ❌ Avoid - Non-standard abbreviations
const usr = user
const proj = project
const desc = description
const btn = button
```

## TypeScript Quality

### Strict Mode

TypeScript is configured with `strict: true` in `tsconfig.json`:

- Strict null checks
- Strict function types
- Strict property initialization
- No implicit any
- No implicit returns
- No unused locals/parameters

### Type Safety

```typescript
// ✅ GOOD - Proper types
interface ButtonProps {
  variant?: "primary" | "ghost" | "underline"
  children: React.ReactNode
}

export function Button({ variant = "primary", children }: ButtonProps) {
  return <button>{children}</button>
}

// ❌ BAD - Missing types
export function Button(props: any) {
  return <button>{props.children}</button>
}
```

## Code Formatting

### Import Organization

```typescript
// ✅ GOOD - Organized imports
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

### Class Name Merging

```typescript
// ✅ GOOD - Use cn() utility
import { cn } from "@/lib/utils"

<div className={cn(
  "base-classes",
  condition && "conditional-classes",
  className // Allow override
)}>

// ❌ BAD - String concatenation
<div className={"base " + (condition ? "conditional" : "")}>
```

## Pre-commit Checklist

Before committing code:

- [ ] Run `npm run lint` - No ESLint errors
- [ ] Run `npm run format` - Code is formatted
- [ ] Run `npm run build` - Build succeeds
- [ ] No unused imports
- [ ] No unreachable code
- [ ] All types defined (no `any`)
- [ ] Meaningful names used
- [ ] Consistent formatting

## Quality Red Flags

❌ Unused imports or variables  
❌ ESLint warnings or errors  
❌ Unformatted code  
❌ Using `any` type  
❌ Unreachable code  
❌ Inconsistent formatting  
❌ Abbreviations in names  
❌ Missing TypeScript types  
❌ Build fails

## Automated Quality Checks

### Package Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "format": "prettier --write \"**/*.{ts,tsx,md,json}\""
  }
}
```

### Running Quality Checks

```bash
# Development
npm run dev

# Linting
npm run lint

# Formatting
npm run format

# Build check
npm run build
```

## Editor Configuration

### Recommended VS Code Settings

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib",
  "typescript.enablePromptUseWorkspaceTsdk": true
}
```

### Recommended Extensions

- ESLint
- Prettier
- TypeScript and JavaScript Language Features
- Tailwind CSS IntelliSense

## Code Review Checklist

When reviewing code, check for:

- [ ] ESLint passes without errors
- [ ] Prettier formatting is consistent
- [ ] No unused imports or variables
- [ ] TypeScript types are properly defined
- [ ] Meaningful, descriptive names
- [ ] No abbreviations (except standard)
- [ ] Proper error handling
- [ ] Loading/error/empty states handled
- [ ] Design tokens used (no raw values)
- [ ] 8px grid spacing followed

## Red Flags to Avoid

❌ Committing without running linter  
❌ Unformatted code  
❌ ESLint warnings ignored  
❌ Using `any` without justification  
❌ Unused imports or variables  
❌ Inconsistent naming  
❌ Missing TypeScript types  
❌ Build fails in CI

## Before Submitting Code

- [ ] `npm run lint` passes?
- [ ] `npm run format` applied?
- [ ] `npm run build` succeeds?
- [ ] No unused imports?
- [ ] No unreachable code?
- [ ] All types defined?
- [ ] Meaningful names used?
- [ ] Consistent formatting?

