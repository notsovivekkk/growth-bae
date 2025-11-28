import { Container } from "@/components/ui/container"

export function StatsSection() {
  return (
    <section className="py-12 border-y border-gray-900 bg-dark-800/50 bg-[#121212]">
        <Container>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-800">
                <div className="p-4">
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">200+</div>
                    <p className="text-gray-400 text-sm uppercase tracking-wider">Products Built</p>
                </div>
                <div className="p-4">
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">$25M+</div>
                    <p className="text-gray-400 text-sm uppercase tracking-wider">Client Funding</p>
                </div>
                <div className="p-4">
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">80+</div>
                    <p className="text-gray-400 text-sm uppercase tracking-wider">VC Investments</p>
                </div>
            </div>
        </Container>
    </section>
  )
}
