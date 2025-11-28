# Styling Rules

**Tailwind CSS usage, 8px grid, and design token rules for the GBAE codebase.**

## Tailwind CSS Usage

### Use Tailwind + Design Tokens ONLY

1. **Use Tailwind + design tokens ONLY**
   - ❌ No inline styles
   - ❌ No raw hex colors
   - ❌ No arbitrary values like `w-[347px]` unless justified

### Design Token Usage

```tsx
// ✅ GOOD - Using design tokens
<div className="bg-secondary text-primary">
<div className="bg-accent hover:bg-primary">
<div className="space-y-4">  {/* 32px = 4 * 8px */}
<div className="py-8">       {/* 64px = 8 * 8px */}

// ❌ BAD - Raw values
<div className="bg-[#F5F1E5]">
<div style={{ backgroundColor: '#004225' }}>
<div className="space-y-[23px]">
<div className="py-[47px]">
```

## 8px Grid System

**All spacing follows an 8px base grid for consistency.**

### Spacing Classes (8px Multiples)

```tsx
// Component spacing
space-y-2  // 16px = 2 * 8px
space-y-3  // 24px = 3 * 8px
space-y-4  // 32px = 4 * 8px
space-y-5  // 40px = 5 * 8px
space-y-6  // 48px = 6 * 8px

// Padding
p-2   // 16px
p-3   // 24px
p-4   // 32px
p-6   // 48px
p-8   // 64px
p-10  // 80px
p-12  // 96px
p-15  // 120px

// Margins
m-2, m-3, m-4, m-6, m-8, m-10, m-12, m-15
```

### No One-Off Pixel Values

```tsx
// ❌ BAD - Arbitrary values
<div className="w-[347px]">
<div className="space-y-[23px]">
<div className="py-[47px]">

// ✅ GOOD - Use standard spacing or justify with comment
<div className="w-full max-w-2xl">
<div className="space-y-4">
<div className="py-8">

// ✅ GOOD - If breaking rule, add comment
{/* Breaking 8px grid: 347px matches design spec exactly */}
<div className="w-[347px]">
```

## Color Usage

### Always Use Semantic Tokens

```tsx
// ✅ GOOD - Semantic tokens from design system
<div className="bg-secondary text-primary">
<div className="bg-accent hover:bg-primary">
<div className="text-text-muted">
<div className="border-border">

// ❌ BAD - Raw hex or inline styles
<div className="bg-[#F5F1E5]">
<div style={{ color: '#004225' }}>
<div className="text-[#0B6E4F]">
```

### Available Color Tokens

Reference `src/lib/design/tokens.ts` and `tailwind.config.ts`:

- `bg-primary`, `bg-secondary`, `bg-accent`
- `bg-background-primary`, `bg-background-secondary`, `bg-background-accent`
- `text-primary`, `text-secondary`, `text-accent`
- `text-text-primary`, `text-text-secondary`, `text-text-muted`, `text-text-inverse`
- `border-border`, `border-border-secondary`, `border-border-accent`

## Typography Styling

### Use Typography Components

```tsx
// ✅ GOOD - Use Typography components
import { H1, H2, Body, Lead } from "@/components/ui/typography"

<H1>Headline</H1>
<Body>Text content</Body>

// ❌ BAD - Inline typography styles
<h1 className="text-4xl font-bold">Headline</h1>
<p className="text-base">Text content</p>
```

### Typography Utilities

When you need to override Typography components:

```tsx
// ✅ GOOD - Extend with className
<H1 className="text-center">Centered Headline</H1>
<Body className="text-text-muted">Muted text</Body>

// ❌ BAD - Recreate typography with utilities
<div className="text-h1 font-bold text-primary">Headline</div>
```

## Layout Utilities

### Container and Section

```tsx
// ✅ GOOD - Use Container and Section components
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"

<Section padding="default" background="primary">
  <Container size="default">
    {/* Content */}
  </Container>
</Section>

// ❌ BAD - Manual max-width and padding
<div className="max-w-7xl mx-auto px-4 py-8">
  <div className="max-w-4xl">
    {/* Content */}
  </div>
</div>
```

## Responsive Design

### Mobile-First Approach

```tsx
// ✅ GOOD - Mobile-first responsive
<div className="
  text-sm          // Mobile
  sm:text-base      // 640px+
  md:text-lg        // 768px+
  lg:text-xl        // 1024px+
">

<div className="
  px-4              // Mobile: 16px
  sm:px-6           // 640px+: 24px
  md:px-8           // 768px+: 32px
  lg:px-12          // 1024px+: 48px
">
```

### Breakpoints

- `sm:` 640px (small screens)
- `md:` 768px (tablets)
- `lg:` 1024px (desktops)
- `xl:` 1280px (large desktops)
- `2xl:` 1440px (extra large)

## Utility Classes

### Common Patterns

```tsx
// Spacing
<div className="space-y-4">        // Vertical spacing between children
<div className="gap-6">            // Grid/flex gap
<div className="p-6">              // Padding all sides
<div className="py-8 px-4">        // Padding specific sides

// Layout
<div className="flex items-center justify-between">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// Transitions
<div className="transition-soft">
<div className="transition-color-soft hover:text-accent">

// Focus states
<button className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
```

## Class Merging

### Use `cn()` Utility

```tsx
import { cn } from "@/lib/utils"

// ✅ GOOD - Merge classes properly
<div className={cn(
  "base-classes",
  condition && "conditional-classes",
  className // Allow override
)}>

// ❌ BAD - String concatenation
<div className={"base " + (condition ? "conditional" : "")}>
```

## Inline Styles

### When to Avoid

```tsx
// ❌ BAD - Inline styles for design tokens
<div style={{ backgroundColor: '#F5F1E5', padding: '32px' }}>

// ✅ GOOD - Use Tailwind classes
<div className="bg-secondary p-4">

// ✅ GOOD - Inline styles only for dynamic values
<div style={{ width: `${dynamicWidth}px` }}>
```

## Custom Utilities

Custom utilities are defined in `src/styles/globals.css`:

- `transition-soft` - All properties, 250ms
- `transition-color-soft` - Color only
- `transition-opacity-soft` - Opacity only
- `transition-transform-soft` - Transform only

## Red Flags

❌ Using raw hex colors (`bg-[#004225]`)  
❌ Inline styles for design tokens  
❌ Arbitrary values breaking 8px grid  
❌ Not using `cn()` for class merging  
❌ Recreating Typography with utilities  
❌ Manual max-width instead of Container  
❌ Hard-coded spacing values  
❌ Mixing different spacing systems

## Before Submitting Code

- [ ] All colors using design tokens?
- [ ] All spacing following 8px grid?
- [ ] No inline styles for design tokens?
- [ ] No arbitrary Tailwind values?
- [ ] Using Typography components?
- [ ] Using Container and Section components?
- [ ] Mobile-first responsive design?
- [ ] Using `cn()` for class merging?

