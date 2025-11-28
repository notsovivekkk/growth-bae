# GBAE Design System

**Complete design system rules for GBAE - colors, typography, spacing, and tokens.**

## Design Tokens Location

All design tokens are centralized in `src/lib/design/tokens.ts`. **Never use raw values** - always reference tokens.

## Color System

### Brand Colors

```typescript
Primary:   #004225  // Deep Green - Typography & Primary Elements
Secondary: #F5F1E5  // Soft Cream - Backgrounds
Accent:    #0B6E4F  // Fresh Green - CTAs, Highlights, Links
```

### Semantic Color Tokens

**Always use semantic tokens, never raw hex values:**

```tsx
// ✅ GOOD - Semantic tokens
<div className="bg-secondary text-primary">
<div className="bg-accent hover:bg-primary">
<div className="bg-background-secondary text-text-primary">

// ❌ BAD - Raw hex values
<div className="bg-[#F5F1E5]">
<div style={{ backgroundColor: '#004225' }}>
```

### Color Usage Guidelines

- **Backgrounds:** Use `bg-secondary` (Soft Cream) for main background
- **Typography:** Use `text-primary` (Deep Green) for main text
- **Accents:** Use `bg-accent` or `text-accent` (Fresh Green) for CTAs and highlights
- **Cards:** Use `bg-background-secondary` (White) for elevated surfaces
- **Dark sections:** Use `bg-background-accent` (Deep Green) with `text-text-inverse`

### Available Color Classes

```tsx
// Backgrounds
bg-primary              // Deep Green
bg-secondary            // Soft Cream (main background)
bg-accent               // Fresh Green
bg-background-primary   // Soft Cream
bg-background-secondary // White
bg-background-accent    // Deep Green

// Text
text-primary            // Deep Green
text-secondary          // Fresh Green
text-accent             // Fresh Green
text-text-primary       // Deep Green
text-text-secondary     // Fresh Green
text-text-muted         // Gray
text-text-inverse       // Cream on dark

// Borders
border-border           // Light border
border-border-secondary // Medium border
border-border-accent    // Accent border
```

## Typography System

### Font Family

**Primary:** Aktiv Grotesk  
**Fallback:** Inter (currently used)

Font is loaded in `src/app/layout.tsx` via `next/font/local`.

### Typography Components

**Always use Typography components, never raw HTML tags:**

```tsx
// ✅ GOOD - Use Typography components
import { H1, H2, H3, Body, Lead, Caption } from "@/components/ui/typography"

<H1>Main Headline</H1>
<H2>Section Headline</H2>
<Body>Regular paragraph text</Body>
<Lead>Introduction or lead paragraph</Lead>
<Caption>LABEL OR METADATA</Caption>

// ❌ BAD - Raw HTML with inline styles
<h1 style={{ fontSize: '56px' }}>Headline</h1>
<p style={{ fontSize: '16px' }}>Text</p>
```

### Typography Scale

| Component     | Size            | Usage                    |
| ------------- | --------------- | ------------------------ |
| `<H1>`        | 44px (2.75rem) | Main headlines           |
| `<H2>`        | 48px (3rem)     | Section headlines        |
| `<H3>`        | 36px (2.25rem)  | Subsection headlines     |
| `<H4>`        | 30px (1.875rem) | Card/component headlines |
| `<H5>`        | 24px (1.5rem)   | Small headlines          |
| `<H6>`        | 20px (1.25rem)  | Smallest headlines       |
| `<Body>`      | 16px (1rem)     | Default body text        |
| `<BodyLarge>` | 18px (1.125rem) | Intro/lead paragraphs    |
| `<BodySmall>` | 14px (0.875rem) | Captions, meta info      |
| `<Caption>`   | 12px (0.75rem)  | Labels, tiny text        |
| `<Lead>`      | 18px (1.125rem) | Lead paragraphs          |
| `<Muted>`     | 16px (1rem)     | Muted text               |

### Typography Rules

✅ **DO:**
- Use clean, spacious line-height (1.6 for body)
- Avoid tight tracking
- Use generous whitespace between sections
- Maintain premium, minimal tone
- Use Typography components from `@/components/ui/typography`

❌ **DON'T:**
- Use tight letter-spacing
- Overcrowd text
- Use more than 3 font weights (Regular, Medium, Bold)
- Use raw HTML tags for text
- Inline font sizes or styles

## Spacing System (8px Grid)

**All spacing follows an 8px base grid for consistency.**

### Component Spacing (16-48px)

```tsx
// ✅ GOOD - Multiples of 8px
<div className="space-y-2">  {/* 16px = 2 * 8px */}
<div className="space-y-3">  {/* 24px = 3 * 8px */}
<div className="space-y-4">  {/* 32px = 4 * 8px */}
<div className="space-y-5">  {/* 40px = 5 * 8px */}
<div className="space-y-6">  {/* 48px = 6 * 8px */}

// ❌ BAD - Arbitrary values
<div className="space-y-[23px]">
<div className="py-[47px]">
```

### Section Spacing (64-120px)

Use the `Section` component with padding props:

```tsx
import { Section } from "@/components/ui/section"

// ✅ GOOD - Use Section component
<Section padding="sm">    {/* 48→64→80px responsive */}
<Section padding="default"> {/* 64→80→120px responsive */}
<Section padding="lg">    {/* 96→120→160px responsive */}

// Padding variants follow 8px grid
// sm: py-6 sm:py-8 lg:py-10 (48→64→80px)
// default: py-8 sm:py-10 lg:py-15 (64→80→120px)
// lg: py-12 sm:py-15 lg:py-20 (96→120→160px)
```

### Spacing Rules

✅ **DO:**
- Follow 8px grid (multiples of 8px)
- Use Tailwind spacing classes
- Use `Section` component for section padding
- Use `space-y-*` for vertical spacing between children
- Use `gap-*` for grid/flex gaps

❌ **DON'T:**
- Use arbitrary values like `w-[347px]` unless justified
- Break 8px grid without comment
- Use inline styles for spacing
- Mix different spacing systems

## Container System

Use the `Container` component for max-width and responsive padding:

```tsx
import { Container } from "@/components/ui/container"

// ✅ GOOD - Use Container component
<Container size="narrow">   {/* max-w-[1024px] */}
<Container size="default">  {/* max-w-[1440px] */}
<Container size="wide">     {/* max-w-[1600px] */}
<Container size="full">     {/* max-w-full */}
```

## Motion System

### Transitions

All transitions use soft easing curves (250ms default):

```tsx
// ✅ GOOD - Use transition utilities
<div className="transition-soft">           {/* All properties */}
<div className="transition-color-soft">   {/* Color only */}
<div className="transition-opacity-soft">   {/* Opacity only */}
<div className="transition-transform-soft"> {/* Transform only */}

// Defined in tailwind.config.ts
// Duration: 250ms (normal)
// Easing: cubic-bezier(0.4, 0, 0.2, 1)
```

### Animations

```tsx
// Available animations (fade and slide only)
animate-fade-in
animate-fade-out
animate-slide-up
animate-slide-down
animate-fade-in-up
```

### Motion Rules

✅ **DO:**
- Use soft transitions (250ms)
- Use fade and slide animations only
- Apply `transition-soft` to interactive elements
- Keep animations subtle and professional

❌ **DON'T:**
- Use harsh or jarring animations
- Exceed 350ms duration
- Use complex animations
- Animate without purpose

## Component Usage

### Button Variants

```tsx
import { Button } from "@/components/ui/button"

<Button variant="primary" size="lg">Get Started</Button>
<Button variant="ghost" size="md">Learn More</Button>
<Button variant="underline" size="md">View More →</Button>
```

### Card Components

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
  <CardFooter>Footer</CardFooter>
</Card>
```

## Design Principles

1. **Premium** - High-end, sophisticated feel
2. **Minimal** - Clean, spacious layouts, generous whitespace
3. **Case-Study Focused** - Content-first design
4. **Soft Transitions** - No jarring animations, 250ms default
5. **Generous Whitespace** - Let content breathe, 8px grid system

## Red Flags

❌ Using raw hex values instead of tokens  
❌ Breaking 8px grid without justification  
❌ Inline styles for colors or spacing  
❌ Raw HTML tags instead of Typography components  
❌ Arbitrary Tailwind values like `w-[347px]`  
❌ Harsh animations or long durations  
❌ Tight letter-spacing or cramped layouts

