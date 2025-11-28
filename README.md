# GrowthBae Web

A modern, scalable Next.js web application built with TypeScript, TailwindCSS, and the GBAE Design System.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (Strict Mode)
- **Styling:** TailwindCSS + GBAE Design System
- **Code Quality:** ESLint + Prettier
- **Architecture:** Mobile-first, component-driven, feature-oriented

## 📚 Documentation

- **👉 [START HERE](START_HERE_GBAE.md)** - Quick start guide
- **[Engineering Guide](ENGINEERING_GUIDE.md)** - Development standards
- **[GBAE Design System](GBAE_DESIGN_SYSTEM.md)** - Complete design system
- **[Component Library](COMPONENT_LIBRARY.md)** - All components reference
- **[Quick Reference](GBAE_QUICK_REFERENCE.md)** - Fast lookup guide

## 🏗️ Engineering Standards

This project follows strict engineering principles. See **[.cursorrules](.cursorrules)** for complete standards.

### Key Principles

✅ **Write minimal, boring, predictable code**  
✅ **No business logic in UI components**  
✅ **Use design tokens only (no raw colors)**  
✅ **Follow 8px grid spacing**  
✅ **Handle all UX states (loading, error, empty)**  
✅ **Keep files < 200 lines**

See [ENGINEERING_GUIDE.md](ENGINEERING_GUIDE.md) for details.

## 📁 Project Structure

```
growthbae_web/
├── public/              # Static assets (images, fonts, icons)
├── src/
│   ├── app/            # Next.js App Router pages
│   ├── components/     # React components
│   │   ├── ui/        # ShadCN UI components
│   │   ├── layout/    # Layout components (Header, Footer)
│   │   └── sections/  # Page section components
│   ├── lib/           # Utility functions and helpers
│   ├── hooks/         # Custom React hooks
│   ├── types/         # TypeScript type definitions
│   ├── config/        # App configuration
│   └── styles/        # Global styles and CSS
├── .eslintrc.json     # ESLint configuration
├── .prettierrc        # Prettier configuration
├── tailwind.config.ts # Tailwind configuration
├── tsconfig.json      # TypeScript configuration
└── components.json    # ShadCN UI configuration
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Format code
npm run format
```

### Adding ShadCN UI Components

```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
# etc.
```

## 🎨 Design System

Design tokens are defined in `src/styles/globals.css`:

- **Colors:** Primary, secondary, accent, muted, destructive
- **Typography:** Inter font family
- **Spacing:** Mobile-first responsive spacing
- **Radius:** Consistent border radius values

## 📝 Key Features

- ✅ **GBAE Design System** - Premium, minimal aesthetic
- ✅ **Atomic Components** - 11+ reusable UI primitives
- ✅ **Strict TypeScript** - Type-safe with no `any`
- ✅ **8px Grid System** - Consistent spacing
- ✅ **Mobile-first** - Responsive design
- ✅ **Server Components** - Optimized performance
- ✅ **Engineering Standards** - Documented best practices

## 🔧 Development Guidelines

Before coding, read:

1. **[.cursorrules](.cursorrules)** - Engineering standards (REQUIRED)
2. **[ENGINEERING_GUIDE.md](ENGINEERING_GUIDE.md)** - Best practices
3. **[GBAE_DESIGN_SYSTEM.md](GBAE_DESIGN_SYSTEM.md)** - Design rules

### Quick Rules

- ✅ Use design tokens only (`bg-primary`, not `bg-[#004225]`)
- ✅ Follow 8px grid spacing
- ✅ No business logic in UI components
- ✅ Handle loading/error/empty states
- ✅ Server Components by default
- ✅ Keep files < 200 lines

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [ShadCN UI Documentation](https://ui.shadcn.com)
