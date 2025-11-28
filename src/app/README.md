# App Directory (Next.js App Router)

This directory contains all route pages and layouts using Next.js 14+ App Router.

## 📁 Structure

```
app/
├── layout.tsx          # Root layout (wraps all pages)
├── page.tsx           # Home page (/)
├── about/
│   └── page.tsx       # About page (/about)
├── blog/
│   ├── page.tsx       # Blog listing (/blog)
│   └── [slug]/
│       └── page.tsx   # Blog post (/blog/[slug])
└── api/
    └── route.ts       # API route
```

## 🎯 Key Concepts

### File Conventions

- `layout.tsx` - Shared UI that wraps child pages
- `page.tsx` - Unique page UI (required for routes)
- `loading.tsx` - Loading UI (Suspense boundary)
- `error.tsx` - Error UI (Error boundary)
- `not-found.tsx` - 404 UI
- `route.ts` - API endpoints

### Dynamic Routes

Create dynamic routes using brackets:

- `[slug]/page.tsx` → `/blog/hello-world`
- `[...slug]/page.tsx` → `/docs/a/b/c` (catch-all)

## 📝 Example Page

```typescript
// app/about/page.tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about us",
}

export default function AboutPage() {
  return (
    <div>
      <h1>About Us</h1>
    </div>
  )
}
```

## 🚀 Server vs Client Components

### Server Components (Default)

```typescript
// app/page.tsx
export default function Page() {
  // Runs on server, can't use hooks
  return <div>Server Component</div>
}
```

### Client Components

```typescript
// app/counter.tsx
"use client"

import { useState } from "react"

export function Counter() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}
```

## 🎨 Layouts

Layouts wrap pages and persist across navigation:

```typescript
// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
```

## 🔧 Best Practices

1. **Use Server Components** by default for better performance
2. **Add "use client"** only when you need interactivity
3. **Colocate files** - keep components near where they're used
4. **Use metadata exports** for SEO
5. **Leverage layouts** for shared UI
6. **Keep pages thin** - move logic to components

## 📚 Learn More

- [App Router Docs](https://nextjs.org/docs/app)
- [Routing Guide](https://nextjs.org/docs/app/building-your-application/routing)
- [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)
