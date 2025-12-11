"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Logo } from "@/components/ui/logo"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

/**
 * Header Component
 * Navigation with Home, Process, Services, Works
 * Includes "Book a Call" button
 * Scroll detection with glassmorphism effect
 * Full-screen mobile menu overlay with scroll lock
 */

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Process", href: "#process" },
  { name: "Services", href: "#services" },
  { name: "Works", href: "#works" },
]

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll for navbar styling (glassmorphism effect)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

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
          <Link
            href="#home"
            className="block transition-opacity hover:opacity-90"
          >
            <Logo href="/" size="md" className="relative z-50 flex-shrink-0" />
          </Link>

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
            <Button
              variant="primary"
              size="md"
              className="rounded-full bg-[#004225] !px-6 !py-2.5 !text-sm text-[#F5F1E5] shadow-none hover:bg-[#0B6E4F]"
            >
              Book a Call
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="z-50 flex items-center justify-center p-2 text-[#004225] md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Menu Overlay - Full screen with solid background and scroll lock */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 flex h-screen w-screen flex-col items-center justify-center gap-8 bg-[#F5F1E5] md:hidden"
          >
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-lg p-2 text-base font-medium text-[#004225] hover:bg-[#004225]/5"
                onClick={closeMobileMenu}
              >
                {item.name}
              </Link>
            ))}
            <Button
              variant="primary"
              size="md"
              className="w-full rounded-full bg-[#004225] !px-6 !py-2.5 !text-sm text-[#F5F1E5] shadow-none hover:bg-[#0B6E4F]"
            >
              Book a Call
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
