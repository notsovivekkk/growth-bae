# Library / Utilities

This directory contains utility functions, helpers, and shared logic.

## 📁 Files

### `utils.ts`

Core utility functions, including:

- `cn()` - Tailwind class merging utility (clsx + tailwind-merge)

## 🎯 Guidelines

This directory should contain:

- **Pure functions** that don't depend on React
- **Helper utilities** used across the application
- **Constants** that are shared
- **API clients** and data fetching logic
- **Validators** and formatters

## 📝 Examples

### API Client

```typescript
// lib/api.ts
export async function fetchData(endpoint: string) {
  const response = await fetch(`/api/${endpoint}`)
  return response.json()
}
```

### Validators

```typescript
// lib/validators.ts
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
```

### Formatters

```typescript
// lib/formatters.ts
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount)
}
```

## 🔧 Best Practices

1. **Keep functions pure** when possible
2. **Add JSDoc comments** for complex functions
3. **Export named functions** rather than default exports
4. **Write tests** for critical utilities
5. **Organize by feature** as the project grows
