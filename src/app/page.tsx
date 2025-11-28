"use client"

import { Header } from "@/components/layout/header"
import { HeroSection } from "@/components/sections/hero-section"
import { MarqueeSection } from "@/components/sections/marquee-section"
import { ProcessSection } from "@/components/sections/process-section"
import { ServicesSection } from "@/components/sections/services-section"
import { SpeedMoatSection } from "@/components/sections/speed-moat-section"
import { TextMarqueeSection } from "@/components/sections/text-marquee-section"
import { WhyGrowthbaeSection } from "@/components/sections/why-growthbae-section"

/**
 * GBAE Home Page
 * Layout: Header > Hero > Work Marquee > Why Growthbae > Process > Text Marquee > Services > Speed Moat
 * Semantic HTML structure with proper section hierarchy
 */
export default function Home() {
  return (
    <div className="flex min-h-screen w-full max-w-full flex-col overflow-x-hidden bg-secondary">
      <Header />
      <main className="w-full flex-1 overflow-x-hidden">
        <HeroSection />
        <MarqueeSection />
        <WhyGrowthbaeSection />
        <ProcessSection />
        <TextMarqueeSection />
        <ServicesSection />
        <SpeedMoatSection />
      </main>
    </div>
  )
}
