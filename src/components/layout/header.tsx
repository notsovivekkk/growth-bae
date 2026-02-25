"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Logo } from "@/components/ui/logo"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { siteConfig } from "@/config/site"

/**
 * Header Component
 * Navigation with Home, Process, Services, Works
 * Includes "Book a Call" button
 * Scroll detection with glassmorphism effect
 * Full-screen mobile menu overlay with scroll lock
 */

const navigation = [
  { name: "Case Studies", href: "/case-studies" },
  { name: "Process", href: "#process" },
  { name: "Services", href: "#services" },
  { name: "Works", href: "#works" },
]

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const logoHref = pathname === "/" ? "#home" : "/"

  // Handle scroll for navbar styling (glassmorphism effect)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={cn(
        "fixed left-0 top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "border-b border-[#004225]/10 bg-[#F5F1E5]/90 py-4 shadow-sm backdrop-blur-md"
          : "bg-transparent py-6"
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo
            href={logoHref}
            size="sm"
            className="relative z-50 !h-10 !w-10 md:!h-14 md:!w-14 [&>a>div]:!h-10 [&>a>div]:!w-10 [&>a>div]:md:!h-14 [&>a>div]:md:!w-14 [&>div]:!h-10 [&>div]:!w-10 [&>div]:md:!h-14 [&>div]:md:!w-14 [&_img]:!h-full [&_img]:!w-auto [&_img]:!max-w-full"
          />

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-[#004225]/80 transition-colors hover:text-[#004225]"
              >
                {item.name}
              </Link>
            ))}
            <a
              href={siteConfig.forms.contact}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                variant="primary"
                size="md"
                className="rounded-full bg-[#004225] !px-6 !py-2.5 !text-sm text-[#F5F1E5] shadow-none hover:bg-[#0B6E4F] hover:text-[#F5F1E5]"
              >
                Book a Call
              </Button>
            </a>
          </nav>

          {/* Mobile Menu - Popover Style */}
          <div className="relative md:hidden">
            {/* Animated Toggle Button */}
            <button
              onClick={toggleMobileMenu}
              className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full border border-[#004225]/5 bg-[#004225]/5 transition-colors hover:bg-[#004225]/10"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <motion.svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Top Line -> Rotates 45deg */}
                <motion.path
                  stroke="#004225"
                  strokeWidth="2"
                  strokeLinecap="round"
                  variants={{
                    closed: { d: "M 4 8 L 20 8" },
                    open: { d: "M 6 18 L 18 6" },
                  }}
                  initial="closed"
                  animate={isMobileMenuOpen ? "open" : "closed"}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                  }}
                />
                {/* Bottom Line -> Rotates -45deg */}
                <motion.path
                  stroke="#004225"
                  strokeWidth="2"
                  strokeLinecap="round"
                  variants={{
                    closed: { d: "M 4 16 L 20 16" },
                    open: { d: "M 6 6 L 18 18" },
                  }}
                  initial="closed"
                  animate={isMobileMenuOpen ? "open" : "closed"}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                  }}
                />
              </motion.svg>
            </button>

            {/* The Popover Menu */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <>
                  {/* Invisible backdrop to close on click-outside */}
                  <div
                    className="fixed inset-0 z-40"
                    onClick={closeMobileMenu}
                  />

                  {/* The Menu Card */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    }}
                    className="absolute right-0 top-full z-50 mt-2 flex w-[220px] flex-col gap-3 rounded-2xl border border-[#004225]/10 bg-[#F5F1E5] p-4 shadow-xl"
                  >
                    {/* Navigation Links */}
                    <nav className="flex flex-col gap-2">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={closeMobileMenu}
                          className="text-left text-sm font-medium text-[#004225] transition-colors hover:text-[#0B6E4F]"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </nav>

                    <div className="h-px w-full bg-[#004225]/10" />

                    {/* CTA Button */}
                    <a
                      href={siteConfig.forms.contact}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full"
                      onClick={closeMobileMenu}
                    >
                      <Button
                        variant="primary"
                        size="md"
                        className="w-full !h-9 whitespace-nowrap rounded-full bg-[#004225] text-xs text-[#F5F1E5] shadow-lg hover:bg-[#0B6E4F] hover:text-[#F5F1E5]"
                      >
                        Book a Call
                      </Button>
                    </a>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </header>
  )
}
