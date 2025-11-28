# Cursor Rules for GBAE

**Comprehensive coding standards, design system rules, and project context for the GBAE codebase.**

This directory contains organized rule files that guide AI assistants and developers working on the GBAE project. Each file focuses on a specific aspect of the codebase standards.

## Rule Files Overview

### 00-project-context.md
**GBAE brand, positioning, tone, and target users**

- Brand identity and positioning
- Voice & copy rules
- Visual identity (colors, fonts, aesthetic)
- Core value proposition
- Target users and deliverables
- Tech stack and import aliases

**When to reference:** Writing copy, understanding brand tone, making design decisions

---

### 01-general-philosophy.md
**Core principles and extensibility mindset**

- "Boring, predictable code" philosophy
- Single Responsibility Principle
- Easy to delete or extend
- Future-proof design
- The "3 Times Rule"
- File & function size limits
- Organization rules

**When to reference:** Making architectural decisions, refactoring, understanding project philosophy

---

### 02-typescript-standards.md
**TypeScript strictness and type rules**

- Strict mode requirements
- Type definition rules
- Never use `any`
- Explicit function types
- Props typing
- Type safety patterns
- File organization for types

**When to reference:** Writing TypeScript code, defining types, ensuring type safety

---

### 03-react-nextjs-rules.md
**Server Components, hooks, and React patterns**

- Server Components by default
- When to use `"use client"`
- Logic extraction patterns
- JSX rules
- Props guidelines
- Next.js App Router patterns
- Component patterns
- Performance patterns

**When to reference:** Writing React components, deciding server vs client, component architecture

---

### 04-component-architecture.md
**Atoms, blocks, sections patterns**

- Component hierarchy (Atoms → Molecules → Sections → Pages)
- Rules for each component level
- Component composition patterns
- Splitting rules
- Props patterns
- Forward refs

**When to reference:** Creating new components, deciding component structure, refactoring components

---

### 05-design-system.md
**GBAE colors, typography, spacing, and tokens**

- Color system and semantic tokens
- Typography components and scale
- Spacing system (8px grid)
- Container and Section components
- Motion system
- Component usage patterns
- Design principles

**When to reference:** Styling components, using design tokens, understanding spacing

---

### 06-styling-rules.md
**Tailwind usage, 8px grid, and design token rules**

- Tailwind + design tokens only
- 8px grid system
- No arbitrary values
- Color usage with tokens
- Typography styling
- Layout utilities
- Responsive design
- Class merging with `cn()`

**When to reference:** Writing CSS/Tailwind classes, ensuring design consistency

---

### 07-project-structure.md
**File organization and import patterns**

- Directory structure and purposes
- Import patterns (absolute vs relative)
- File naming conventions
- File organization rules
- Barrel exports
- Scalability considerations

**When to reference:** Creating new files, organizing code, understanding project structure

---

### 08-api-data-layer.md
**API clients and data fetching patterns**

- API file organization
- API function guidelines
- Server-side vs client-side fetching
- Error handling patterns
- No API calls in UI components
- API client patterns

**When to reference:** Creating API functions, fetching data, handling errors

---

### 09-state-management.md
**Loading, error, and empty state patterns**

- Every async view must have loading/error/empty states
- Loading state patterns
- Error state patterns
- Empty state patterns
- Custom hooks with states
- Server component states
- State management patterns

**When to reference:** Handling async operations, creating user-friendly UIs

---

### 10-naming-conventions.md
**File, function, and component naming rules**

- File naming (kebab-case)
- Component naming (PascalCase)
- Function naming (camelCase)
- Variable naming
- Constant naming (UPPER_SNAKE_CASE)
- Type and interface naming
- Avoid abbreviations

**When to reference:** Naming new files, functions, components, variables

---

### 11-tooling-quality.md
**ESLint, Prettier, and code quality rules**

- ESLint configuration and rules
- Prettier configuration
- Code quality standards
- TypeScript quality
- Code formatting
- Pre-commit checklist
- Quality red flags

**When to reference:** Ensuring code quality, running linters, formatting code

---

### 12-extensibility-patterns.md
**Future-proofing and configuration patterns**

- Design for tomorrow
- The "3 Times Rule"
- Prefer configuration over duplication
- Extensibility patterns
- Future-proofing strategies
- Refactoring for extensibility

**When to reference:** Making code extensible, refactoring, avoiding duplication

## How to Use These Rules

### For AI Assistants

These rules are designed to be read by AI coding assistants (like Cursor) to understand:
- Project context and brand
- Coding standards and patterns
- Design system usage
- File organization
- Quality requirements

### For Developers

Use these rules as:
- **Reference guide** when writing code
- **Checklist** before submitting PRs
- **Onboarding material** for new team members
- **Decision guide** for architectural choices

## Quick Reference by Task

### Creating a New Component
1. Read `04-component-architecture.md` - Understand component hierarchy
2. Read `05-design-system.md` - Use design tokens
3. Read `06-styling-rules.md` - Follow Tailwind rules
4. Read `10-naming-conventions.md` - Name files correctly
5. Read `02-typescript-standards.md` - Type everything properly

### Writing API Functions
1. Read `08-api-data-layer.md` - API patterns and error handling
2. Read `09-state-management.md` - Handle loading/error/empty states
3. Read `02-typescript-standards.md` - Type function signatures
4. Read `07-project-structure.md` - File organization

### Styling Components
1. Read `05-design-system.md` - Design tokens and components
2. Read `06-styling-rules.md` - Tailwind and 8px grid
3. Read `00-project-context.md` - Brand aesthetic

### Making Architectural Decisions
1. Read `01-general-philosophy.md` - Core principles
2. Read `12-extensibility-patterns.md` - Future-proofing
3. Read `04-component-architecture.md` - Component patterns
4. Read `07-project-structure.md` - File organization

## Key Principles Summary

1. **Write minimal, boring, predictable code** - Clarity over cleverness
2. **Use design tokens only** - Never raw hex values or arbitrary spacing
3. **Follow 8px grid** - All spacing multiples of 8px
4. **Server Components by default** - Use `"use client"` only when needed
5. **No business logic in UI** - Extract to hooks, utils, or API layer
6. **Handle all states** - Loading, error, empty for async operations
7. **Type everything** - No `any`, explicit types
8. **Extract repeated code** - 3+ times = extract
9. **Props over hard-coding** - Accept content via props
10. **One file = one concern** - Split when > 200 lines

## Related Documentation

- `.cursorrules` - Original engineering rules (now organized here)
- `ENGINEERING_GUIDE.md` - Engineering patterns overview
- `GBAE_DESIGN_SYSTEM.md` - Complete design system documentation
- `PROJECT_STRUCTURE.md` - Project structure details
- `COMPONENT_LIBRARY.md` - Component reference
- `src/lib/design/tokens.ts` - Design tokens source

## Contributing

When adding or updating rules:
1. Keep each file focused on one topic
2. Include ✅ DO and ❌ DON'T examples
3. Reference specific file paths when relevant
4. Include code examples from the codebase
5. Be concise but comprehensive
6. Follow the existing documentation style

---

**Remember: Boring, predictable code that's easy to delete is better than clever code that's hard to change.**

