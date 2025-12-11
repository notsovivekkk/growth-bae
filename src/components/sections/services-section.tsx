"use client"

import { Zap, LayoutTemplate, Code2, Smartphone, Sparkles } from "lucide-react"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import React from "react"

/**
 * Services Section
 * Badge: "3X FASTER EXECUTION"
 * Headline with italic "faaaast" and SVG underline
 * Four service cards: Web Design, Web Development, Mobile App Development, AI Systems & Automation
 * Grid layout with hover effects
 */

const servicesData = [
  {
    title: "Web Design",
    icon: <LayoutTemplate />,
    description: "Crafting pixel-perfect, user-centric interfaces.",
  },
  {
    title: "Web Development",
    icon: <Code2 />,
    description: "Scalable, high-performance web applications.",
  },
  {
    title: "Mobile App Development",
    icon: <Smartphone />,
    description: "Native and cross-platform mobile experiences.",
  },
  {
    title: "AI Systems & Automation",
    icon: <Sparkles />,
    description: "Intelligent workflows to supercharge efficiency.",
  },
]

export function ServicesSection() {
  return (
    <Section
      className="bg-[#F5F1E5] !pb-4 !pt-8 md:!pb-6 md:!pt-12"
      id="services"
    >
      <Container className="text-center">
        {/* Badge */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#004225]/5 bg-white px-4 py-1.5 text-xs font-bold tracking-widest text-[#004225] shadow-sm">
            <Zap className="h-3 w-3 fill-[#004225] text-[#004225]" /> 3X FASTER
            EXECUTION
          </div>
        </div>

        {/* Headline */}
        <h2 className="mb-4 text-2xl font-bold leading-tight text-[#004225] md:text-4xl lg:text-5xl">
          We build every kind of <br />
          MVP <span className="font-serif italic text-[#0B6E4F]">faaaast</span>
        </h2>

        {/* Subtext */}
        <p className="mx-auto mb-8 max-w-2xl text-sm text-[#004225]/60 md:mb-16 md:text-lg">
          4+ years of industry experience in building, shaping and shipping
          products.
        </p>

        {/* Improved Showcase Grid */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-2">
          {servicesData.map((service, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-xl border border-[#004225]/5 bg-white p-4 text-left md:rounded-[2rem] md:p-6"
            >
              {/* Background Glow */}
              <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-[#0B6E4F]/5 blur-3xl transition-colors group-hover:bg-[#0B6E4F]/10 md:h-32 md:w-32" />
              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-3 flex items-start justify-between md:mb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#F5F1E5] text-[#004225] md:h-10 md:w-10 md:rounded-2xl">
                    {React.cloneElement(service.icon, {
                      className: "w-4 h-4 md:w-5 md:h-5",
                    })}
                  </div>
                  {/* Decorative Dot instead of Arrow */}
                  <div className="h-1.5 w-1.5 rounded-full bg-[#0B6E4F]/20 transition-colors group-hover:bg-[#0B6E4F] md:h-2 md:w-2" />
                </div>

                <h3 className="mb-1.5 text-lg font-bold text-[#004225] md:mb-2 md:text-xl">
                  {service.title}
                </h3>
                <p className="text-xs leading-relaxed text-[#004225]/60 md:text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
