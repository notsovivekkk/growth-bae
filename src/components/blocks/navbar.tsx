import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/ui/logo"
import { NavLink } from "@/components/ui/nav-link"

/**
 * GBAE Navbar Component (Molecule)
 * Composed from atomic components: Logo, NavLink, Button, Container
 * Minimal, clean layout with spacing to the top-right
 * Reusable navigation block
 */

const navigation = [
  { name: "Work", href: "#work" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  return (
    <nav className="transition-soft sticky top-0 z-50 border-b border-border bg-background-primary/95 backdrop-blur-sm">
      <Container>
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Logo href="/" size="md" />

          {/* Desktop Navigation - Spaced to the right */}
          <div className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <NavLink key={item.name} href={item.href}>
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="md" className="hidden sm:inline-flex">
              Get Started
            </Button>
          </div>
        </div>
      </Container>
    </nav>
  )
}
