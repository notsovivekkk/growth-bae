# UI Components (ShadCN)

This directory contains ShadCN UI components installed via the CLI.

## 🚀 Adding Components

Use the ShadCN CLI to add components:

```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add input
npx shadcn-ui@latest add form
```

## 📦 Available Components

Visit [ui.shadcn.com](https://ui.shadcn.com) for the full component library.

Popular components:

- **Button** - Interactive button with variants
- **Card** - Content container with header/footer
- **Dialog** - Modal dialog overlay
- **Input** - Form input field
- **Form** - Form wrapper with validation
- **Dropdown Menu** - Dropdown menu with items
- **Tabs** - Tabbed interface
- **Toast** - Notification toast

## 🎨 Customization

All components use CSS variables defined in `src/styles/globals.css`.
Modify the design tokens to customize the look and feel.

## 💡 Usage Example

```typescript
import { Button } from "@/components/ui/button"

export function Example() {
  return (
    <Button variant="default" size="lg">
      Click me
    </Button>
  )
}
```

## ⚠️ Important Notes

- **Do not manually edit** these files unless you know what you're doing
- These components are **copied into your project**, not installed as dependencies
- You have **full control** to customize them as needed
- Always use the `cn()` utility from `@/lib/utils` for className merging
