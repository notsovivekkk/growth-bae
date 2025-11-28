# Styles Directory

This directory contains global stylesheets and CSS files.

## 📁 Files

### `globals.css`

The main global stylesheet containing:

- Tailwind directives (`@tailwind base/components/utilities`)
- CSS custom properties (design tokens)
- Global styles and resets
- Custom utility classes

## 🎨 Design Tokens

Design tokens are defined as CSS custom properties:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  /* etc... */
}
```

Access them in your components via Tailwind classes:

- `bg-background` → `var(--background)`
- `text-primary` → `var(--primary)`
- `border-border` → `var(--border)`

## 🌙 Dark Mode

Dark mode tokens are defined under `.dark`:

```css
.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* etc... */
}
```

## 🎯 Custom Utilities

Add custom utility classes in the `@layer utilities` section:

```css
@layer utilities {
  .container-custom {
    @apply mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8;
  }

  .section-spacing {
    @apply py-12 sm:py-16 lg:py-24;
  }
}
```

## 📝 Adding Custom Styles

### Option 1: Custom Utilities (Preferred)

```css
/* globals.css */
@layer utilities {
  .text-gradient {
    @apply bg-gradient-to-r from-primary to-primary/60 
           bg-clip-text text-transparent;
  }
}
```

### Option 2: Component Styles

For component-specific styles, prefer inline Tailwind:

```tsx
<div className="rounded-lg border border-border p-4">Content</div>
```

### Option 3: Separate CSS File (Use Sparingly)

```css
/* styles/components/carousel.css */
.carousel-custom {
  /* Custom carousel styles */
}
```

Import in your component:

```tsx
import "@/styles/components/carousel.css"
```

## 🎨 Customizing Colors

Modify color values in `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      brand: {
        50: '#f0f9ff',
        100: '#e0f2fe',
        // ... more shades
      }
    }
  }
}
```

Then use: `bg-brand-500`, `text-brand-700`, etc.

## 📱 Responsive Design

Use Tailwind's responsive prefixes:

- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up
- `xl:` - 1280px and up
- `2xl:` - 1536px and up

Example:

```tsx
<div className="text-sm sm:text-base md:text-lg lg:text-xl">
  Responsive text
</div>
```

## 🔧 Best Practices

1. **Use Tailwind first** - Prefer utility classes over custom CSS
2. **Keep it DRY** - Extract repeated patterns to utilities
3. **Use design tokens** - Reference CSS variables for consistency
4. **Mobile-first** - Write base styles for mobile, enhance for desktop
5. **Avoid inline styles** - Use Tailwind classes instead
6. **Namespace custom classes** - Prefix with project name

## 🚫 What NOT to Do

```css
/* ❌ Don't create component-specific global styles */
.my-button {
  background: blue;
  padding: 10px;
}

/* ✅ Instead, use Tailwind in the component */
<button className="bg-blue-500 px-2.5 py-2">
  Button
</button>
```

## 📚 Resources

- [Tailwind Documentation](https://tailwindcss.com/docs)
- [Tailwind Custom Properties](https://tailwindcss.com/docs/customizing-colors)
- [CSS Custom Properties (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
