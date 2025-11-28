# Design System Tokens

This directory contains the GBAE Design System tokens and configuration.

## 📁 Files

### `tokens.ts`

Centralized design tokens including:

- **Colors** - Primary, secondary, accent with semantic mappings
- **Spacing** - 8px grid system for components and sections
- **Typography** - Aktiv Grotesk scales and weights
- **Motion** - Easing curves and transitions
- **Layout** - Containers, radius, shadows

## 🎨 GBAE Design System

### Brand Colors

- **Primary:** #004225 (Deep Green) - Typography & primary elements
- **Secondary:** #F5F1E5 (Soft Cream) - Backgrounds
- **Accent:** #0B6E4F (Fresh Green) - CTAs, highlights, links

### Typography

- **Font:** Aktiv Grotesk (with Inter fallback)
- **Weights:** Regular (400), Medium (500), Bold (700)
- **Scale:** H1-H6, Body variants, Caption
- **Rules:** Clean line-height, minimal tracking

### Spacing (8px Grid)

- **Base:** 8px
- **Component:** 16-48px
- **Section:** 64-120px

### Motion

- **Easing:** Soft cubic-bezier curves
- **Duration:** Fast (150ms), Normal (250ms), Slow (350ms)
- **No harsh animations:** Fade and slide only

## 🚀 Usage

### In Components

```typescript
import { colors, spacing, typography } from "@/lib/design/tokens"

// Use token values
const styles = {
  color: colors.text.primary,
  padding: spacing.component.md,
  fontSize: typography.scale.h2.fontSize,
}
```

### With Tailwind

```tsx
// Use semantic class names
<div className="bg-secondary text-primary">
  <h1 className="text-h1">Heading</h1>
</div>
```

## ⚠️ Important Rules

1. **Never use raw values** - Always reference tokens
2. **Use semantic names** - `bg-primary`, not `bg-[#004225]`
3. **Follow the 8px grid** - All spacing must be multiples of 8
4. **Minimal aesthetic** - Premium, clean, case-study focused
5. **Soft transitions** - Use the motion tokens for animations

## 🎯 Design Principles

- **Premium** - High-end, sophisticated feel
- **Minimal** - Clean, spacious, uncluttered
- **Case-study heavy** - Focus on content and imagery
- **Soft transitions** - No jarring animations
- **Generous whitespace** - Let content breathe

## 📚 Resources

- Tokens are automatically mapped to Tailwind config
- All components should reference these tokens
- See individual component files for usage examples
