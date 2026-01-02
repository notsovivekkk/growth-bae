"use client"

import { motion } from "framer-motion"
import { Rocket, ArrowUpRight, Instagram, Linkedin } from "lucide-react"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import Link from "next/link"

/**
 * Footer Component
 * Floating pill elements with animations
 * Central rocket icon
 * CTA: "Book a Call"
 * Bottom navigation and legal links
 */

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#F5F1E5] py-8 md:py-12">
      {/* Background Gradients */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden">
        <div className="absolute -left-[10%] -top-[20%] h-[50%] w-[50%] rounded-full bg-[#0B6E4F]/5 blur-[120px]" />
        <div className="absolute -right-[10%] top-[40%] h-[60%] w-[40%] rounded-full bg-[#0B6E4F]/10 blur-[100px]" />
      </div>
      <Container className="relative z-10">
        <div className="mb-12 flex flex-col items-center justify-between gap-8 md:mb-16 lg:mb-24 lg:flex-row lg:gap-16">
          {/* Left Content */}
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="mb-3 text-xl font-bold leading-tight tracking-tight text-[#004225] md:mb-4 md:text-2xl lg:mb-6 lg:text-4xl xl:text-5xl">
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
              <Button
                variant="primary"
                size="lg"
                className="!h-9 rounded-full bg-[#004225] !px-5 text-xs font-medium text-[#F5F1E5] shadow-lg transition-all hover:scale-105 hover:bg-[#0B6E4F] md:!h-10 md:!px-6 md:text-sm lg:!h-11 lg:!px-8"
              >
                Book a Call{" "}
                <ArrowUpRight className="ml-1.5 h-3 w-3 md:ml-2 md:h-3.5 md:w-3.5" />
              </Button>
            </div>
          </div>
          {/* Right Visuals (Floating Elements) */}
          <div className="relative flex aspect-square w-full max-w-sm items-center justify-center md:max-w-md lg:h-[300px]">
            {/* Central Icon */}
            <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl border border-[#004225]/5 bg-white shadow-xl md:h-24 md:w-24 md:rounded-3xl lg:h-28 lg:w-28">
              <Rocket className="h-8 w-8 text-[#0B6E4F] md:h-10 md:w-10 lg:h-12 lg:w-12" />
              {/* Inner Glow */}
              <div className="absolute inset-0 -z-10 rounded-2xl bg-[#0B6E4F]/5 blur-xl md:rounded-3xl" />
            </div>

            {/* Decorative Blur */}
            <div className="absolute left-1/2 top-1/2 -z-10 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#0B6E4F]/20 to-transparent blur-3xl md:h-64 md:w-64" />
          </div>
        </div>

        {/* Bottom Bar with Navigation */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-[#004225]/10 pt-6 md:flex-row md:gap-6 md:pt-8">
          {/* Logo Area */}
          <div className="flex flex-col items-center gap-1.5 md:items-start md:gap-2">
            <div className="text-xl font-bold tracking-tighter text-[#004225] md:text-2xl">
              Growth<span className="text-[#0B6E4F]">Bae</span>.
            </div>
            <p className="text-xs text-[#004225]/40 md:text-sm">
              &copy; 2025 GrowthBae Inc.
            </p>
          </div>
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
            {["Home", "Process", "Services", "Works"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[10px] font-medium uppercase tracking-wide text-[#004225]/70 transition-colors hover:text-[#0B6E4F] md:text-xs"
              >
                {item}
              </Link>
            ))}
          </nav>
          {/* Legal Links */}
          <div className="flex gap-4 text-xs text-[#004225]/40 md:gap-6 md:text-sm">
            <Link href="#" className="transition-colors hover:text-[#004225]">
              Privacy Policy
            </Link>
            <Link href="#" className="transition-colors hover:text-[#004225]">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
