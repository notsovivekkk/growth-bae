# 🧩 GBAE Component Library

Complete reference for all atomic and molecular components.

## 📦 Component Architecture

```
Atoms (Primitives)
├── Typography (H1-H6, Body, etc.)
├── Button
├── Input
├── Logo
├── NavLink
├── IconWrapper
├── Container
└── Section

Molecules (Composed)
├── Navbar
├── Header
├── Footer
└── Card (composable)

Sections (Page-specific)
├── Hero
├── Features
└── CTA
```

## ⚛️ ATOMS (Primitives)

### Typography

**Location:** `src/components/ui/typography.tsx`

```tsx
import { H1, H2, H3, H4, H5, H6 } from "@/components/ui/typography"
import { Body, BodyLarge, BodySmall } from "@/components/ui/typography"
import { Lead, Caption, Muted } from "@/components/ui/typography"

// Usage
<H1>Main Headline</H1>
<H2>Section Headline</H2>
<Body>Regular paragraph text</Body>
<Lead>Introduction or lead text</Lead>
<Caption>SMALL LABEL TEXT</Caption>
```

**Variants:**

- `H1` - 56px, Bold - Main headlines
- `H2` - 48px, Bold - Section headlines
- `H3` - 36px, Bold - Subsections
- `H4` - 30px, Semibold - Card titles
- `H5` - 24px, Semibold - Small headings
- `H6` - 20px, Semibold - Smallest headings
- `Body` - 16px, Regular - Default text
- `BodyLarge` - 18px, Regular - Intro text
- `BodySmall` - 14px, Regular - Supporting text
- `Lead` - 18px, Regular - Lead paragraphs
- `Caption` - 12px, Medium - Labels
- `Muted` - 16px, Regular - Muted text

### Button

**Location:** `src/components/ui/button.tsx`

```tsx
import { Button } from "@/components/ui/button"

// Variants
<Button variant="primary" size="lg">Get Started</Button>
<Button variant="ghost" size="md">Learn More</Button>
<Button variant="underline" size="sm">View More →</Button>
```

**Props:**

- `variant`: "primary" | "ghost" | "underline"
- `size`: "sm" | "md" | "lg"
- All standard button HTML attributes

**Design:**

- Primary: Accent background, white text
- Ghost: Transparent, hover effect
- Underline: Text-only, minimal

### Input

**Location:** `src/components/ui/input.tsx`

```tsx
import { Input } from "@/components/ui/input"

// Basic usage
<Input type="text" placeholder="Enter your email" />
<Input type="email" error={hasError} />
<Input disabled placeholder="Disabled input" />
```

**Props:**

- `error`: boolean - Shows error state
- All standard input HTML attributes

**Design:**

- Clean borders with focus ring
- Accent color on focus
- Error state in red

### Logo

**Location:** `src/components/ui/logo.tsx`

```tsx
import { Logo } from "@/components/ui/logo"

// With link
<Logo href="/" size="md" />

// Without link (static)
<Logo size="lg" />
```

**Props:**

- `href`: string - Optional link destination
- `size`: "sm" | "md" | "lg"

**Design:**

- Consistent brand typography
- Hover effect when linked
- Scalable sizes

### NavLink

**Location:** `src/components/ui/nav-link.tsx`

```tsx
import { NavLink } from "@/components/ui/nav-link"

// Basic usage
<NavLink href="/about">About</NavLink>

// With active state
<NavLink href="/work" active>Work</NavLink>

// Underline variant
<NavLink href="/contact" variant="underline">Contact</NavLink>
```

**Props:**

- `href`: string - Link destination
- `active`: boolean - Active state styling
- `variant`: "default" | "underline"

**Design:**

- Soft color transitions
- Active state highlighting
- Minimal aesthetic

### IconWrapper

**Location:** `src/components/ui/icon-wrapper.tsx`

```tsx
import { IconWrapper } from "@/components/ui/icon-wrapper"

// With any icon library
<IconWrapper size="md" variant="accent">
  <YourIconComponent />
</IconWrapper>

<IconWrapper size="lg" variant="default">
  {/* Icon SVG or component */}
</IconWrapper>
```

**Props:**

- `size`: "xs" | "sm" | "md" | "lg" | "xl"
- `variant`: "default" | "accent" | "muted"

**Sizes:**

- xs: 16px
- sm: 20px
- md: 24px
- lg: 32px
- xl: 40px

### Container

**Location:** `src/components/ui/container.tsx`

```tsx
import { Container } from "@/components/ui/container"

<Container size="default">
  {/* Your content */}
</Container>

<Container size="narrow">
  {/* Narrower content */}
</Container>
```

**Props:**

- `size`: "default" | "narrow" | "wide" | "full"

**Sizes:**

- narrow: 1024px
- default: 1440px
- wide: 1600px
- full: 100%

### Section

**Location:** `src/components/ui/section.tsx`

```tsx
import { Section } from "@/components/ui/section"
;<Section padding="lg" background="primary">
  {/* Section content */}
</Section>
```

**Props:**

- `padding`: "none" | "sm" | "default" | "lg"
- `background`: "primary" | "secondary" | "accent" | "white"

**Padding (8px grid):**

- sm: 48→64→80px
- default: 64→80→120px
- lg: 96→120→160px

## 🧪 MOLECULES (Composed)

### Navbar

**Location:** `src/components/blocks/navbar.tsx`

```tsx
import { Navbar } from "@/components/blocks/navbar"

// Usage (typically in layout)
;<Navbar />
```

**Composed from:**

- Logo
- NavLink (multiple)
- Button
- Container

**Features:**

- Sticky positioning
- Backdrop blur
- Responsive design
- Minimal, clean layout

### Header

**Location:** `src/components/layout/header.tsx`

```tsx
import { Header } from "@/components/layout/header"

// Usage in layout
;<Header />
```

**Same as Navbar** - Can be used interchangeably

### Footer

**Location:** `src/components/layout/footer.tsx`

```tsx
import { Footer } from "@/components/layout/footer"

// Usage in layout
;<Footer />
```

**Composed from:**

- Logo
- NavLink (multiple)
- Caption
- BodySmall
- Container

**Features:**

- Organized link sections
- Copyright notice
- Premium spacing

### Card

**Location:** `src/components/ui/card.tsx`

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"

// Full example
;<Card>
  <CardHeader>
    <CardTitle>Feature Name</CardTitle>
    <CardDescription>Brief description</CardDescription>
  </CardHeader>
  <CardContent>Main content here</CardContent>
  <CardFooter>Footer actions</CardFooter>
</Card>
```

**Features:**

- Composable system
- Soft shadows
- Hover effects
- Rounded corners (12px)

## 📚 Barrel Export

**Location:** `src/components/ui/index.ts`

Import everything from one place:

```tsx
import {
  // Typography
  H1,
  H2,
  Body,
  Lead,

  // Form
  Button,
  Input,

  // Layout
  Container,
  Section,

  // Card
  Card,
  CardHeader,
  CardTitle,
  CardContent,

  // Navigation
  Logo,
  NavLink,

  // Utility
  IconWrapper,
} from "@/components/ui"
```

## 🎯 Usage Patterns

### Pattern 1: Page Section

```tsx
import { Section, Container, H2, Body, Button } from "@/components/ui"

export function MySection() {
  return (
    <Section padding="lg" background="secondary">
      <Container size="narrow">
        <div className="space-y-6 text-center">
          <H2>Section Title</H2>
          <Body>Description text</Body>
          <Button variant="primary">Action</Button>
        </div>
      </Container>
    </Section>
  )
}
```

### Pattern 2: Feature Card

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  BodySmall,
} from "@/components/ui"

export function FeatureCard({ title, description }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <BodySmall>{description}</BodySmall>
      </CardContent>
    </Card>
  )
}
```

### Pattern 3: Form

```tsx
import { Input, Button, Body } from "@/components/ui"

export function ContactForm() {
  return (
    <form className="space-y-4">
      <div>
        <Body className="mb-2">Email</Body>
        <Input type="email" placeholder="your@email.com" />
      </div>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </form>
  )
}
```

## 🎨 Design Principles

All components follow GBAE design system:

✅ **Purely presentational** - No business logic  
✅ **Responsive** - Mobile-first design  
✅ **Semantic tokens** - Use design tokens only  
✅ **Type-safe** - Full TypeScript support  
✅ **Accessible** - Proper ARIA and focus states  
✅ **Composable** - Can be combined easily

## 📖 Next Steps

1. **Browse components** in `src/components/ui/`
2. **See examples** in `src/components/sections/`
3. **Build with atoms** - Compose your own molecules
4. **Reference design system** - `GBAE_DESIGN_SYSTEM.md`

---

**All components are ready to use! Start building with atoms and compose into molecules.** 🚀
