import { Container } from "@/components/ui/container"
import { ArrowRight } from "lucide-react"

export function WorkSection() {
  return (
    <section id="work" className="py-12 bg-dark-900 bg-[#0a0a0a] sm:py-16 md:py-20 lg:py-24">
        <Container>
            <div className="flex flex-col justify-between items-start mb-8 sm:flex-row sm:items-end sm:mb-12">
                <div className="mb-4 sm:mb-0">
                    <h2 className="text-2xl font-display font-bold mb-3 text-white sm:text-3xl sm:mb-4 md:text-4xl lg:text-5xl">Explore work</h2>
                    <p className="text-sm text-gray-400 max-w-xl sm:text-base">We build polished, production-ready apps that look great and scale fast.</p>
                </div>
                <a href="#" className="hidden md:flex items-center gap-2 text-white hover:text-[#dab772] transition-colors">
                    View all work <ArrowRight className="h-4 w-4" />
                </a>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
                {/* Project 1 */}
                <div className="group cursor-pointer">
                    <div className="aspect-[4/3] bg-gray-800 rounded-2xl mb-4 overflow-hidden relative">
                        <div className="absolute inset-0 bg-gray-700 group-hover:scale-105 transition-transform duration-500"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="bg-white text-black px-4 py-2 rounded-full font-bold text-sm">View Case Study</span>
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#dab772] transition-colors">Knimble</h3>
                    <p className="text-gray-500 text-sm">App UI Design</p>
                </div>

                {/* Project 2 */}
                <div className="group cursor-pointer">
                    <div className="aspect-[4/3] bg-gray-800 rounded-2xl mb-4 overflow-hidden relative">
                        <div className="absolute inset-0 bg-gray-700 group-hover:scale-105 transition-transform duration-500"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="bg-white text-black px-4 py-2 rounded-full font-bold text-sm">View Case Study</span>
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#dab772] transition-colors">HighPath</h3>
                    <p className="text-gray-500 text-sm">Financial Dashboard</p>
                </div>

                {/* Project 3 */}
                <div className="group cursor-pointer">
                    <div className="aspect-[4/3] bg-gray-800 rounded-2xl mb-4 overflow-hidden relative">
                        <div className="absolute inset-0 bg-gray-700 group-hover:scale-105 transition-transform duration-500"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="bg-white text-black px-4 py-2 rounded-full font-bold text-sm">View Case Study</span>
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#dab772] transition-colors">Empowerly</h3>
                    <p className="text-gray-500 text-sm">AI Coaching Companion</p>
                </div>
            </div>
            
            <div className="mt-8 text-center sm:mt-12 md:hidden">
                <a href="#" className="inline-flex items-center gap-2 text-sm text-white hover:text-[#dab772] transition-colors sm:text-base">
                    View all work <ArrowRight className="h-4 w-4" />
                </a>
            </div>
        </Container>
    </section>
  )
}
