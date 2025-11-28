# Setup Guide

Step-by-step guide to get your development environment running.

## Prerequisites

Ensure you have the following installed:

- **Node.js** 18.17 or later
- **npm**, **yarn**, or **pnpm** package manager
- **Git** for version control

Check versions:

```bash
node --version  # Should be v18.17 or higher
npm --version   # Should be v9 or higher
```

## Installation Steps

### 1. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

This will install all dependencies defined in `package.json`.

### 2. Set Up Environment Variables

```bash
cp .env.example .env.local
```

Then edit `.env.local` with your actual values.

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Adding ShadCN UI Components

When you need a new UI component:

```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add dialog
```

Components will be added to `src/components/ui/`.

## Code Quality Tools

### Run Linter

```bash
npm run lint
```

### Format Code

```bash
npm run format
```

### Auto-fix Issues

Many ESLint issues can be auto-fixed:

```bash
npx eslint . --fix
```

## Building for Production

```bash
npm run build
npm start
```

This creates an optimized production build and starts the server.

## Project Structure Quick Reference

```
src/
├── app/           # Next.js pages (App Router)
├── components/    # React components
│   ├── ui/       # ShadCN components
│   ├── layout/   # Header, Footer, etc.
│   └── sections/ # Page sections
├── lib/          # Utilities
├── hooks/        # Custom React hooks
├── types/        # TypeScript types
├── config/       # Configuration
└── styles/       # Global styles
```

## Common Tasks

### Create a New Page

1. Create `src/app/your-page/page.tsx`
2. Add your content
3. Navigate to `/your-page`

### Add a New Component

1. Create file in appropriate directory
2. Define TypeScript types
3. Export as named export
4. Import using absolute path: `@/components/...`

### Add Custom Styles

Add custom utility classes in `src/styles/globals.css` under `@layer utilities`.

## Troubleshooting

### Port Already in Use

If port 3000 is in use:

```bash
npm run dev -- -p 3001
```

### Module Not Found

Clear cache and reinstall:

```bash
rm -rf node_modules .next
npm install
```

### TypeScript Errors

Check your `tsconfig.json` and ensure all paths are correct.

## Next Steps

1. ✅ Development server running
2. 📦 Install ShadCN components as needed
3. 🎨 Customize design tokens in `globals.css`
4. 🔨 Start building your features
5. 📱 Test on mobile devices
6. 🚀 Deploy to Vercel or your preferred platform

## Useful Commands

| Command          | Description              |
| ---------------- | ------------------------ |
| `npm run dev`    | Start development server |
| `npm run build`  | Build for production     |
| `npm run start`  | Start production server  |
| `npm run lint`   | Run ESLint               |
| `npm run format` | Format with Prettier     |

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [ShadCN UI](https://ui.shadcn.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
