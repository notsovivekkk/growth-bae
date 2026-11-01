import type { Metadata } from "next"
import { siteConfig } from "@/config/site"
import "./aeo.css"
import { BookingProvider } from "./_components/aeo-booking"
import { AeoNav } from "./_components/aeo-nav"
import { AeoHero } from "./_components/aeo-hero"
import { AeoEnginesMarquee } from "./_components/aeo-engines-marquee"
import { AeoProblem } from "./_components/aeo-problem"
import { AeoWhatChanges } from "./_components/aeo-what-changes"
import { AeoHowItWorks } from "./_components/aeo-how-it-works"
import { AeoWhySkipped } from "./_components/aeo-why-skipped"
import { AeoPromise } from "./_components/aeo-promise"
import { AeoStart } from "./_components/aeo-start"
import { AeoFounder } from "./_components/aeo-founder"
import { AeoFaq } from "./_components/aeo-faq"
import { AeoFinalCta } from "./_components/aeo-final-cta"
import { AeoFooter } from "./_components/aeo-footer"
import { FAQS } from "./_components/aeo-faqs"

const TITLE = "AEO: Get your brand recommended by AI"
const DESCRIPTION =
  "When people ask ChatGPT or Google what to buy, we put your brand in the answer."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/aeo" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${siteConfig.url}/aeo`,
  },
  twitter: { title: TITLE, description: DESCRIPTION },
}

// An AEO page should practice what it sells: give AI clean, quotable facts.
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Answer Engine Optimization (AEO)",
    serviceType: "AEO",
    description: DESCRIPTION,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    url: `${siteConfig.url}/aeo`,
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
]

export default function AeoPage() {
  return (
    <div className="aeo">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Every CTA opens the same Calendly popup */}
      <BookingProvider>
        <AeoNav />
        <main id="main-content">
          <AeoHero />
          <AeoEnginesMarquee />
          <AeoProblem />
          <AeoWhatChanges />
          <AeoHowItWorks />
          <AeoWhySkipped />
          <AeoPromise />
          <AeoStart />
          <AeoFounder />
          <AeoFaq />
          <AeoFinalCta />
        </main>
        <AeoFooter />
      </BookingProvider>
    </div>
  )
}
