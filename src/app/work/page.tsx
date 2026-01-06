import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Selected Work & Case Studies",
  description:
    "Projects we've shipped, case studies, and outcomes. See the craftsmanship behind MVPs and AI systems built for real founders.",
  alternates: {
    canonical: "https://growthbae.com/work",
  },
  openGraph: {
    title: "Selected Work & Case Studies",
    description:
      "Projects we've shipped, case studies, and outcomes. See the craftsmanship behind MVPs and AI systems built for real founders.",
    url: "https://growthbae.com/work",
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
    title: "Selected Work & Case Studies",
    description:
      "Projects we've shipped, case studies, and outcomes. See the craftsmanship behind MVPs and AI systems built for real founders.",
    images: ["/og-image.png"],
  },
}

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-[#F5F1E5]">
      <main id="main-content" className="pt-32">
        <h1 className="container mx-auto px-4 text-4xl font-bold text-[#004225] md:text-5xl">
          Selected Work & Case Studies
        </h1>
      </main>
    </div>
  )
}

