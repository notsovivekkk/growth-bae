# Public Assets

This directory contains static assets served directly by Next.js.

## 📁 Recommended Structure

```
public/
├── images/
│   ├── logo.svg
│   ├── hero-image.png
│   └── ...
├── fonts/
│   └── custom-font.woff2
├── icons/
│   ├── icon-192x192.png
│   └── icon-512x512.png
├── favicon.ico
└── site.webmanifest
```

## 🎯 Usage

Files in `public/` are served at the root URL:

```tsx
// ✅ Correct
<img src="/images/logo.svg" alt="Logo" />

// ❌ Incorrect
<img src="public/images/logo.svg" alt="Logo" />
```

## 🖼️ Images

For optimized images, use Next.js `<Image>` component:

```tsx
import Image from "next/image"

export function Logo() {
  return <Image src="/images/logo.svg" alt="Logo" width={100} height={40} />
}
```

## 📱 Web App Manifest

Add `site.webmanifest` for PWA support:

```json
{
  "name": "GrowthBae",
  "short_name": "GrowthBae",
  "icons": [
    {
      "src": "/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ],
  "theme_color": "#000000",
  "background_color": "#ffffff",
  "display": "standalone"
}
```

## 🎨 Favicons

Add these favicon files:

- `favicon.ico` - Standard favicon
- `icon.svg` - Modern SVG icon
- `apple-touch-icon.png` - iOS home screen icon

## ⚠️ Important Notes

- Files are **cached by default**
- Use **hashed filenames** for cache busting: `logo-v2.svg`
- **Don't store sensitive files** here
- **Optimize images** before adding (use tools like ImageOptim)
- Consider using **Next.js Image Optimization** API for dynamic images
