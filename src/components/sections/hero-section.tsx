"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import Link from "next/link"
import { cn } from "@/lib/utils"

/**
 * Hero Section
 * Badge: "Founder Build Studio"
 * Headline with gradient text and italic serif font
 * CTA button: "Start Your Growth"
 * Decorative background elements
 */

export function HeroSection() {
  return (
    <Section
      padding="none"
      className={cn(
        "relative flex min-h-[90vh] flex-col justify-center overflow-hidden bg-[#F3F1E6] md:min-h-screen",
        "pb-6 pt-40 md:pb-12 md:pt-48"
      )}
      id="home"
    >
      <Container className="relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#064e3b]/10 bg-white/10 px-3 py-1 text-xs font-medium text-[#064e3b] backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              Founder Build Studio
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={cn(
              "mb-4 text-4xl font-semibold leading-none tracking-tighter text-[#064e3b] md:text-5xl lg:text-6xl"
            )}
          >
            Build{" "}
            <span className="bg-gradient-to-r from-[#064e3b] to-[#0B6E4F] bg-clip-text text-transparent">
              MVPs
            </span>{" "}
            and AI systems that actually{" "}
            <span className="font-serif italic">scale.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 max-w-xl text-base leading-relaxed text-[#064e3b]/70"
          >
            GrowthBae is a perfect blend of design, product thinking and clean
            engineering to turn your ideas into winning products.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="https://tally.so/r/44Jrpb"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center justify-center gap-2",
                "rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300",
                "bg-[#004225] text-[#F5F1E5] shadow-xl shadow-[#0B6E4F]/20 hover:scale-105 hover:bg-[#0B6E4F] hover:text-[#F5F1E5] hover:shadow-2xl"
              )}
            >
              Start Your Growth <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </Container>

      {/* Decorative Background Elements */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-[#0B6E4F]/5 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#0B6E4F]/5 blur-3xl" />
    </Section>
  )
}
