import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Process — From Idea to Launch",
  description:
    "Fast discovery, build, iterate, ship. Our clear process takes your idea from concept to launch with velocity and precision.",
  alternates: {
    canonical: "https://growthbae.com/process",
  },
  openGraph: {
    title: "Our Process — From Idea to Launch",
    description:
      "Fast discovery, build, iterate, ship. Our clear process takes your idea from concept to launch with velocity and precision.",
    url: "https://growthbae.com/process",
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
    title: "Our Process — From Idea to Launch",
    description:
      "Fast discovery, build, iterate, ship. Our clear process takes your idea from concept to launch with velocity and precision.",
    images: ["/og-image.png"],
  },
}

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-[#F5F1E5]">
      <main id="main-content" className="pt-32">
        <h1 className="container mx-auto px-4 text-4xl font-bold text-[#004225] md:text-5xl">
          Our Process: From Idea to Launch
        </h1>
      </main>
    </div>
  )
}

