"use client"

import { motion } from "framer-motion"
import { TrendingUp } from "lucide-react"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"

export function SpeedMoatSection() {
  return (
    <>
      <style jsx>{`
        @keyframes fillWidth {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
        .animate-fill-green {
          animation: fillWidth 1.5s ease-out forwards;
          animation-delay: 0.3s;
        }
      `}</style>
      <Section
        padding="none"
        className="relative z-10 -mt-8 overflow-hidden bg-secondary px-4 pb-12 pt-0 sm:-mt-12 sm:px-6 sm:pb-16 md:px-12"
      >
        {/* Grid Background Pattern */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:24px_24px] opacity-[0.03]" />

        <Container size="default" className="relative z-10 mx-auto max-w-4xl">
          <div className="mb-8 text-center sm:mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-3 text-2xl font-bold leading-tight text-[#0A291E] sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl"
            >
              Speed is your only true moat.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mx-auto mb-6 max-w-2xl text-base leading-relaxed text-[#59503F] sm:mb-8 sm:text-lg"
            >
              In early-stage startups, velocity is survival. While others are
              stuck in workshops, you&apos;ll be onboarding users. We give you
              what you actually need:{" "}
              <strong className="text-[#0A291E]">
                Production-ready code in weeks, not quarters.
              </strong>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto flex flex-col items-center justify-center gap-6 border-t border-[#E6DDD0] pt-6 sm:flex-row sm:gap-12 md:gap-24"
            >
              <div className="text-center">
                <div className="mb-1 text-2xl font-bold text-[#0A291E] sm:text-3xl md:text-4xl">
                  0%
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#59503F]">
                  Bureaucracy
                </div>
              </div>
              <div className="text-center">
                <div className="mb-1 text-2xl font-bold text-[#0A291E] sm:text-3xl md:text-4xl">
                  100%
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#59503F]">
                  Shipping
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-xl border border-[#E6DDD0] bg-white p-4 shadow-sm sm:rounded-2xl sm:p-6 md:p-8"
          >
            <div className="space-y-8">
              {/* GrowthBae Workflow */}
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#008556]"></div>
                  <span className="text-sm font-bold text-[#0A291E]">
                    Growthbae Workflow
                  </span>
                </div>
                <div className="relative h-12 w-full overflow-hidden rounded-lg bg-[#008556]/10 md:h-14">
                  {/* Filling Animation Bar */}
                  <div className="animate-fill-green absolute bottom-0 left-0 top-0 rounded-lg bg-[#008556]"></div>
                  {/* Text Overlay */}
                  <div className="absolute inset-0 z-10 flex items-center justify-center">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-white shadow-sm md:text-sm">
                      Build & Ship
                    </span>
                  </div>
                </div>
              </div>

              {/* Typical Agency */}
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-gray-300"></div>
                  <span className="text-sm font-bold text-[#59503F]">
                    Typical Agency
                  </span>
                </div>
                <div className="w-full overflow-hidden rounded-lg border border-[#E6DDD0]">
                  <div className="flex h-auto min-h-[48px] w-full flex-col sm:flex-row sm:h-12 md:h-14">
                    <div className="flex h-12 min-h-[48px] w-full items-center justify-center border-b border-white/50 bg-gray-100 text-[10px] font-medium uppercase tracking-wide text-gray-500 sm:h-full sm:w-[20%] sm:border-b-0 sm:border-r">
                      Meetings
                    </div>
                    <div className="flex h-12 min-h-[48px] w-full items-center justify-center border-b border-white/50 bg-gray-200 text-[10px] font-medium uppercase tracking-wide text-gray-600 sm:h-full sm:w-[25%] sm:border-b-0 sm:border-r">
                      Discovery
                    </div>
                    <div className="flex h-12 min-h-[48px] w-full items-center justify-center border-b border-white/50 bg-gray-100 text-[10px] font-medium uppercase tracking-wide text-gray-500 sm:h-full sm:w-[15%] sm:border-b-0 sm:border-r">
                      Docs
                    </div>
                    <div className="flex h-12 min-h-[48px] w-full items-center justify-center bg-[#E8F5E9] text-[10px] font-bold uppercase tracking-wide text-[#008556] sm:h-full sm:w-[40%]">
                      Code
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="mt-6 flex items-start gap-2 border-t border-gray-100 pt-4 sm:mt-8 sm:gap-3 sm:pt-6 md:items-center">
              <TrendingUp className="h-4 w-4 shrink-0 text-[#008556] sm:h-5 sm:w-5" />
              <p className="text-xs font-medium italic text-[#59503F] sm:text-sm">
                &quot;We don&apos;t bill for the noise. We only build the
                signal.&quot;
              </p>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  )
}
