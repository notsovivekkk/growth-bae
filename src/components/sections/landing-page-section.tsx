"use client"

import { motion } from "framer-motion"
import { MousePointerClick, Layers, Timer, ArrowRight } from "lucide-react"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import Image from "next/image"
import Link from "next/link"
import React from "react"

/**
 * Landing Page Section
 * Headline: "Landing Pages That Actually Convert"
 * Feature pills: Conversion-Focused Design, Webflow/Framer Development, Ready in Days
 * Image marquee with landing page examples
 * Keep placeholder images from provided code
 */

const LANDING_PAGE_EXAMPLES = [
  "/images/lp1.jpg",
  "/images/lp2.jpg",
  "/images/lp3.jpg",
  "/images/lp4.png",
  "/images/lp5.png",
  "/images/lp6.png",
]

const features = [
  {
    text: "Conversion-Focused Design",
    icon: <MousePointerClick className="h-4 w-4" />,
  },
  {
    text: "Webflow / Framer Development",
    icon: <Layers className="h-4 w-4" />,
  },
  { text: "Ready in Days, Not Months", icon: <Timer className="h-4 w-4" /> },
]

export function LandingPageSection() {
  return (
    <Section className="bg-[#F5F1E5] !pb-4 !pt-4 md:!pb-6 md:!pt-6">
      <Container>
        <div className="mb-4 flex flex-col items-start justify-between gap-4 md:mb-6 md:gap-6 lg:mb-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl flex-1">
            <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-[#004225]/10 bg-white/10 px-2.5 py-0.5 text-[10px] font-medium text-[#004225] backdrop-blur-md md:mb-4 md:px-3 md:py-1 md:text-xs">
              <span className="relative flex h-1.5 w-1.5 md:h-2 md:w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-full w-full rounded-full bg-green-500"></span>
              </span>
              Landing Page Design
            </div>
            <h2 className="mb-3 text-2xl font-bold leading-tight text-[#004225] md:mb-4 md:text-3xl lg:text-4xl xl:text-5xl">
              Landing Pages That Actually{" "}
              <span className="font-serif italic text-[#0B6E4F]">Convert.</span>
            </h2>
            <p className="mb-4 max-w-2xl text-sm leading-relaxed text-[#004225]/70 md:mb-6 md:text-base">
              Whether it's a waitlist, a launch, or a pitch, we craft landing
              pages with speed, performance, and precision. We design for
              clarity, build to convert.
            </p>

            {/* Feature Pills - Made much smaller */}
            <div className="mb-4 flex flex-wrap gap-1.5 md:mb-0 md:gap-2">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-1 rounded-full border border-[#004225]/10 bg-white px-2 py-0.5 text-[10px] font-medium text-[#004225] shadow-sm md:px-2 md:py-0.5 md:text-xs"
                >
                  {React.cloneElement(feature.icon, {
                    className: "w-2.5 h-2.5 md:w-3 md:h-3",
                  })}
                  <span className="whitespace-nowrap">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
          <Link
            href="#"
            className="inline-flex !h-9 shrink-0 items-center justify-center gap-1.5 rounded-full bg-[#004225] !px-5 text-xs font-medium text-[#F5F1E5] shadow-lg transition-all hover:scale-105 hover:bg-[#0B6E4F] md:!h-10 md:!px-6 md:text-sm lg:!h-11 lg:!px-8"
          >
            Build a landing page{" "}
            <ArrowRight className="h-3.5 w-3.5 md:h-4 md:w-4" />
          </Link>
        </div>

        {/* Landing Page Image Marquee */}
        <div className="w-full overflow-hidden py-3 md:py-4">
          <div className="group relative flex overflow-x-hidden px-4">
            {/* Left fade gradient */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-[#F5F1E5] to-transparent" />
            {/* Right fade gradient */}
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-[#F5F1E5] to-transparent" />

            <div className="animate-marquee flex gap-4 whitespace-nowrap">
              {[
                ...LANDING_PAGE_EXAMPLES,
                ...LANDING_PAGE_EXAMPLES,
                ...LANDING_PAGE_EXAMPLES,
              ].map((src, i) => (
                <div
                  key={i}
                  className="relative h-[140px] w-[200px] flex-shrink-0 cursor-pointer overflow-hidden rounded-xl border border-[#004225]/10 shadow-md transition-transform duration-700 hover:scale-110 md:h-[180px] md:w-[240px] md:rounded-2xl lg:h-[210px] lg:w-[280px]"
                >
                  <Image
                    src={src}
                    alt="Landing Page Example"
                    fill
                    className="h-full w-full object-cover"
                    sizes="(max-width: 768px) 200px, 280px"
                  />
                </div>
              ))}
            </div>
            {/* Duplicated marquee for seamless loop */}
            <div className="animate-marquee2 absolute left-full top-0 flex gap-4 whitespace-nowrap pl-4">
              {[...LANDING_PAGE_EXAMPLES, ...LANDING_PAGE_EXAMPLES].map(
                (src, i) => (
                  <div
                    key={`dup-${i}`}
                    className="relative h-[140px] w-[200px] flex-shrink-0 cursor-pointer overflow-hidden rounded-xl border border-[#004225]/10 shadow-md transition-transform duration-700 hover:scale-110 md:h-[180px] md:w-[240px] md:rounded-2xl lg:h-[210px] lg:w-[280px]"
                  >
                    <Image
                      src={src}
                      alt="Landing Page Example"
                      fill
                      className="h-full w-full object-cover"
                      sizes="(max-width: 768px) 200px, 280px"
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
