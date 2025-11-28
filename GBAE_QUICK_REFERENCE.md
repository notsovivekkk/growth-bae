# 🎨 GBAE Design System - Quick Reference

Fast lookup guide for daily development.

## 🎨 Colors

```tsx
// Backgrounds
bg - secondary // Soft Cream (main background)
bg - background - secondary // White (cards, elevated)
bg - accent // Deep Green (dark sections)

// Text
text - primary // Deep Green (main text)
text - secondary // Fresh Green (secondary)
text - muted // Gray (supporting)
text - inverse // Cream (on dark)
```

## 🔶 Typography

```tsx
import { H1, H2, H3, Body, Lead } from "@/components/ui/typography"

<H1>Main Headline</H1>              // 56px, bold
<H2>Section Headline</H2>           // 48px, bold
<H3>Subsection</H3>                 // 36px, bold
<Body>Regular text</Body>           // 16px, regular
<Lead>Intro paragraph</Lead>        // 18px, spacious
```

## 🧩 Components

### Button

```tsx
import { Button } from "@/components/ui/button"

<Button variant="primary">Click me</Button>
<Button variant="ghost">Learn More</Button>
<Button variant="underline">View More →</Button>
```

### Card

```tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
;<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>
```

### Layout

```tsx
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
;<Section padding="default" background="primary">
  <Container size="default">{/* Content */}</Container>
</Section>
```

## 📐 Spacing

```tsx
// Component spacing (8px grid)
space - y - 2 // 16px
space - y - 3 // 24px
space - y - 4 // 32px
space - y - 6 // 48px

// Section padding
py - 8 // 64px
py - 10 // 80px
py - 15 // 120px
```

## 🎬 Transitions

```tsx
// Apply soft transitions
transition - soft // All properties
transition - color - soft // Colors only
hover: text - accent // Color change
hover: shadow - lg // Shadow change
```

## 📦 Common Patterns

### Page Section

```tsx
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { H2, Body } from "@/components/ui/typography"

export function MySection() {
  return (
    <Section padding="lg" background="secondary">
      <Container>
        <H2>Section Title</H2>
        <Body>Content here</Body>
      </Container>
    </Section>
  )
}
```

### Feature Card

```tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { BodySmall } from "@/components/ui/typography"
;<Card>
  <CardHeader>
    <CardTitle>Feature Name</CardTitle>
  </CardHeader>
  <CardContent>
    <BodySmall>Description text</BodySmall>
  </CardContent>
</Card>
```

### CTA Block

```tsx
import { Button } from "@/components/ui/button"
import { H2, Lead } from "@/components/ui/typography"
;<div className="space-y-6 text-center">
  <H2>Ready to get started?</H2>
  <Lead>Supporting message here</Lead>
  <Button variant="primary" size="lg">
    Get Started
  </Button>
</div>
```

## 🎯 Rules to Remember

✅ Always use semantic tokens (`bg-primary`, not `bg-[#004225]`)  
✅ Follow 8px grid for all spacing  
✅ Use Typography components for text  
✅ Apply `transition-soft` to interactive elements  
✅ Maintain generous whitespace

❌ Never use raw hex values  
❌ No tight letter-spacing  
❌ No harsh animations  
❌ No cramped layouts

## 📚 Full Documentation

- **Complete Guide:** `GBAE_DESIGN_SYSTEM.md`
- **Implementation:** `GBAE_IMPLEMENTATION_SUMMARY.md`
- **Tokens:** `src/lib/design/tokens.ts`
- **Examples:** `src/components/sections/`
