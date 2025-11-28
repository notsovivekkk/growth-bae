# TypeScript Types

This directory contains global TypeScript type definitions and interfaces.

## 📁 Organization

### `index.ts`

Global types used across the application.

### Feature-specific Types

Create separate files for different features:

- `user.ts` - User-related types
- `product.ts` - Product types
- `api.ts` - API response types

## 📝 Example Structure

```typescript
// types/user.ts
export interface User {
  id: string
  name: string
  email: string
  role: "admin" | "user"
  createdAt: Date
}

export type UserRole = User["role"]

export interface UserProfile extends User {
  bio?: string
  avatar?: string
}
```

## 🎯 Best Practices

1. **Use interfaces for objects** - More extensible

   ```typescript
   interface User {
     name: string
   }
   ```

2. **Use types for unions/primitives**

   ```typescript
   type Status = "active" | "inactive"
   ```

3. **Export everything** - Make types reusable

   ```typescript
   export interface Props { ... }
   ```

4. **Use descriptive names**

   ```typescript
   // ✅ Good
   interface UserProfileProps { ... }

   // ❌ Bad
   interface Props { ... }
   ```

5. **Document complex types**
   ```typescript
   /**
    * Represents a user in the system
    * @property id - Unique identifier
    * @property role - User's access level
    */
   interface User { ... }
   ```

## 🔧 Common Patterns

### Component Props

```typescript
export interface ButtonProps {
  variant?: "default" | "outline"
  size?: "sm" | "md" | "lg"
  children: React.ReactNode
}
```

### API Responses

```typescript
export interface ApiResponse<T> {
  data: T
  error?: string
  status: number
}
```

### Utility Types

```typescript
export type Optional<T> = T | null
export type Nullable<T> = T | null | undefined
export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>
}
```

## 📚 TypeScript Utility Types

Use built-in TypeScript utility types:

- `Partial<T>` - Make all properties optional
- `Required<T>` - Make all properties required
- `Pick<T, K>` - Select specific properties
- `Omit<T, K>` - Remove specific properties
- `Record<K, T>` - Object with keys K and values T

Example:

```typescript
interface User {
  id: string
  name: string
  email: string
}

type UserUpdate = Partial<User> // All optional
type UserPublic = Omit<User, "email"> // No email
```
