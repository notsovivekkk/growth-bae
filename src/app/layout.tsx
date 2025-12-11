import type { Metadata } from "next"
import localFont from "next/font/local"
import { Inter, Playfair_Display } from "next/font/google"
import "@/styles/globals.css"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

/**
 * GBAE Design System - Root Layout
 * Applies global design tokens:
 * - Aktiv Grotesk typography (loaded from public/fonts)
 * - Soft Cream background (#F5F1E5)
 * - Deep Green text (#004225)
 * - 8px grid spacing system
 */

// Load Aktiv Grotesk from uploaded fonts
// Path is relative to src/app directory
const aktivGrotesk = localFont({
  src: [
    {
      path: "../../public/fonts/aktiv-grotesk/AktivGrotesk-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/aktiv-grotesk/AktivGrotesk-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/aktiv-grotesk/AktivGrotesk-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-aktiv",
  display: "swap",
  fallback: ["Inter", "system-ui", "sans-serif"],
})

// Fallback font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "700"],
})

// Playfair Display for serif/italic text
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "600"],
  style: ["normal", "italic"],
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Growth",
    "Marketing",
    "Strategy",
    "Case Studies",
    "Premium",
    "Next.js",
    "TypeScript",
  ],
  authors: [
    {
      name: "GrowthBae",
      url: siteConfig.url,
    },
  ],
  creator: "GrowthBae",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@growthbae",
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          // GBAE Design System
          "min-h-screen bg-secondary text-primary",
          "font-sans antialiased",
          // Smooth transitions for color and opacity
          "transition-soft",
          aktivGrotesk.variable,
          inter.variable,
          playfairDisplay.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}
