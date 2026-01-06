"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero-section"
import Link from "next/link"
import { MarqueeSection } from "@/components/sections/marquee-section"
import { WhyGrowthbaeSection } from "@/components/sections/why-growthbae-section"
import { ProcessSection } from "@/components/sections/process-section"
import { TextMarqueeSection } from "@/components/sections/text-marquee-section"
import { ServicesSection } from "@/components/sections/services-section"
import { WorksSection } from "@/components/sections/works-section"
import { LandingPageSection } from "@/components/sections/landing-page-section"
import { FAQSection } from "@/components/sections/faq-section"

/**
 * GBAE Home Page
 * Layout: Header > Hero > ImageMarquee > WhyUs > Process > TextMarquee > Services > Works > LandingPage > FAQ > Footer
 * Semantic HTML structure with proper section hierarchy
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F1E5] font-sans selection:bg-[#0B6E4F] selection:text-white">
      <Header />
      <main id="main-content">
        <HeroSection />
        <MarqueeSection />
        <WhyGrowthbaeSection />
        <ProcessSection />
        <TextMarqueeSection />
        <ServicesSection />
        <WorksSection />
        <LandingPageSection />
        <FAQSection />
        {/* Quick Links Section */}
        <section className="border-t border-[#004225]/5 bg-[#F5F1E5] py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link
                href="/services"
                className="font-medium text-[#004225]/80 transition-colors hover:text-[#0B6E4F]"
              >
                Services
              </Link>
              <Link
                href="/process"
                className="font-medium text-[#004225]/80 transition-colors hover:text-[#0B6E4F]"
              >
                Process
              </Link>
              <Link
                href="/work"
                className="font-medium text-[#004225]/80 transition-colors hover:text-[#0B6E4F]"
              >
                Work
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
