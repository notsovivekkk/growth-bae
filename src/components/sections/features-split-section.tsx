import { Container } from "@/components/ui/container"

export function FeaturesSplitSection() {
  return (
    <section className="py-24 bg-black overflow-hidden text-white">
        <Container>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <div className="inline-block text-[#dab772] font-semibold mb-4">Why subscribe?</div>
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">AI Native & <br/>Design First</h2>
                    
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">AI isn't just a tool</h3>
                            <p className="text-gray-400">It's a multiplier. We use it to remove friction, accelerate creation, and free you to focus on vision, not code.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">Design matters</h3>
                            <p className="text-gray-400">In a world filled with AI clones, UX matters more than ever. Design is what makes technology feel human.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">Operate with freedom</h3>
                            <p className="text-gray-400">No rigid contracts. Just an open, flexible process that adapts to how you work.</p>
                        </div>
                    </div>
                </div>
                
                <div className="relative">
                    <div className="absolute -inset-4 bg-[#dab772]/20 blur-3xl rounded-full opacity-30"></div>
                    <div className="glass-card p-8 rounded-3xl border border-gray-800 relative">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-[#121212] p-4 rounded-xl">
                                <div className="text-red-400 mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>
                                </div>
                                <div className="text-sm font-bold">Long contracts</div>
                            </div>
                            <div className="bg-[#121212] p-4 rounded-xl">
                                <div className="text-red-400 mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>
                                </div>
                                <div className="text-sm font-bold">Micromanagement</div>
                            </div>
                            <div className="bg-[#121212] p-4 rounded-xl">
                                <div className="text-red-400 mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>
                                </div>
                                <div className="text-sm font-bold">High costs</div>
                            </div>
                            <div className="bg-[#121212] p-4 rounded-xl">
                                <div className="text-red-400 mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>
                                </div>
                                <div className="text-sm font-bold">Slow Hiring</div>
                            </div>
                        </div>
                        <div className="mt-8 text-center">
                            <div className="text-2xl font-bold text-white">Say no more.</div>
                            <p className="text-gray-500 text-sm mt-2">Experience the new way of building.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}
