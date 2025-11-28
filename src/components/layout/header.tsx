"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Logo } from "@/components/ui/logo"
import { NavLink } from "@/components/ui/nav-link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * GBAE Header Component (Molecule)
 * Fully responsive navigation with mobile menu
 * Mobile-first: hamburger menu on mobile, full nav on desktop
 * Includes scroll detection for dynamic styling
 */

const navigation = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
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
        "fixed left-0 right-0 top-0 z-50 py-2 transition-all duration-300",
        isScrolled
          ? "border-b border-primary/5 bg-secondary/90 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <Container>
        <div className="flex h-10 items-center justify-between sm:h-11 lg:h-12">
          {/* Logo */}
          <Logo href="/" size="md" className="relative z-50 flex-shrink-0" />

          {/* Desktop Navigation - Shifted to the right, hidden on mobile, visible from md */}
          <nav className="ml-auto hidden items-center gap-6 md:flex lg:gap-8">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                href={item.href}
                className="group relative text-sm font-medium lg:text-body"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all group-hover:w-full" />
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button - Visible only on mobile */}
          <button
            onClick={toggleMobileMenu}
            className="z-50 flex items-center justify-center p-1.5 text-primary transition-colors hover:text-accent md:hidden"
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

      {/* Mobile Menu Overlay - Full screen like reference */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-secondary md:hidden"
        >
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              href={item.href}
              onClick={closeMobileMenu}
              className="text-2xl font-bold text-primary"
            >
              {item.name}
            </NavLink>
          ))}
        </motion.div>
      )}
    </header>
  )
}
