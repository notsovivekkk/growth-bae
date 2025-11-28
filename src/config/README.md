# Configuration

This directory contains application-wide configuration files.

## 📁 Files

### `site.ts`

Core site configuration including:

- Site name and description
- URLs and metadata
- Navigation links
- Social media links

## 📝 Usage Example

```typescript
import { siteConfig } from "@/config/site"

export default function Component() {
  return <h1>{siteConfig.name}</h1>
}
```

## 🎯 What Goes Here

Configuration files for:

- **Site metadata** - Name, description, URLs
- **Navigation** - Main nav, footer links
- **Feature flags** - Enable/disable features
- **Constants** - App-wide constants
- **Theme config** - Color schemes, fonts
- **API endpoints** - Base URLs, routes

## 📝 Example Configurations

### Navigation Config

```typescript
// config/navigation.ts
import type { MainNavItem } from "@/types"

export const mainNav: MainNavItem[] = [
  {
    title: "Features",
    href: "/#features",
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "About",
    href: "/about",
  },
]
```

### Feature Flags

```typescript
// config/features.ts
export const features = {
  enableAuth: true,
  enablePayments: false,
  enableAnalytics: process.env.NODE_ENV === "production",
} as const
```

### API Config

```typescript
// config/api.ts
export const apiConfig = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000",
  timeout: 10000,
  endpoints: {
    users: "/api/users",
    posts: "/api/posts",
  },
} as const
```

## 🔧 Best Practices

1. **Use environment variables** for sensitive data

   ```typescript
   const apiKey = process.env.API_KEY
   ```

2. **Type your configs** with TypeScript

   ```typescript
   export const config = { ... } as const
   export type Config = typeof config
   ```

3. **Document values** with comments

   ```typescript
   export const config = {
     // Maximum file size in bytes (5MB)
     maxFileSize: 5 * 1024 * 1024,
   }
   ```

4. **Keep secrets in .env** - Never commit secrets

   ```typescript
   // ❌ Bad
   const apiKey = "sk_live_123abc"

   // ✅ Good
   const apiKey = process.env.API_KEY
   ```

5. **Use constants** for magic numbers

   ```typescript
   // ❌ Bad
   if (users.length > 100) { ... }

   // ✅ Good
   const MAX_USERS = 100
   if (users.length > MAX_USERS) { ... }
   ```

## 🔒 Security Notes

- ⚠️ **Never commit secrets** to version control
- ✅ Use `.env.local` for local secrets
- ✅ Use `NEXT_PUBLIC_` prefix for client-side env vars
- ✅ Keep server-side secrets without prefix
- ✅ Use `.env.example` to document required variables
