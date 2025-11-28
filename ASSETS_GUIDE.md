# 📁 Assets Upload Guide

Where to upload logos, fonts, and other static assets in the GrowthBae project.

## 📂 Folder Structure

Upload your assets to the `public/` directory following this structure:

```
public/
├── images/              # Logos, images, graphics
│   ├── logo.svg        # Main logo
│   ├── logo-dark.svg   # Dark variant
│   ├── logo-light.svg  # Light variant
│   └── hero-image.png  # Hero section images
│
├── fonts/              # Custom font files
│   ├── aktiv-grotesk-regular.woff2
│   ├── aktiv-grotesk-medium.woff2
│   ├── aktiv-grotesk-bold.woff2
│   └── aktiv-grotesk-variable.woff2
│
└── icons/              # Favicons, app icons
    ├── favicon.ico
    ├── icon.svg
    └── apple-touch-icon.png
```

## 🎨 Logos

### Where to Upload

**`public/images/`**

### Recommended Files

- `logo.svg` - Main logo (SVG preferred for scalability)
- `logo-dark.svg` - Dark variant if needed
- `logo-light.svg` - Light variant if needed
- `logo-icon.svg` - Icon-only version

### Usage in Code

```tsx
import Image from "next/image"

// In components
;<Image src="/images/logo.svg" alt="GrowthBae" width={120} height={40} />

// Or update Logo component
import { Logo } from "@/components/ui/logo"
// Edit src/components/ui/logo.tsx to use your logo
```

## 🔤 Fonts

### Where to Upload

**`public/fonts/`**

### Supported Formats

- `.woff2` (preferred - best compression)
- `.woff` (fallback)
- `.ttf` (not recommended for web)

### How to Use Custom Fonts

#### Option 1: Using `next/font/local` (Recommended)

1. Upload font files to `public/fonts/`
2. Update `src/app/layout.tsx`:

```typescript
import localFont from "next/font/local"

const aktivGrotesk = localFont({
  src: [
    {
      path: "../public/fonts/aktiv-grotesk-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/aktiv-grotesk-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/aktiv-grotesk-bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-aktiv",
  display: "swap",
})

// Then use in body className
<body className={cn("font-sans", aktivGrotesk.variable)}>
```

#### Option 2: CSS @font-face

1. Upload fonts to `public/fonts/`
2. Add to `src/styles/globals.css`:

```css
@font-face {
  font-family: "Aktiv Grotesk";
  src: url("/fonts/aktiv-grotesk-regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Aktiv Grotesk";
  src: url("/fonts/aktiv-grotesk-medium.woff2") format("woff2");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Aktiv Grotesk";
  src: url("/fonts/aktiv-grotesk-bold.woff2") format("woff2");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
```

3. Update `tailwind.config.ts`:

```typescript
fontFamily: {
  sans: ["Aktiv Grotesk", "Inter", "system-ui", "sans-serif"],
}
```

## 🖼️ Images

### Where to Upload

**`public/images/`**

### Best Practices

- Use SVG for logos and icons
- Optimize PNG/JPG before uploading
- Use descriptive filenames: `hero-case-study-1.jpg`
- Consider WebP format for better compression

### Usage

```tsx
import Image from "next/image"
;<Image
  src="/images/hero-image.jpg"
  alt="Case study"
  width={1200}
  height={800}
  className="rounded-lg"
/>
```

## 🎯 Icons & Favicons

### Where to Upload

**`public/icons/`** or root of `public/`

### Required Files

- `favicon.ico` - Browser tab icon
- `icon.svg` - Modern SVG favicon
- `apple-touch-icon.png` - iOS home screen (180x180px)

### Update in `src/app/layout.tsx`

```typescript
icons: {
  icon: "/favicon.ico",
  apple: "/apple-touch-icon.png",
}
```

## 📋 Quick Reference

| Asset Type | Upload To        | Example Path                 | Usage                              |
| ---------- | ---------------- | ---------------------------- | ---------------------------------- |
| **Logos**  | `public/images/` | `/images/logo.svg`           | `<Image src="/images/logo.svg" />` |
| **Fonts**  | `public/fonts/`  | `/fonts/aktiv-grotesk.woff2` | Configure in `layout.tsx`          |
| **Images** | `public/images/` | `/images/hero.jpg`           | `<Image src="/images/hero.jpg" />` |
| **Icons**  | `public/icons/`  | `/icons/favicon.ico`         | Auto-detected by Next.js           |

## ⚠️ Important Notes

### DO ✅

- Upload to `public/` directory
- Use SVG for logos when possible
- Optimize images before uploading
- Use `.woff2` format for fonts
- Reference with `/` (not `/public/`)

### DON'T ❌

- Don't reference `public/` in paths: use `/images/logo.svg` not `/public/images/logo.svg`
- Don't upload large unoptimized images
- Don't store sensitive files in `public/`
- Don't use `.ttf` fonts (use `.woff2`)

## 🔧 After Uploading

### For Logos

1. Update `src/components/ui/logo.tsx` to use your logo
2. Or use `<Image>` component directly

### For Fonts

1. Update `src/app/layout.tsx` with `next/font/local`
2. Or add `@font-face` to `src/styles/globals.css`
3. Update `tailwind.config.ts` fontFamily

### For Images

1. Use Next.js `<Image>` component
2. Reference as `/images/filename.jpg`

## 📚 Related Files

- **Layout:** `src/app/layout.tsx` - Font configuration
- **Logo Component:** `src/components/ui/logo.tsx` - Logo usage
- **Global Styles:** `src/styles/globals.css` - Font-face declarations
- **Tailwind Config:** `tailwind.config.ts` - Font family settings

---

**Upload your assets to `public/` and reference them with `/` paths!**
