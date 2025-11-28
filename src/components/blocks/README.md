# Blocks Components

This directory contains larger, composed components that make up page sections and complex UI blocks.

## 📁 Purpose

**Blocks** are composed components that combine multiple UI primitives into functional sections:

- Navigation bars
- Hero sections
- Feature grids
- Footer layouts
- Complex interactive elements

## 🎯 Difference from `/components/sections`

- **`/blocks`** - Reusable across multiple pages (Navbar, Footer, etc.)
- **`/sections`** - Page-specific sections (Hero, Features for landing page)

## 📝 Current Blocks

### `navbar.tsx`

**GBAE Design:** Minimal, clean layout with navigation spaced to the top-right

- Sticky positioning with backdrop blur
- Responsive design (mobile-friendly)
- Soft transitions on hover
- Premium, uncluttered aesthetic

## 🔧 Guidelines

1. **Composed from UI primitives** - Use components from `/ui`
2. **Design system compliant** - Follow GBAE tokens
3. **Reusable** - Can be used across multiple pages
4. **Well-documented** - Clear props and usage examples
5. **Accessible** - Follow ARIA guidelines

## 💡 Usage Example

```typescript
import { Navbar } from "@/components/blocks/navbar"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>{/* Page content */}</main>
    </>
  )
}
```

## 🎨 GBAE Design Principles

All blocks follow:

- **Minimal aesthetic** - Clean, uncluttered
- **Generous spacing** - Let content breathe
- **Soft transitions** - No harsh animations
- **Premium feel** - High-end, sophisticated
- **Case-study focused** - Content-first design

## 📚 Future Blocks

Consider adding:

- `hero-block.tsx` - Reusable hero component
- `feature-grid-block.tsx` - Feature showcase
- `testimonial-block.tsx` - Client testimonials
- `cta-block.tsx` - Call-to-action sections
- `footer-block.tsx` - Site footer
