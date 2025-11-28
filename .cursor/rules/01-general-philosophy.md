# General Philosophy & Core Principles

**Engineering standards and principles for the GBAE codebase.**

## Core Philosophy

> "Boring, predictable code that's easy to delete is better than clever code that's hard to change."

### Key Principles

1. **Write minimal, boring, predictable code**
   - Prefer clarity over cleverness
   - Simple solutions over complex ones
   - Code should be immediately understandable

2. **Single Responsibility Principle**
   - Every file should do **one thing well**
   - One file = one concern
   - If a file does multiple things, split it

3. **Easy to Delete or Extend**
   - Code should be easy to remove or replace
   - Structure for tomorrow's features
   - Always ask: "If we add 3 more features next month, will this still hold up?"

4. **Future-Proof Design**
   - Design for extensibility
   - Prefer configuration over duplication
   - Structure as if we might add one more variant, one more data source, one more page

## Organization Rules

1. **No business logic inside UI components**
   - UI components are purely presentational
   - Extract logic to hooks, utils, or API layer

2. **No network calls directly in components**
   - Exception: Server components with clear isolation
   - Keep API calls in `lib/api/` or server components

3. **Cross-cutting concerns in `lib/` or `types/`**
   - API clients in `lib/api/`
   - Custom hooks in `lib/hooks/`
   - Design tokens in `lib/design/`
   - Utilities in `lib/utils/`
   - Shared types in `types/`

4. **Colocate related code**
   - All user-related API calls in `lib/api/users.ts`
   - All project-related types in one place
   - Keep related functionality together

## The "3 Times Rule"

If you copy-paste similar code 3 times, stop and extract it into:
- A reusable component
- A utility function
- A configuration object

## File & Function Size Limits

### Limits
- **Component files:** ≤ 200 lines (aim for ≤ 150)
- **Functions:** ≤ 40 lines (aim for ≤ 30)
- **JSX blocks:** ≤ 50 lines before extracting subcomponent

### When Breaking Limits

Consciously refactor:
1. Split into smaller helpers
2. Extract hooks (`useSomething`)
3. Extract subcomponents
4. Move logic to separate files

## Splitting Rule

**If a component grows too big or has multiple responsibilities → SPLIT it**

Signs to split:
- File > 200 lines
- Component does more than one thing
- Multiple levels of nested conditionals
- Hard to name the component concisely

## Extensibility Patterns

### Prefer Configuration Over Duplication

```typescript
// ✅ GOOD - Configurable
const FEATURE_CONFIG = [
  { icon: "🚀", title: "Fast", description: "..." },
  { icon: "🔒", title: "Secure", description: "..." },
  { icon: "📈", title: "Scalable", description: "..." },
]

return FEATURE_CONFIG.map(feature => (
  <FeatureCard key={feature.title} {...feature} />
))

// ❌ BAD - Duplicated JSX
return (
  <>
    <FeatureCard icon="🚀" title="Fast" description="..." />
    <FeatureCard icon="🔒" title="Secure" description="..." />
    <FeatureCard icon="📈" title="Scalable" description="..." />
  </>
)
```

### Design for Tomorrow

When implementing a feature, structure as if we might:
- Add one more variant
- Add one more data source
- Add one more page using the same block

## Red Flags to Avoid

❌ Hard-coded content in reusable components  
❌ API calls in UI components  
❌ Inline styles or arbitrary Tailwind values  
❌ Files over 200 lines  
❌ Missing TypeScript types  
❌ No error handling  
❌ Duplicated code (3+ times)  
❌ Abbreviations in names

## Before Submitting Code Checklist

- [ ] No business logic in UI components?
- [ ] All colors using design tokens?
- [ ] All spacing following 8px grid?
- [ ] Loading/error/empty states handled?
- [ ] Types defined (no `any`)?
- [ ] File < 200 lines?
- [ ] Functions < 40 lines?
- [ ] Repeated code extracted?
- [ ] Meaningful names used?
- [ ] No unused imports?

