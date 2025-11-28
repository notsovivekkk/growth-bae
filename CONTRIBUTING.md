# Contributing Guide

Thank you for considering contributing to this project! This guide will help you get started.

## 🚀 Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/growthbae-web.git`
3. Install dependencies: `npm install`
4. Create a branch: `git checkout -b feature/your-feature-name`
5. Make your changes
6. Test your changes: `npm run dev`
7. Commit and push: `git commit -m "Add feature" && git push`
8. Open a Pull Request

## 📋 Development Workflow

### Branch Naming

Use descriptive branch names:

- `feature/add-user-auth` - New features
- `fix/header-responsive` - Bug fixes
- `docs/update-readme` - Documentation
- `refactor/api-client` - Code refactoring

### Commit Messages

Follow the conventional commits format:

- `feat: add user authentication`
- `fix: resolve header alignment issue`
- `docs: update setup guide`
- `style: format code with prettier`
- `refactor: simplify api client`
- `test: add user service tests`

## 🎨 Code Style

### TypeScript

- Use TypeScript for all files
- Define types for all props and functions
- Avoid `any` - use proper types
- Use interfaces for objects
- Use types for unions

### React Components

```typescript
// ✅ Good
interface ButtonProps {
  variant?: "default" | "outline"
  children: React.ReactNode
}

export function Button({ variant = "default", children }: ButtonProps) {
  return <button>{children}</button>
}

// ❌ Bad
export function Button(props: any) {
  return <button>{props.children}</button>
}
```

### Naming Conventions

- **Components:** PascalCase (`UserProfile.tsx`)
- **Files:** kebab-case (`user-profile.tsx`)
- **Functions:** camelCase (`getUserById`)
- **Constants:** UPPER_SNAKE_CASE (`MAX_FILE_SIZE`)
- **Types/Interfaces:** PascalCase (`UserProfile`)

### File Organization

```typescript
// 1. Imports
import React from "react"
import { cn } from "@/lib/utils"

// 2. Types
interface Props {
  title: string
}

// 3. Constants
const DEFAULT_TITLE = "Welcome"

// 4. Component
export function Component({ title }: Props) {
  return <div>{title}</div>
}
```

## 🧪 Testing

Before submitting a PR:

1. Test on multiple screen sizes (mobile, tablet, desktop)
2. Run the linter: `npm run lint`
3. Format your code: `npm run format`
4. Build the project: `npm run build`

## 📝 Documentation

- Add JSDoc comments for complex functions
- Update README.md if you add new features
- Add comments for non-obvious code
- Update type definitions

## 🔍 Code Review Process

Your PR will be reviewed for:

- Code quality and style
- TypeScript types
- Mobile responsiveness
- Performance implications
- Documentation

## ⚠️ Common Mistakes to Avoid

1. ❌ Committing `.env.local` or secrets
2. ❌ Using `any` type
3. ❌ Not testing on mobile
4. ❌ Forgetting to run linter
5. ❌ Large commits without description
6. ❌ Breaking existing functionality
7. ❌ Not following naming conventions

## 🎯 Pull Request Checklist

Before submitting:

- [ ] Code follows style guidelines
- [ ] All types are properly defined
- [ ] Components are responsive
- [ ] Linter passes without errors
- [ ] Code is formatted with Prettier
- [ ] Branch is up to date with main
- [ ] PR description is clear
- [ ] Screenshots included (if UI changes)

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)

## 🤝 Need Help?

- Open an issue for bugs
- Start a discussion for questions
- Join our community chat

Thank you for contributing! 🎉
