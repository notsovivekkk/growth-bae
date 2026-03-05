import Link from "next/link"
import { Logo } from "@/components/ui/logo"
import { siteConfig } from "@/config/site"

const FOOTER_LINKS = [
  { label: "Case Studies", href: "/case-studies" },
  { label: "Book a Call", href: siteConfig.forms.contact },
] as const

export function EcomFooter() {
  return (
    <footer className="flex flex-col items-center justify-between gap-4 border-t border-[#004225]/12 px-6 py-4 text-center md:flex-row md:text-left">
      <Logo href="/" size="sm" />

      <p className="text-[12px] text-[#A09890]">
        &copy; {new Date().getFullYear()} GrowthBae. All rights reserved.
      </p>

      <ul className="flex list-none gap-3">
        {FOOTER_LINKS.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-[12px] text-[#A09890] no-underline transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  )
}
