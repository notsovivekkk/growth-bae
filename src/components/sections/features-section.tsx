import { H2, Lead, BodySmall } from "@/components/ui/typography"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"

export function FeaturesSection() {
  return (
    <section className="py-12 bg-black text-white sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
                <h2 className="text-2xl font-display font-bold mb-3 sm:text-3xl sm:mb-4 md:text-4xl lg:text-5xl">How we work?</h2>
                <p className="text-sm text-gray-400 max-w-2xl mx-auto sm:text-base">We simplify complex builds into fast, focused sprints that ship real results every week.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {/* Step 1 */}
                <div className="glass-card p-4 rounded-xl hover:bg-gray-900 transition-colors sm:p-6 sm:rounded-2xl">
                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mb-4 text-[#dab772] sm:w-12 sm:h-12 sm:rounded-xl sm:mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-6 sm:h-6"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                    </div>
                    <h3 className="text-lg font-bold mb-2 sm:text-xl">Build</h3>
                    <p className="text-xs text-gray-500 font-semibold mb-2 sm:text-sm sm:mb-3">MVP in just 2 weeks</p>
                    <p className="text-gray-400 text-xs leading-relaxed sm:text-sm">We design and develop core functionality to validate your concept fast before investing big.</p>
                </div>

                {/* Step 2 */}
                <div className="glass-card p-4 rounded-xl hover:bg-gray-900 transition-colors sm:p-6 sm:rounded-2xl">
                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mb-4 text-[#dab772] sm:w-12 sm:h-12 sm:rounded-xl sm:mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-6 sm:h-6"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/></svg>
                    </div>
                    <h3 className="text-lg font-bold mb-2 sm:text-xl">Iterate</h3>
                    <p className="text-xs text-gray-500 font-semibold mb-2 sm:text-sm sm:mb-3">Roadmap & Milestones</p>
                    <p className="text-gray-400 text-xs leading-relaxed sm:text-sm">Once live, we help define goals and run bi-weekly sprints to ship features and improve UX.</p>
                </div>

                {/* Step 3 */}
                <div className="glass-card p-4 rounded-xl hover:bg-gray-900 transition-colors sm:p-6 sm:rounded-2xl">
                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mb-4 text-[#dab772] sm:w-12 sm:h-12 sm:rounded-xl sm:mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-6 sm:h-6"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
                    </div>
                    <h3 className="text-lg font-bold mb-2 sm:text-xl">Grow</h3>
                    <p className="text-xs text-gray-500 font-semibold mb-2 sm:text-sm sm:mb-3">AI-Powered Tools</p>
                    <p className="text-gray-400 text-xs leading-relaxed sm:text-sm">Leveraging modern tech stacks to build at unmatched speed with engineering best practices.</p>
                </div>

                {/* Step 4 */}
                <div className="glass-card p-4 rounded-xl hover:bg-gray-900 transition-colors sm:p-6 sm:rounded-2xl">
                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mb-4 text-[#dab772] sm:w-12 sm:h-12 sm:rounded-xl sm:mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-6 sm:h-6"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    </div>
                    <h3 className="text-lg font-bold mb-2 sm:text-xl">Collaborate</h3>
                    <p className="text-xs text-gray-500 font-semibold mb-2 sm:text-sm sm:mb-3">Async Flexibility</p>
                    <p className="text-gray-400 text-xs leading-relaxed sm:text-sm">Join weekly calls, stay connected asynchronously, and pause or cancel anytime.</p>
                </div>
            </div>
        </div>
    </section>
  )
}
