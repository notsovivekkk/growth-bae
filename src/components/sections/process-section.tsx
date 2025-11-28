"use client"

import { motion } from "framer-motion"
import {
  CheckCircle2,
  Search,
  Lightbulb,
  Zap,
  Sparkles,
  Cpu,
  Rocket,
  ArrowRight,
} from "lucide-react"
import { Section } from "@/components/ui/section"

export function ProcessSection() {
  return (
    <Section
      padding="none"
      className="overflow-hidden bg-transparent px-4 py-12 text-[#0A291E] antialiased md:px-6 md:py-16 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="mb-4 inline-block rounded-full border border-[#134E39]/20 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#134E39] sm:mb-6 sm:px-4 sm:text-sm">
              How We Work
            </span>
            <h2 className="mb-4 text-3xl font-bold leading-tight text-[#0A291E] sm:mb-6 sm:text-4xl md:text-5xl">
              From napkin sketch to <br className="hidden md:block" /> scalable
              product.
            </h2>
            <p className="text-base text-[#4A5D55] sm:text-lg">
              Our proven four-step framework ensures we validate fast, build
              correctly, and launch with momentum.
            </p>
          </motion.div>
        </div>

        <div className="relative space-y-12 md:space-y-24 lg:space-y-32">
          {/* Connecting Line (Desktop Only) */}
          <div className="dashed-line absolute bottom-0 left-1/2 top-0 z-0 hidden w-px -translate-x-1/2 md:block"></div>

          <style jsx>{`
            .dashed-line {
              background-image: linear-gradient(
                to bottom,
                #d1dbd7 50%,
                transparent 50%
              );
              background-size: 1px 20px;
              background-repeat: repeat-y;
            }
          `}</style>

          {/* STEP 01: DISCOVER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative z-10 grid grid-cols-1 items-center gap-8 md:gap-12 lg:gap-24 md:grid-cols-2"
          >
            {/* Text Content (Left) */}
            <div className="order-2 text-left md:order-1 md:pr-12 md:text-right">
              <span className="mb-3 block text-4xl font-bold leading-none text-[#134E39]/10 sm:mb-4 sm:text-5xl md:text-6xl">
                01
              </span>
              <h3 className="mb-3 text-2xl font-bold text-[#0A291E] sm:mb-4 sm:text-3xl">
                Discover
              </h3>
              <p className="text-base leading-relaxed text-[#4A5D55] sm:text-lg">
                We kick things off with a deep dive into your vision. We
                identify user needs, analyze market gaps, and validate
                assumptions before writing a single line of code.
              </p>
              <ul className="mt-6 inline-block space-y-2 text-left">
                <li className="flex items-center gap-3 text-[#4A5D55]">
                  <CheckCircle2 className="h-5 w-5 text-[#134E39]" />
                  Stakeholder Interviews
                </li>
                <li className="flex items-center gap-3 text-[#4A5D55]">
                  <CheckCircle2 className="h-5 w-5 text-[#134E39]" />
                  Competitor Analysis
                </li>
              </ul>
            </div>

            {/* Visual/Image (Right) */}
            <div className="order-1 md:order-2">
              <div className="group relative aspect-[16/9] w-full overflow-hidden rounded-[2rem] border border-[#D1DBD7] bg-white shadow-sm">
                {/* Abstract Diagram: Nodes connecting */}
                <div className="absolute inset-0 bg-[radial-gradient(#134E39_0.5px,transparent_0.5px)] opacity-[0.03] [background-size:16px_16px]"></div>

                <div className="absolute inset-0 flex items-center justify-center p-2 sm:p-4">
                  <div className="relative h-48 w-full max-w-lg sm:h-64 md:h-72">
                    {/* Node 1 */}
                    <div className="diagram-node absolute left-1 top-2 flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-2 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#134E39] hover:shadow-[0_10px_15px_-3px_rgba(19,78,57,0.1)] sm:left-2 sm:top-4 sm:gap-2 sm:rounded-xl sm:px-5 sm:py-3">
                      <div className="h-2 w-2 rounded-full bg-[#134E39] sm:h-3 sm:w-3"></div>
                      <span className="text-xs font-medium text-[#0A291E] sm:text-sm">
                        Idea
                      </span>
                    </div>
                    {/* Curved Line */}
                    <svg
                      className="absolute left-8 top-6 h-[160px] w-[200px] text-[#D1DBD7] sm:left-16 sm:top-10 sm:h-[220px] sm:w-[280px]"
                      viewBox="0 0 280 220"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <path d="M10 20 C120 60 140 180 140 210" />
                    </svg>
                    {/* Node 2 */}
                    <div className="diagram-node absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-2 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#134E39] hover:shadow-[0_10px_15px_-3px_rgba(19,78,57,0.1)] sm:bottom-4 sm:gap-2 sm:rounded-xl sm:px-5 sm:py-3">
                      <Search className="h-3 w-3 text-[#134E39] sm:h-4 sm:w-4" />
                      <span className="text-xs font-medium text-[#0A291E] sm:text-sm">
                        Research
                      </span>
                    </div>
                    {/* Curved Line 2 */}
                    <svg
                      className="absolute bottom-6 right-8 h-[160px] w-[200px] text-[#D1DBD7] sm:bottom-10 sm:right-16 sm:h-[220px] sm:w-[280px]"
                      viewBox="0 0 280 220"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <path d="M140 200 C200 140 220 80 260 30" />
                    </svg>
                    {/* Node 3 */}
                    <div className="diagram-node absolute right-1 top-2 flex items-center gap-1.5 rounded-lg border border-[#134E39] bg-[#E6EFE9]/30 px-3 py-2 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#134E39] hover:shadow-[0_10px_15px_-3px_rgba(19,78,57,0.1)] sm:right-2 sm:top-4 sm:gap-2 sm:rounded-xl sm:px-5 sm:py-3">
                      <Lightbulb className="h-3 w-3 text-[#134E39] sm:h-4 sm:w-4" />
                      <span className="text-xs font-medium text-[#0A291E] sm:text-sm">
                        Concept
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* STEP 02: STRATEGIZE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 grid grid-cols-1 items-center gap-8 md:gap-12 lg:gap-24 md:grid-cols-2"
          >
            {/* Visual/Image (Left) */}
            <div className="order-1">
              <div className="group relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-[#0A291E] shadow-xl sm:rounded-2xl">
                {/* Dark Mode Diagram for variety */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0A291E] to-[#0F1F18]"></div>
                <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 md:p-8">
                  <div className="grid w-full grid-cols-3 gap-2 opacity-90 sm:gap-3">
                    {/* Simple Gantt Chart Visualization */}
                    <div className="col-span-1 mt-2 h-1.5 rounded-full bg-white/10 sm:h-2"></div>
                    <div className="col-span-2 mt-2 h-1.5 animate-pulse rounded-full bg-[#134E39] sm:h-2"></div>

                    <div className="col-span-2 mt-3 h-1.5 rounded-full bg-white/20 sm:mt-4 sm:h-2"></div>
                    <div className="col-span-1 mt-3 h-1.5 rounded-full bg-transparent sm:mt-4 sm:h-2"></div>

                    <div className="col-span-1 mt-3 h-1.5 rounded-full bg-transparent sm:mt-4 sm:h-2"></div>
                    <div className="col-span-2 mt-3 h-1.5 rounded-full bg-white/10 sm:mt-4 sm:h-2"></div>
                    {/* Floating Card */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg border border-white/10 bg-white/10 p-3 text-center backdrop-blur-md sm:rounded-xl sm:p-4">
                      <span className="mb-1 block font-mono text-[10px] uppercase tracking-widest text-white sm:text-xs">
                        Roadmap
                      </span>
                      <span className="text-base font-bold text-white sm:text-lg md:text-xl">
                        Q1 Launch
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content (Right) */}
            <div className="order-2">
              <span className="mb-3 block text-4xl font-bold leading-none text-[#134E39]/10 sm:mb-4 sm:text-5xl md:text-6xl">
                02
              </span>
              <h3 className="mb-3 text-2xl font-bold text-[#0A291E] sm:mb-4 sm:text-3xl">
                Strategize
              </h3>
              <p className="text-base leading-relaxed text-[#4A5D55] sm:text-lg">
                We map out the core feature set, prioritizing value over volume.
                We align the technical architecture with your business goals to
                ensure scalability from day one.
              </p>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center gap-3 text-[#4A5D55]">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#134E39]"></div>
                  Tech Stack Selection
                </li>
                <li className="flex items-center gap-3 text-[#4A5D55]">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#134E39]"></div>
                  Feature Prioritization (MoSCoW)
                </li>
              </ul>
            </div>
          </motion.div>

          {/* STEP 03: BUILD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative z-10 grid grid-cols-1 items-center gap-8 md:gap-12 lg:gap-24 md:grid-cols-2"
          >
            {/* Text Content (Left) */}
            <div className="order-2 text-left md:order-1 md:pr-12 md:text-right">
              <span className="mb-3 block text-4xl font-bold leading-none text-[#134E39]/10 sm:mb-4 sm:text-5xl md:text-6xl">
                03
              </span>
              <h3 className="mb-3 text-2xl font-bold text-[#0A291E] sm:mb-4 sm:text-3xl">Build</h3>
              <p className="text-base leading-relaxed text-[#4A5D55] sm:text-lg">
                We build with AI and Cursor to shorten timelines. By removing
                repetitive work, we turn ideas into production-ready products
                far quicker than most teams can.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 md:justify-end">
                <span className="flex items-center gap-1.5 rounded-full border border-[#134E39]/10 bg-[#134E39]/5 px-3 py-1 text-xs font-medium text-[#134E39]">
                  <Zap className="h-3 w-3" /> 2x Velocity
                </span>
                <span className="flex items-center gap-1.5 rounded-full border border-[#134E39]/10 bg-[#134E39]/5 px-3 py-1 text-xs font-medium text-[#134E39]">
                  <Sparkles className="h-3 w-3" /> AI Assisted
                </span>
                <span className="flex items-center gap-1.5 rounded-full border border-[#134E39]/10 bg-[#134E39]/5 px-3 py-1 text-xs font-medium text-[#134E39]">
                  <Cpu className="h-3 w-3" /> Automated
                </span>
              </div>
            </div>

            {/* Visual/Image (Right) */}
            <div className="order-1 md:order-2">
              <div className="group relative aspect-[16/9] w-full overflow-hidden rounded-[2rem] border border-transparent bg-[#E6EFE9] shadow-inner">
                <div className="absolute inset-0 bg-[radial-gradient(#134E39_0.5px,transparent_0.5px)] opacity-[0.05] [background-size:20px_20px]"></div>

                {/* AI Acceleration Visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Central AI Core */}
                    <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#134E39] to-[#0F291E] shadow-2xl transition-transform duration-500 group-hover:scale-110">
                      <Sparkles className="h-8 w-8 text-white" />
                    </div>

                    {/* Orbiting Ring */}
                    <div className="absolute inset-0 -m-6 animate-[spin_8s_linear_infinite] rounded-full border border-[#134E39]/20"></div>
                    <div className="absolute inset-0 -m-10 animate-[spin_12s_linear_infinite_reverse] rounded-full border border-[#134E39]/10"></div>
                    {/* Generated Outputs (Cards floating out) */}
                    <div className="absolute left-20 top-1/2 flex -translate-y-1/2 flex-col gap-2 opacity-80">
                      <div className="h-8 w-12 rounded border border-[#D1DBD7] bg-white shadow-sm"></div>
                      <div className="-ml-4 h-10 w-16 rounded border border-[#D1DBD7] bg-white shadow-sm"></div>
                    </div>
                    <div className="absolute right-20 top-1/2 flex -translate-y-1/2 flex-col items-end gap-2 opacity-80">
                      <div className="h-10 w-10 rounded border border-[#D1DBD7] bg-white shadow-sm"></div>
                      <div className="-mr-2 h-8 w-14 rounded border border-[#D1DBD7] bg-white shadow-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* STEP 04: DELIVER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative z-10 grid grid-cols-1 items-center gap-8 md:gap-12 lg:gap-24 md:grid-cols-2"
          >
            {/* Visual/Image (Left) */}
            <div className="order-1">
              <div className="group relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-[#D1DBD7] bg-white shadow-sm transition-all hover:shadow-md sm:rounded-2xl">
                <div className="absolute inset-0 bg-[radial-gradient(#134E39_0.5px,transparent_0.5px)] opacity-[0.05] [background-size:24px_24px]"></div>

                {/* Launch Visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#134E39] shadow-xl shadow-[#134E39]/20 transition-transform duration-300 group-hover:-translate-y-2 sm:mb-4 sm:h-16 sm:w-16 sm:rounded-2xl">
                      <Rocket className="h-6 w-6 text-white sm:h-8 sm:w-8" />
                    </div>
                    <h4 className="text-base font-bold text-[#0A291E] sm:text-lg">
                      Ready for Lift-off
                    </h4>
                    <p className="mt-1 text-xs text-[#4A5D55] sm:text-sm">
                      Version 1.0 Live
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content (Right) */}
            <div className="order-2">
              <span className="mb-3 block text-4xl font-bold leading-none text-[#134E39]/10 sm:mb-4 sm:text-5xl md:text-6xl">
                04
              </span>
              <h3 className="mb-3 text-2xl font-bold text-[#0A291E] sm:mb-4 sm:text-3xl">
                Deliver
              </h3>
              <p className="text-base leading-relaxed text-[#4A5D55] sm:text-lg">
                We don't just hand over code; we ensure a smooth deployment. We
                monitor the launch, handle initial feedback, and set you up with
                documentation for future scaling.
              </p>
              <div className="mt-6 sm:mt-8">
                <button className="group flex items-center gap-2 rounded-lg bg-[#134E39] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#0A291E] sm:px-5">
                  Start your project
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
