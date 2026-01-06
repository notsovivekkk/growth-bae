"use client"

import { motion } from "framer-motion"
import { Rocket, ArrowUpRight, Instagram, Linkedin } from "lucide-react"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { siteConfig } from "@/config/site"

/**
 * Footer Component
 * Floating pill elements with animations
 * Central rocket icon
 * CTA: "Book a Call"
 * Bottom navigation and legal links
 */

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#F5F1E5] pt-12 pb-8 lg:pt-24 lg:pb-12">
      {/* Background Gradients */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden">
        <div className="absolute -left-[10%] -top-[20%] h-[40%] w-[40%] rounded-full bg-[#0B6E4F]/5 blur-[100px]" />
        <div className="absolute -right-[5%] top-[30%] h-[50%] w-[50%] rounded-full bg-[#0B6E4F]/8 blur-[90px]" />
      </div>
      <Container className="relative z-10">
        <div className="mb-12 flex flex-col items-center justify-between gap-4 md:mb-16 md:gap-10 lg:mb-20 lg:flex-row lg:gap-16">
          {/* Left Content */}
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="mb-3 text-4xl font-bold leading-tight tracking-tight text-[#004225] md:mb-4 md:text-2xl lg:mb-6 lg:text-4xl xl:text-5xl">
              Ready to ship your <br />
              <span className="bg-gradient-to-r from-[#004225] to-[#0B6E4F] bg-clip-text text-transparent">
                MVP?
              </span>
            </h2>
            <p className="mx-auto mb-6 max-w-lg text-sm leading-relaxed text-[#004225]/60 md:mb-8 md:text-base lg:mx-0 lg:mb-10 lg:text-lg">
              Stop sitting on your idea. Join the founders using GrowthBae to
              build, launch, and scale faster.
            </p>
            <div className="flex justify-center lg:justify-start">
              <a
                href={siteConfig.forms.contact}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button
                  className="group relative inline-flex !h-9 w-auto items-center justify-center overflow-hidden rounded-full bg-[#004225] px-5 text-xs font-medium text-[#F5F1E5] shadow-lg shadow-[#004225]/20 transition-all hover:scale-105 hover:bg-[#0B6E4F] hover:shadow-[#0B6E4F]/30 lg:h-12 lg:px-8 lg:text-base"
                >
                  <span className="relative z-10 flex items-center">
                    Book a Call
                    <ArrowUpRight className="ml-1.5 h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </button>
              </a>
            </div>
          </div>
          {/* Right Visuals - Rocket Upgrade with Glassmorphism */}
          <div className="relative flex h-auto w-full max-w-[280px] items-center justify-center py-0 my-2 md:h-[280px] md:max-w-md md:my-0">
            <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-[#0B6E4F]/20 to-[#004225]/5 blur-2xl md:h-48 md:w-48" />

            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="group relative z-10"
            >
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/40 bg-white/60 shadow-xl shadow-[#004225]/5 backdrop-blur-sm transition-all duration-500 hover:border-white/60 hover:bg-white/80 hover:shadow-2xl hover:shadow-[#0B6E4F]/20 md:h-24 md:w-24 md:rounded-3xl">
                <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:rotate-12 group-hover:scale-110">
                  <Rocket
                    className="h-6 w-6 text-[#0B6E4F] md:h-10 md:w-10"
                    strokeWidth={1.5}
                  />
                </div>
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/50 md:rounded-3xl" />
              </div>

              <motion.div
                animate={{ y: [4, -4, 4], x: [-2, 2, -2] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -right-2 -top-2 h-4 w-4 rounded-full border border-white bg-[#F5F1E5] shadow-sm md:-right-3 md:-top-3 md:h-6 md:w-6"
              >
                <div className="h-full w-full scale-50 rounded-full bg-[#0B6E4F]/20" />
              </motion.div>
            </motion.div>

            {/* Orbit Rings */}
            <div className="absolute left-1/2 top-1/2 -z-10 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#004225]/5 opacity-60 md:h-60 md:w-60" />
            <div className="absolute left-1/2 top-1/2 -z-10 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#004225]/5 opacity-40 md:h-44 md:w-44" />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-[#004225]/5 pt-8 md:flex-row">
          {/* 1. Copyright (Left on Desktop, Bottom on Mobile) */}
          <p className="order-3 text-xs font-medium text-[#004225]/40 md:order-1">
            &copy; 2025 GrowthBae. All rights reserved.
          </p>

          {/* 2. Navigation Links (Center) */}
          <div className="order-1 flex flex-row flex-nowrap justify-center gap-3 md:order-2 md:gap-8">
            {["Home", "Process", "Services", "Works"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs font-medium text-[#004225]/80 transition-colors hover:text-[#0B6E4F] md:text-sm"
              >
                {item}
              </a>
            ))}
          </div>

          {/* 3. Social Icons (Right on Desktop, Middle on Mobile) */}
          <div className="order-2 flex items-center gap-4 md:order-3">
            <a
              href="https://www.instagram.com/growthbae/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#004225] transition-colors hover:text-[#0B6E4F]"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5 stroke-[1.5]" />
            </a>
            <a
              href="https://www.linkedin.com/company/growthbae/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#004225] transition-colors hover:text-[#0B6E4F]"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 stroke-[1.5]" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
