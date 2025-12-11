"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import React from "react"

/**
 * FAQ Section
 * Accordion-style FAQ
 * Seven questions with detailed answers
 * Smooth expand/collapse animations
 */

const FAQS = [
  {
    question: "What is Growthbae?",
    answer:
      "Growthbae is a founder-focused build studio. We help you validate ideas, build MVPs and create scalable systems using a blend of design, product thinking and clean engineering.",
  },
  {
    question: "What services do you offer?",
    answer: (
      <div className="space-y-4">
        <p>
          We focus on building products that ship. You can work with us in three
          ways:
        </p>
        <ul className="space-y-2">
          <li className="flex gap-2">
            <span className="font-bold text-[#0B6E4F]">•</span>
            <span>
              <strong>MVP Development</strong> — from idea to a working product
            </span>
          </li>
          <li className="flex gap-2">
            <span className="font-bold text-[#0B6E4F]">•</span>
            <span>
              <strong>Systems & Automation</strong> — dashboards, internal tools
              and workflow automation
            </span>
          </li>
          <li className="flex gap-2">
            <span className="font-bold text-[#0B6E4F]">•</span>
            <span>
              <strong>Landing Page Development</strong> — fast, clean pages
              built on Framer or Webflow
            </span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "Do you code everything or use no-code tools?",
    answer: (
      <div className="space-y-4">
        <p>
          We write all our code by hand using a modern, AI-assisted stack:
          Next.js, Supabase, TailwindCSS and Cursor.
        </p>
        <p>For landing pages, we use Framer or Webflow to ship faster.</p>
        <p>
          No-code is great for marketing sites, but for real products we prefer
          clean, scalable code.
        </p>
      </div>
    ),
  },
  {
    question: "How long does MVP development take?",
    answer: (
      <div className="space-y-4">
        <p>Most MVPs take 5–6 weeks. This includes:</p>
        <ul className="space-y-2">
          <li className="flex gap-2">
            <span className="font-bold text-[#0B6E4F]">•</span> defining the
            core version of your product
          </li>
          <li className="flex gap-2">
            <span className="font-bold text-[#0B6E4F]">•</span> building the
            frontend and backend
          </li>
          <li className="flex gap-2">
            <span className="font-bold text-[#0B6E4F]">•</span> shipping a live,
            testable version
          </li>
        </ul>
        <p>
          Timelines stay fast because of our structured workflow and AI-assisted
          development.
        </p>
      </div>
    ),
  },
  {
    question: "What's included in the MVP package?",
    answer: (
      <div className="space-y-4">
        <p>Everything you need to launch:</p>
        <ul className="space-y-2">
          <li className="flex gap-2">
            <span className="font-bold text-[#0B6E4F]">•</span> core feature set
            (usually 3–4 essential features)
          </li>
          <li className="flex gap-2">
            <span className="font-bold text-[#0B6E4F]">•</span> a working web
            app, hosted and live
          </li>
          <li className="flex gap-2">
            <span className="font-bold text-[#0B6E4F]">•</span> a clean,
            responsive interface
          </li>
          <li className="flex gap-2">
            <span className="font-bold text-[#0B6E4F]">•</span> basic product
            flows and user journeys
          </li>
        </ul>
        <p>If you want deeper UI/UX work, we can add that too.</p>
      </div>
    ),
  },
  {
    question: "What makes you different from other studios or agencies?",
    answer:
      "We combine design, product and engineering into one team. That means faster decisions, cleaner execution and a product that feels intentional—not stitched together across departments.",
  },
  {
    question: "Can you help after the MVP is launched?",
    answer:
      "Yes. We offer follow-up phases for scaling features, improving UX and adding systems or automation once you have validated the idea.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <Section className="bg-[#F5F1E5] !pt-10" id="faq">
      <Container>
        {/* Header */}
        <div className="mb-6 text-center md:mb-8 lg:mb-12">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-[#004225]/10 bg-white/10 px-2.5 py-0.5 text-[10px] font-medium text-[#004225] backdrop-blur-md md:mb-4 md:px-3 md:py-1 md:text-xs">
            <span className="relative flex h-1.5 w-1.5 md:h-2 md:w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-full w-full rounded-full bg-green-500"></span>
            </span>
            FAQ
          </div>
          <h2 className="mb-2 text-xl font-bold text-[#004225] md:mb-3 md:text-2xl lg:text-3xl xl:text-4xl">
            Common questions.{" "}
            <span className="font-serif italic text-[#0B6E4F]">
              Clear answers.
            </span>
          </h2>
          <p className="text-xs text-[#004225]/60 md:text-sm">
            Everything you need to know about how we build, ship, and scale.
          </p>
        </div>

        <div className="mx-auto max-w-full space-y-1.5 md:max-w-4xl md:space-y-2">
          {FAQS.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="overflow-hidden rounded-lg border border-[#004225]/10 bg-white shadow-sm md:rounded-xl"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="group flex w-full items-center justify-between px-3 py-2.5 text-left transition-colors hover:bg-[#F5F1E5]/30 md:px-4 md:py-3 lg:px-6"
              >
                <span className="pr-3 text-xs font-bold text-[#004225] transition-colors group-hover:text-[#0B6E4F] md:pr-4 md:text-sm lg:text-[15px]">
                  {faq.question}
                </span>
                <span
                  className={`
                  flex h-4 w-4 flex-shrink-0 items-center justify-center
                  text-[#004225] transition-all duration-300
                  md:h-5 md:w-5
                  ${openIndex === index ? "rotate-45" : ""}
                `}
                >
                  <Plus className="h-3 w-3 md:h-4 md:w-4" />
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                  >
                    <div className="px-3 pb-3 pt-0 text-xs leading-relaxed text-[#004225]/70 md:px-4 md:pb-4 md:text-sm lg:px-6">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
