# ⚡ Quick Start

Get up and running in 3 minutes.

## 🚀 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

## 🎨 Add Your First Component

```bash
# Install a ShadCN component
npx shadcn-ui@latest add button

# Use it in your code
```

```typescript
import { Button } from "@/components/ui/button"

export function MyComponent() {
  return <Button>Click me</Button>
}
```

## 📝 Create a New Page

Create `src/app/about/page.tsx`:

```typescript
export default function AboutPage() {
  return (
    <div className="container-custom section-spacing">
      <h1 className="text-4xl font-bold">About Us</h1>
      <p className="text-muted-foreground">Your content here</p>
    </div>
  )
}
```

Visit `/about` ✨

## 🎨 Customize Colors

Edit `src/styles/globals.css`:

```css
:root {
  --primary: 221.2 83.2% 53.3%; /* Your brand color */
}
```

## 📦 Essential Commands

| Command          | Action               |
| ---------------- | -------------------- |
| `npm run dev`    | Start dev server     |
| `npm run build`  | Build for production |
| `npm run lint`   | Check code quality   |
| `npm run format` | Format code          |

## 🎯 Project Structure at a Glance

```
src/
├── app/           → Pages (add page.tsx files)
├── components/    → React components
│   ├── ui/       → ShadCN components
│   ├── layout/   → Header, Footer
│   └── sections/ → Page sections
├── lib/          → Utilities
├── styles/       → Global CSS
└── config/       → Site configuration
```

## 🔥 Popular ShadCN Components

```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add input
npx shadcn-ui@latest add form
npx shadcn-ui@latest add dropdown-menu
npx shadcn-ui@latest add tabs
npx shadcn-ui@latest add toast
```

## 💡 Pro Tips

1. **Use absolute imports:** `@/components/ui/button`
2. **Mobile-first:** Write mobile styles first
3. **Use `cn()` utility:** For merging Tailwind classes
4. **Check READMEs:** Each folder has a guide
5. **TypeScript everything:** Define types for props

## 📚 Need More Help?

- [Full Setup Guide](./SETUP.md)
- [Project Structure](./PROJECT_STRUCTURE.md)
- [Contributing Guide](./CONTRIBUTING.md)
- [Next.js Docs](https://nextjs.org/docs)
- [ShadCN UI](https://ui.shadcn.com)

## 🎉 You're Ready!

Start building something amazing! 🚀
