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
    title: "Grytt",
    category: "Fitness Accountability OS",
    description:
      "A performance-first fitness operating system designed to close the loop between serious lifters and online trainers. We built a friction-free logging experience that replaces bloated apps and spreadsheets, giving trainers a clean command center to turn daily client habits into scalable data.",
    image: "/images/w1.png",
    tags: ["MVP Development", "Product Design", "Full-Stack Build"],
    link: "#",
  },
  {
    id: 2,
    title: "Enterprise Agentic Architectures",
    category: "Cross-Vertical AI Infrastructure",
    description:
      "A suite of production-grade agentic workflows deployed for legal and fitness ecosystems. We engineered robust orchestration layers—spanning document ingestion, multimodal RAG, and planner-supervisor controls—to prevent drift and ensure stability across complex, long-running tasks.",
    image: "/images/w4.png",
    tags: ["Multimodal RAG", "Agent Orchestration", "System Architecture"],
    link: "#",
  },
  {
    id: 3,
    title: "Elite Project Group",
    category: "Global Sports Agency",
    description:
      "A definitive digital presence for a top-5 global football agency. We handled the end-to-end journey from high-impact UI/UX design to pixel-perfect Webflow development, delivering a platform that matches the prestige of their world-class talent roster.",
    image: "/images/w2.png",
    tags: ["Webflow Development", "UI/UX Design", "Sports Tech"],
    link: "https://eliteprojectgroup.co.uk/",
  },
  {
    id: 4,
    title: "Zash",
    category: "On-Demand Detailing App",
    description:
      "We engineered the complete brand and mobile ecosystem for Zash, an on-demand car detailing service. From the logo and identity to the immaculate mobile app, we created a seamless user experience that reflects their speed and precision—delivering a clean interface for a clean service.",
    image: "/images/w3.jpg",
    tags: ["Mobile App Development", "Brand Identity", "End-to-End Build"],
    link: "https://growthbae.com/works/zash",
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
          <h2 className="mb-4 text-4xl font-bold leading-tight text-[#004225] md:mb-6 md:text-3xl lg:text-5xl">
            Built with the care of a{" "}
            <span className="font-serif italic text-[#0B6E4F]">
              co-founder.
            </span>
          </h2>
          <p className="mx-auto max-w-xl text-sm text-[#004225]/60 md:text-base">
            Handing over your vision is difficult. We honor that trust by
            shipping clean, resilient products that don't just look good, but
            survive the real world.
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
