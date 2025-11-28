import { siteConfig } from "@/config/site"
import { Container } from "@/components/ui/container"
import { Logo } from "@/components/ui/logo"
import { NavLink } from "@/components/ui/nav-link"
import { BodySmall, Caption } from "@/components/ui/typography"

/**
 * GBAE Footer Component (Molecule)
 * Composed from atomic components: Logo, NavLink, Typography, Container
 * Minimal, clean footer with generous spacing
 */

const footerLinks = {
  product: [
    { name: "Work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "Case Studies", href: "#case-studies" },
  ],
  company: [
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Careers", href: "#careers" },
  ],
  legal: [
    { name: "Privacy", href: "#privacy" },
    { name: "Terms", href: "#terms" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-900 pt-12 pb-6 text-white sm:pt-16 sm:pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 mb-8 sm:grid-cols-2 sm:gap-12 md:grid-cols-4 md:mb-12">
                <div className="col-span-1 sm:col-span-2 md:col-span-1">
                    <div className="flex items-center gap-2 mb-4 sm:mb-6">
                        <div className="w-6 h-6 bg-creme-500 rounded flex items-center justify-center text-black font-bold text-sm">G</div>
                        <span className="font-bold text-base sm:text-lg">GrowthBae</span>
                    </div>
                    <p className="text-gray-500 text-sm sm:text-base">The partner for founders building products with AI.</p>
                </div>
                
                <div>
                    <h4 className="font-bold text-white mb-3 text-sm sm:mb-4 sm:text-base">Company</h4>
                    <ul className="space-y-2 text-sm text-gray-500 sm:text-base">
                        <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                        <li><a href="#work" className="hover:text-white transition-colors">Work</a></li>
                        <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 className="font-bold text-white mb-3 text-sm sm:mb-4 sm:text-base">Services</h4>
                    <ul className="space-y-2 text-sm text-gray-500 sm:text-base">
                        <li><a href="#" className="hover:text-white transition-colors">MVP Development</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Product Strategy</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">AI Integration</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 className="font-bold text-white mb-3 text-sm sm:mb-4 sm:text-base">Connect</h4>
                    <ul className="space-y-2 text-sm text-gray-500 sm:text-base">
                        <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Email Us</a></li>
                    </ul>
                </div>
            </div>
            
            <div className="border-t border-gray-900 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 sm:pt-8">
                <p className="text-gray-600 text-xs sm:text-sm">© 2025 GrowthBae. All rights reserved.</p>
                <div className="flex gap-4 text-xs text-gray-600 sm:gap-6 sm:text-sm">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>
  )
}
