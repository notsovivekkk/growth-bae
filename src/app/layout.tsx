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
  metadataBase: new URL("https://growthbae.com"),
  title: {
    default: "GrowthBae | Build MVPs & Systems that Scale",
    template: "%s | GrowthBae",
  },
  description:
    "The founder-first build studio. We turn back-of-napkin sketches into revenue-generating products with velocity. Web Design, Mobile Apps, and AI Systems.",
  keywords: [
    "GrowthBae",
    "MVP Builder",
    "Product Studio",
    "Web Development",
    "Mobile App Development",
    "AI Automation",
    "Startup Agency",
    "Founder Build Studio",
  ],
  authors: [{ name: "GrowthBae Team" }],
  creator: "GrowthBae",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://growthbae.com",
    title: "GrowthBae | Build MVPs & Systems that Scale",
    description:
      "Stop sitting on your idea. We help founders build, ship, and scale faster. Velocity, not just speed.",
    siteName: "GrowthBae",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GrowthBae - Founder Build Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GrowthBae | Build MVPs & Systems that Scale",
    description:
      "The founder-first build studio. We turn ideas into winning products with velocity.",
    images: ["/og-image.png"],
    creator: "@growthbae",
  },
  icons: {
    icon: [
      {
        url: "/images/favicon_io/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/images/favicon_io/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      { url: "/images/favicon_io/favicon.ico", sizes: "any" },
    ],
    apple: [
      {
        url: "/images/favicon_io/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/images/favicon_io/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/images/favicon_io/android-chrome-512x512.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
}

// Structured data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/logo.JPG`,
  description: siteConfig.description,
  sameAs: [
    siteConfig.links.twitter,
    siteConfig.links.linkedin,
    siteConfig.links.github,
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-[#004225] focus:px-4 focus:py-2 focus:text-[#F5F1E5] focus:outline-none focus:ring-2 focus:ring-[#0B6E4F] focus:ring-offset-2"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
