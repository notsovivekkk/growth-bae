"use client"

import { motion } from "framer-motion"
import { Zap, BarChart3, Code2, Rocket } from "lucide-react"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"

/**
 * Process Section
 * Sticky stacking cards effect
 * Four steps: Discover, Strategize, Build, Deliver
 * Green gradient cards with decorative graphics
 * Mobile: Stacked vertically without sticky
 */

const PROCESS_STEPS = [
  {
    id: 1,
    title: "Discover",
    description:
      "We kick things off with a deep dive into your vision. We identify user needs, analyze market gaps, and validate assumptions before writing a single line of code.",
    icon: <Zap className="h-4 w-4" />,
    tags: ["Market Research", "Competitor Analysis"],
  },
  {
    id: 2,
    title: "Strategize",
    description:
      "We map out the core feature set, prioritizing value over volume. We align the technical architecture with your business goals to ensure scalability from day one.",
    icon: <BarChart3 className="h-4 w-4" />,
    tags: ["Tech Stack Selection", "Feature Prioritization (MoSCoW)"],
  },
  {
    id: 3,
    title: "Build",
    description:
      "We build with AI and Cursor to shorten timelines. By removing repetitive work, we turn ideas into production-ready products far quicker than most teams can.",
    icon: <Code2 className="h-4 w-4" />,
    tags: ["2x Velocity", "AI Assisted"],
  },
  {
    id: 4,
    title: "Deliver",
    description:
      "We don't just hand over code; we ensure a smooth deployment. We monitor the launch, handle initial feedback, and set you up with documentation for future scaling.",
    icon: <Rocket className="h-4 w-4" />,
    tags: ["Launch", "Optimization", "Reporting"],
  },
]

// Animation variants for each card
const cardAnimations = [
  {
    // Discover - slide up
    initial: { y: 50, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { duration: 0.5 },
  },
  {
    // Strategize - slide from left
    initial: { x: -50, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    transition: { duration: 0.5 },
  },
  {
    // Build - slide from right
    initial: { x: 50, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    transition: { duration: 0.5 },
  },
  {
    // Deliver - fade in with scale
    initial: { scale: 0.9, opacity: 0 },
    whileInView: { scale: 1, opacity: 1 },
    transition: { duration: 0.5 },
  },
]

function ProcessCard({
  step,
  index,
}: {
  step: (typeof PROCESS_STEPS)[0]
  index: number
}) {
  const animation = cardAnimations[index]

  return (
    <div className="mb-3 last:mb-0 md:sticky md:top-24 md:mb-6 lg:top-32 lg:mb-12">
      <motion.div
        initial={animation.initial}
        whileInView={animation.whileInView}
        transition={animation.transition}
        viewport={{ once: true, margin: "-10%" }}
        className="relative mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-3 overflow-hidden rounded-[2.5rem] border border-[#F5F1E5]/10 bg-gradient-to-br from-[#004225] to-[#002A18] p-4 text-[#F5F1E5] shadow-2xl md:flex-row md:items-center md:gap-6 md:p-6 lg:p-8"
      >
        <div className="flex-1">
          <div className="mb-2 flex items-center gap-2 md:mb-3 md:gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0B6E4F] text-[10px] font-bold text-white md:h-8 md:w-8 md:text-xs">
              0{step.id}
            </span>
            <div className="rounded-lg bg-white/5 p-1 text-[#0B6E4F] md:p-1.5">
              {step.icon}
            </div>
          </div>

          <h3 className="mb-1.5 text-xl font-bold text-[#F5F1E5] md:mb-2 md:text-2xl lg:text-3xl">
            {step.title}
          </h3>
          <p className="mb-3 max-w-3xl text-sm leading-relaxed text-[#F5F1E5]/80 md:mb-4 md:text-base lg:text-lg">
            {step.description}
          </p>

          <div className="flex flex-wrap gap-1.5 md:gap-2">
            {step.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Decorative Graphic on the Right */}
        <div className="group relative hidden aspect-square w-1/3 overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-[#0B6E4F]/20 to-transparent md:block">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-24 w-24 rounded-full border border-white/20 transition-transform duration-700 group-hover:scale-150" />
            <div className="absolute h-16 w-16 rounded-full bg-[#0B6E4F] opacity-50 blur-xl" />
          </div>
        </div>

        {/* Noise Texture Overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </motion.div>
    </div>
  )
}

export function ProcessSection() {
  return (
    <Section className="bg-[#F5F1E5] !pt-4 md:!pt-6" id="process">
      <Container>
        <div className="mb-8 text-center md:mb-12 lg:mb-16">
          <span className="mb-3 block text-xs font-bold uppercase tracking-wider text-[#0B6E4F] md:mb-4 md:text-sm">
            The Process
          </span>
          <h2 className="text-xl font-bold text-[#004225] md:text-2xl lg:text-4xl">
            How we scale <span className="font-serif italic">success</span>
          </h2>
        </div>

        <div className="relative">
          {PROCESS_STEPS.map((step, index) => (
            <ProcessCard key={step.id} step={step} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
