import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "MVP & AI Development Services",
  description:
    "We build MVPs, proof-of-concepts, and AI systems for founders and startups. Fast development, clean code, production-ready products.",
  alternates: {
    canonical: "https://growthbae.com/services",
  },
  openGraph: {
    title: "MVP & AI Development Services",
    description:
      "We build MVPs, proof-of-concepts, and AI systems for founders and startups. Fast development, clean code, production-ready products.",
    url: "https://growthbae.com/services",
    siteName: "Growthbae",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Growthbae",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MVP & AI Development Services",
    description:
      "We build MVPs, proof-of-concepts, and AI systems for founders and startups. Fast development, clean code, production-ready products.",
    images: ["/og-image.png"],
  },
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#F5F1E5]">
      <main id="main-content" className="pt-32">
        <h1 className="container mx-auto px-4 text-4xl font-bold text-[#004225] md:text-5xl">
          MVP & AI Development Services
        </h1>
      </main>
    </div>
  )
}

