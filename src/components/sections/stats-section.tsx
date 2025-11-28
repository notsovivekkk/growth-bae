import { Container } from "@/components/ui/container"

export function StatsSection() {
  return (
    <section className="py-8 border-y border-gray-900 bg-dark-800/50 bg-[#121212] sm:py-12">
        <Container>
            <div className="grid grid-cols-1 gap-6 text-center divide-y divide-gray-800 md:grid-cols-3 md:divide-y-0 md:divide-x md:gap-8">
                <div className="p-4 sm:p-6">
                    <div className="text-3xl font-bold text-white mb-2 sm:text-4xl md:text-5xl">200+</div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider sm:text-sm">Products Built</p>
                </div>
                <div className="p-4 sm:p-6">
                    <div className="text-3xl font-bold text-white mb-2 sm:text-4xl md:text-5xl">$25M+</div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider sm:text-sm">Client Funding</p>
                </div>
                <div className="p-4 sm:p-6">
                    <div className="text-3xl font-bold text-white mb-2 sm:text-4xl md:text-5xl">80+</div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider sm:text-sm">VC Investments</p>
                </div>
            </div>
        </Container>
    </section>
  )
}
