"use client"

import { Container } from "@/components/ui/container"
import { useState } from "react"
import { Plus } from "lucide-react"
import { cn } from "@/lib/utils"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqs = [
    {
        question: "What is GrowthBae?",
        answer: "GrowthBae is an AI product studio that designs, builds, and launches apps using modern AI development platforms. We help founders and teams turn ideas into fully functional products in weeks, not months."
    },
    {
        question: "How long does it take to build an app?",
        answer: "We typically deliver a functional MVP in just 2 weeks through our structured sprint process. More complex applications may take longer depending on specific requirements."
    },
    {
        question: "How much does it cost?",
        answer: "We offer transparent pricing: $4,500 bi-weekly for ongoing sprint work, or a one-time $9,500 package for a complete MVP build."
    },
    {
        question: "What stack do you use?",
        answer: "We leverage modern tools like Lovable, Supabase, and various AI models to build fast and scalable applications."
    }
  ]

  return (
    <section id="faq" className="py-24 bg-dark-900 bg-[#0a0a0a] text-white">
        <Container className="max-w-3xl">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">Questions? Answers.</h2>
            
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border border-gray-800 rounded-xl overflow-hidden">
                        <button 
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex justify-between items-center p-5 text-left bg-black hover:bg-[#121212] transition-colors"
                        >
                            <span className="font-bold text-gray-200">{faq.question}</span>
                            <Plus className={cn("text-gray-500 transition-transform duration-300", openIndex === index && "rotate-45")} />
                        </button>
                        <div className={cn("p-5 pt-0 text-gray-400 bg-black text-sm leading-relaxed", openIndex === index ? "block" : "hidden")}>
                            {faq.answer}
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    </section>
  )
}
