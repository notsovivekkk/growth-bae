import { Container } from "@/components/ui/container"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-black text-white">
        <Container>
            <h2 className="text-3xl font-display font-bold mb-12 text-center">Trusted by industry leaders</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
                {/* Testimonial 1 */}
                <div className="bg-[#121212] p-8 rounded-2xl">
                    <div className="flex gap-1 text-[#dab772] mb-4 text-xs">
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">"Working with GrowthBae was a game changer. The speed at which they operate paired with their high quality design standards resulted in a product that wowed investors."</p>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-xs font-bold">CB</div>
                        <div>
                            <div className="text-white font-bold text-sm">Campbell Baron</div>
                            <div className="text-gray-500 text-xs">CEO @montra</div>
                        </div>
                    </div>
                </div>

                {/* Testimonial 2 */}
                <div className="bg-[#121212] p-8 rounded-2xl">
                    <div className="flex gap-1 text-[#dab772] mb-4 text-xs">
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">"Speed, quality, and cost. Typically you have to sacrifice one. From day one GrowthBae has delivered high quality work, on budget and on time."</p>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-xs font-bold">KG</div>
                        <div>
                            <div className="text-white font-bold text-sm">Kanwar Gill</div>
                            <div className="text-gray-500 text-xs">CEO @ratio</div>
                        </div>
                    </div>
                </div>

                {/* Testimonial 3 */}
                <div className="bg-[#121212] p-8 rounded-2xl">
                    <div className="flex gap-1 text-[#dab772] mb-4 text-xs">
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">"GrowthBae helped us design & develop an MVP, and just months later we raised a seed round. 10/10 would recommend."</p>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-xs font-bold">KW</div>
                        <div>
                            <div className="text-white font-bold text-sm">Kate Ward</div>
                            <div className="text-gray-500 text-xs">COO @creatornow</div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}
