# Custom React Hooks

This directory contains reusable React hooks for shared logic.

## 🎯 Purpose

Custom hooks encapsulate reusable stateful logic that can be shared across components.

## 📝 Naming Convention

All hooks must start with `use`:

- ✅ `useMediaQuery.ts`
- ✅ `useLocalStorage.ts`
- ✅ `useDebounce.ts`
- ❌ `mediaQuery.ts`

## 💡 Common Hook Patterns

### Example: useMediaQuery

```typescript
// hooks/use-media-query.ts
import { useEffect, useState } from "react"

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }

    const listener = () => setMatches(media.matches)
    media.addEventListener("change", listener)
    return () => media.removeEventListener("change", listener)
  }, [matches, query])

  return matches
}
```

### Example: useLocalStorage

```typescript
// hooks/use-local-storage.ts
import { useState, useEffect } from "react"

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(initialValue)

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key)
      if (item) {
        setStoredValue(JSON.parse(item))
      }
    } catch (error) {
      console.error(error)
    }
  }, [key])

  const setValue = (value: T) => {
    try {
      setStoredValue(value)
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(error)
    }
  }

  return [storedValue, setValue] as const
}
```

## 🔧 Best Practices

1. **Always prefix with "use"** - React hook naming convention
2. **Use kebab-case** for file names: `use-media-query.ts`
3. **Add TypeScript types** for parameters and return values
4. **Document the hook** with JSDoc comments
5. **Handle edge cases** and errors gracefully
6. **Keep hooks focused** - one responsibility per hook

## 📚 Useful Hooks to Consider

- `useMediaQuery` - Responsive breakpoint detection
- `useDebounce` - Debounce values
- `useLocalStorage` - Persist state to localStorage
- `useClickOutside` - Detect clicks outside an element
- `useIntersectionObserver` - Visibility detection
- `useAsync` - Handle async operations
