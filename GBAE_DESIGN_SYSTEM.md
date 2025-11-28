# 🎨 GBAE Design System Documentation

Complete implementation guide for the GBAE design system.

## 📋 Overview

The GBAE Design System is a premium, minimal design language focused on case studies and content-heavy layouts. It emphasizes generous whitespace, clean typography, and soft transitions.

## 🎨 Brand Colors

### Primary Palette

```css
Primary: #004225    /* Deep Green - Typography & primary elements */
Secondary: #F5F1E5  /* Soft Cream - Backgrounds */
Accent: #0B6E4F     /* Fresh Green - CTAs, highlights, links */
```

### Usage Guidelines

- **Backgrounds:** Use Secondary (Soft Cream) `bg-secondary`
- **Typography:** Use Primary (Deep Green) `text-primary`
- **Accents:** Use sparingly for CTAs and highlights `bg-accent`
- **Never use raw hex values** - Always use semantic tokens

### Semantic Color Tokens

```tsx
// Background tokens
bg - background - primary // Soft Cream
bg - background - secondary // White (for cards)
bg - background - accent // Deep Green (dark sections)

// Text tokens
text - primary // Deep Green
text - secondary // Fresh Green
text - muted // Gray
text - inverse // Cream on dark
```

## 🔶 Typography

### Font Family

**Primary:** Aktiv Grotesk  
**Fallback:** Inter (currently used)

```tsx
import { H1, H2, H3, H4, H5, H6 } from "@/components/ui/typography"
import { Body, BodyLarge, BodySmall } from "@/components/ui/typography"
import { Lead, Muted, Caption } from "@/components/ui/typography"
```

### Typography Scale

| Component     | Size            | Usage                    |
| ------------- | --------------- | ------------------------ |
| `<H1>`        | 56px (3.5rem)   | Main headlines           |
| `<H2>`        | 48px (3rem)     | Section headlines        |
| `<H3>`        | 36px (2.25rem)  | Subsection headlines     |
| `<H4>`        | 30px (1.875rem) | Card/component headlines |
| `<H5>`        | 24px (1.5rem)   | Small headlines          |
| `<H6>`        | 20px (1.25rem)  | Smallest headlines       |
| `<Body>`      | 16px (1rem)     | Default body text        |
| `<BodyLarge>` | 18px (1.125rem) | Intro/lead paragraphs    |
| `<BodySmall>` | 14px (0.875rem) | Captions, meta info      |
| `<Caption>`   | 12px (0.75rem)  | Labels, tiny text        |

### Typography Rules

✅ **DO:**

- Use clean, spacious line-height (1.6 for body)
- Avoid tight tracking
- Use generous whitespace between sections
- Maintain premium, minimal tone

❌ **DON'T:**

- Use tight letter-spacing
- Overcrowd text
- Use more than 3 font weights

### Usage Examples

```tsx
// Headings
<H1>Premium Growth Strategies</H1>
<H2>Services That Drive Growth</H2>

// Body text
<Body>Regular paragraph text content.</Body>
<Lead>Introduction or lead paragraph with emphasis.</Lead>

// Small text
<BodySmall>Caption or supporting information.</BodySmall>
<Caption>LABEL OR METADATA</Caption>
```

## 📐 Spacing System (8px Grid)

All spacing follows an 8px base grid for consistency.

### Component Spacing (16-48px)

```tsx
// Tailwind classes
space - y - 2 // 16px
space - y - 3 // 24px
space - y - 4 // 32px
space - y - 5 // 40px
space - y - 6 // 48px
```

### Section Spacing (64-120px)

```tsx
import { Section } from "@/components/ui/section"

<Section padding="sm">    {/* 48→64→80px */}
<Section padding="default"> {/* 64→80→120px */}
<Section padding="lg">    {/* 96→120→160px */}
```

### Container System

```tsx
import { Container } from "@/components/ui/container"

<Container size="narrow">   {/* max-w-[1024px] */}
<Container size="default">  {/* max-w-[1440px] */}
<Container size="wide">     {/* max-w-[1600px] */}
<Container size="full">     {/* max-w-full */}
```

## 🧩 Components

### Button Component

Three variants: Primary, Ghost, Underline

```tsx
import { Button } from "@/components/ui/button"

// Primary (accent background)
<Button variant="primary" size="lg">
  Get Started
</Button>

// Ghost (transparent with hover)
<Button variant="ghost" size="md">
  Learn More
</Button>

// Underline (text-only with underline)
<Button variant="underline" size="md">
  View Case Studies →
</Button>
```

**Design Rules:**

- Minimal aesthetic
- Soft transitions (250ms)
- No harsh shadows
- Clear focus states

### Card Component

Rounded corners with soft shadows

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
;<Card>
  <CardHeader>
    <CardTitle>Growth Strategy</CardTitle>
    <CardDescription>Supporting text</CardDescription>
  </CardHeader>
  <CardContent>Main content here</CardContent>
  <CardFooter>Footer content</CardFooter>
</Card>
```

**Design Rules:**

- Rounded corners: 12px (`rounded-lg`)
- Soft shadow: `shadow-md`
- White background on cream
- Hover state: `shadow-lg`

### Section Component

Enforces consistent section spacing

```tsx
import { Section } from "@/components/ui/section"
;<Section
  padding="default" // sm | default | lg
  background="primary" // primary | secondary | accent | white
>
  {/* Content */}
</Section>
```

### Container Component

Max-width and responsive padding

```tsx
import { Container } from "@/components/ui/container"
;<Container size="default">{/* Content */}</Container>
```

## 🎬 Motion System

### Transitions

All transitions use soft easing curves:

```tsx
// Utility classes
transition - soft // All properties
transition - color - soft // Color only
transition - opacity - soft // Opacity only
transition - transform - soft // Transform only
```

### Animations

```tsx
// Fade and slide animations
animate-fade-in
animate-fade-out
animate-slide-up
animate-slide-down
```

**Rules:**

- Duration: 250ms (normal)
- Easing: `cubic-bezier(0.4, 0, 0.2, 1)`
- No harsh or jarring animations
- Fade and slide only

## 🎯 Layout Rules

### Global Background

```tsx
// Applied in layout.tsx
bg - secondary // Soft Cream (#F5F1E5)
text - primary // Deep Green (#004225)
```

### Navigation

```tsx
import { Header } from "@/components/layout/header"

// Minimal, clean layout
// Spaced to the top-right
// Sticky with backdrop blur
```

### Imagery

- **Case-study heavy:** Focus on real examples
- **Vibrant:** Use high-quality images
- **Premium:** Professional photography
- **Aspect ratios:** 16:10 or 16:9 for hero images

## 📁 File Organization

```
src/
├── lib/
│   └── design/
│       ├── tokens.ts          # Design tokens
│       └── README.md
├── components/
│   ├── ui/                    # Atomic components
│   │   ├── typography.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── container.tsx
│   │   └── section.tsx
│   ├── blocks/                # Composed blocks
│   │   └── navbar.tsx
│   ├── layout/                # Layout components
│   │   ├── header.tsx
│   │   └── footer.tsx
│   └── sections/              # Page sections
│       ├── hero-section.tsx
│       ├── features-section.tsx
│       └── cta-section.tsx
└── styles/
    └── globals.css            # Global styles + tokens
```

## 🎨 Design Principles

### 1. Premium

- High-end, sophisticated feel
- Quality over quantity
- Attention to detail

### 2. Minimal

- Clean, spacious layouts
- Generous whitespace
- Uncluttered interface

### 3. Case-Study Focused

- Content-first design
- Real examples and data
- Evidence-based approach

### 4. Soft Transitions

- No jarring animations
- Smooth, professional feel
- 250ms default duration

### 5. Generous Whitespace

- Let content breathe
- 8px grid system
- 64-120px section spacing

## ✅ Checklist for New Components

When creating new components:

- [ ] Import tokens from `@/lib/design/tokens`
- [ ] Use semantic color classes (`bg-primary`, not `bg-[#004225]`)
- [ ] Follow 8px grid spacing
- [ ] Use Typography components for text
- [ ] Add soft transitions (`transition-soft`)
- [ ] Test on mobile first
- [ ] Ensure accessible focus states
- [ ] Document props with TypeScript
- [ ] Add JSDoc comments

## 🚫 Common Mistakes to Avoid

❌ Using raw hex values  
✅ Use semantic tokens

❌ Tight letter-spacing  
✅ Clean, spacious tracking

❌ Harsh animations  
✅ Soft, 250ms transitions

❌ Cramped layouts  
✅ Generous whitespace

❌ Too many font weights  
✅ Regular, Medium, Bold only

## 📚 Resources

- **Tokens:** `src/lib/design/tokens.ts`
- **Global Styles:** `src/styles/globals.css`
- **Tailwind Config:** `tailwind.config.ts`
- **Components:** `src/components/ui/`
- **Examples:** `src/components/sections/`

## 🎓 Learning Path

1. Read `src/lib/design/tokens.ts` - Understand the system
2. Study `src/components/ui/` - See component patterns
3. Review `src/components/sections/` - See real usage
4. Build new components following patterns
5. Refer back to this guide for decisions

---

**The GBAE Design System is implemented and ready to use! 🎉**
