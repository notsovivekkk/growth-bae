import { motion } from "framer-motion"
import { Bot, Code2, Palette, Smartphone, Zap } from "lucide-react"

import type { ComponentType } from "react"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"

interface ServicePill {
  label: string
  icon: ComponentType<{ className?: string }>
  highlight?: boolean
}

const SERVICES: ServicePill[] = [
  { label: "Web Design", icon: Palette },
  { label: "Web Development", icon: Code2 },
  { label: "Mobile App Development", icon: Smartphone },
  { label: "AI Systems & Automation", icon: Bot, highlight: true },
]

export function ServicesSection() {
  return (
    <Section
      padding="none"
      className="relative overflow-hidden bg-transparent px-6 py-16 md:px-12"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#134E39]/5 blur-[100px]" />

      <Container
        size="default"
        className="relative z-10 mx-auto max-w-6xl text-[#0A291E]"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-8 max-w-3xl text-center"
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#134E39]/20 bg-white px-4 py-1.5 text-[#134E39] shadow-sm">
            <Zap className="h-4 w-4" />
            <span className="text-xs font-bold uppercase tracking-[0.3em]">
              3x Faster Execution
            </span>
          </div>

          <h2 className="text-4xl font-bold leading-tight text-[#0A291E] md:text-6xl">
            We build every kind of <br />
            <span className="relative inline-block">
              MVP{" "}
              <span className="bg-gradient-to-br from-[#005B38] to-[#00C177] bg-clip-text italic text-transparent">
                faaast
              </span>
              <svg
                className="absolute -bottom-1 left-0 h-3 w-full text-[#134E39]/30"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 50 10 100 5"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>
            </span>
          </h2>
          <p className="mt-6 text-lg text-[#4A5D55]">
            Your product, your way. Backed by 40+ successful launches.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 flex w-full justify-center px-2"
        >
          <div className="inline-flex items-center rounded-full border border-white/60 bg-gradient-to-b from-white to-[#E8F5E9] p-1.5 shadow-[0_2px_8px_-2px_rgba(0,133,86,0.08)]">
            {SERVICES.map(({ label, icon: Icon }, index) => (
              <div key={label} className="contents">
                <div className="flex items-center gap-2 whitespace-nowrap px-5 py-2">
                  <Icon className="h-4 w-4 text-[#008556]" />
                  <span className="text-sm font-medium text-[#0A291E]">
                    {label}
                  </span>
                </div>
                {index < SERVICES.length - 1 && (
                  <div className="h-5 w-px flex-shrink-0 bg-[#0A291E]/10" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
