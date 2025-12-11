"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import Image from "next/image"

/**
 * Works Section
 * Sticky stacking cards for portfolio items
 * Four works: Vantage Trading, Lumina Health, EcoSphere, Propel AI
 * Browser frame style images
 * Tags and external link buttons
 * Keep placeholder images from provided code
 */

const WORKS = [
  {
    id: 1,
    title: "Vantage Trading",
    category: "Fintech MVP",
    description:
      "A high-frequency trading dashboard built for data-heavy institutional investors. We reduced latency by 40% and designed a clutter-free interface that processes millions of data points in real-time.",
    image:
      "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&q=80&w=1600&h=1200",
    tags: ["MVP Development", "React", "Real-time Data"],
    link: "#",
  },
  {
    id: 2,
    title: "Lumina Health",
    category: "Telehealth Platform",
    description:
      "End-to-end telemedicine platform connecting patients with specialists. Features include secure video conferencing, automated prescription routing, and AI-assisted symptom checking.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1600&h=1200",
    tags: ["Web Design", "Mobile App", "HIPAA Compliant"],
    link: "#",
  },
  {
    id: 3,
    title: "EcoSphere",
    category: "SaaS Marketplace",
    description:
      "A multi-vendor marketplace for sustainable supply chains. We built the complete infrastructure, from vendor onboarding automation to a complex carbon-offset calculation engine.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600&h=1200",
    tags: ["Web Development", "Automation", "SaaS"],
    link: "#",
  },
  {
    id: 4,
    title: "Propel AI",
    category: "Marketing Automation",
    description:
      "An AI-powered content generation engine for enterprise marketing teams. We built custom LLM pipelines to generate on-brand social copy, blog posts, and email newsletters at scale.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600&h=1200",
    tags: ["Generative AI", "Python", "Enterprise"],
    link: "#",
  },
]

export function WorksSection() {
  return (
    <Section className="bg-[#F5F1E5] !pb-0 !pt-4 md:!pt-6" id="works">
      <Container>
        {/* Header Copy */}
        <div className="mb-8 text-center md:mb-16 lg:mb-24">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#004225]/10 bg-white/10 px-3 py-1.5 text-xs font-medium text-[#004225] backdrop-blur-md md:mb-6 md:px-4 md:py-2 md:text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            SELECTED SHIPMENTS
          </div>
          <h2 className="mb-4 text-2xl font-bold leading-tight text-[#004225] md:mb-6 md:text-3xl lg:text-5xl">
            We don't just build. <br />
            We launch{" "}
            <span className="font-serif italic text-[#0B6E4F]">
              category leaders.
            </span>
          </h2>
          <p className="mx-auto max-w-xl text-sm text-[#004225]/60 md:text-base">
            From back-of-napkin sketches to revenue-generating products. Here is
            a selection of MVPs and systems we've shipped recently.
          </p>
        </div>

        {/* Stacking Cards Container */}
        <div className="relative flex flex-col pb-0">
          {WORKS.map((work, index) => (
            <div
              key={work.id}
              className="mb-3 last:mb-0"
              style={{
                // Dynamic stacking offset calculation - only on desktop
                ...(index < WORKS.length - 1 ? {} : {}),
              }}
            >
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, margin: "-10%" }}
                className="overflow-hidden rounded-3xl border border-[#004225]/5 bg-white p-3 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.1)] md:p-5 lg:p-6"
              >
                <div className="grid items-center gap-3 md:gap-4 lg:grid-cols-2 lg:gap-8">
                  {/* Image Side (Browser Frame Style) */}
                  <div className="group relative aspect-[4/3] min-h-[160px] overflow-hidden rounded-xl border border-[#004225]/10 bg-[#F5F1E5] md:min-h-[200px] lg:aspect-auto lg:h-full lg:min-h-[240px]">
                    {/* Browser Dots */}
                    <div className="absolute left-2 top-2 z-10 flex gap-1.5 md:left-3 md:top-3 lg:left-4 lg:top-4">
                      <div className="h-2 w-2 rounded-full bg-[#FF5F56] md:h-2.5 md:w-2.5 lg:h-3 lg:w-3" />
                      <div className="h-2 w-2 rounded-full bg-[#FFBD2E] md:h-2.5 md:w-2.5 lg:h-3 lg:w-3" />
                      <div className="h-2 w-2 rounded-full bg-[#27C93F] md:h-2.5 md:w-2.5 lg:h-3 lg:w-3" />
                    </div>

                    {/* Image */}
                    <Image
                      src={work.image}
                      alt={work.title}
                      fill
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  {/* Content Side */}
                  <div className="flex flex-col justify-center">
                    <div className="mb-3 flex items-center justify-between md:mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#0B6E4F] md:text-xs">
                        {work.category}
                      </span>
                      <a
                        href={work.link}
                        className="group flex h-8 w-8 items-center justify-center rounded-full border border-[#004225]/10 text-[#004225] transition-all duration-300 hover:bg-[#004225] hover:text-white md:h-10 md:w-10 lg:h-12 lg:w-12"
                      >
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:rotate-45 md:h-4 md:w-4 lg:h-5 lg:w-5" />
                      </a>
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-[#004225] md:mb-3 md:text-xl lg:text-2xl">
                      {work.title}
                    </h3>
                    <p className="mb-3 text-xs leading-relaxed text-[#004225]/70 md:mb-4 md:text-sm lg:mb-5 lg:text-[15px]">
                      {work.description}
                    </p>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 md:gap-2 lg:gap-3">
                      {work.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="rounded-full border border-[#004225]/5 bg-[#F5F1E5] px-2 py-0.5 text-[10px] font-medium text-[#004225] md:px-3 md:py-1 md:text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
