"use client"

import { motion } from "framer-motion"
import { 
  CheckCircle2, 
  Search, 
  Lightbulb, 
  Zap, 
  Sparkles, 
  Cpu, 
  Rocket, 
  ArrowRight 
} from "lucide-react"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { cn } from "@/lib/utils"

export function ProcessSection() {
  return (
    <Section padding="none" className="bg-transparent py-24 px-6 md:px-12 overflow-hidden text-[#0A291E] antialiased">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-24 text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#134E39]/20 bg-white text-[#134E39] text-sm font-semibold mb-6 tracking-wide uppercase">
              How We Work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A291E] mb-6 leading-tight">
              From napkin sketch to <br className="hidden md:block" /> scalable product.
            </h2>
            <p className="text-lg text-[#4A5D55]">
              Our proven four-step framework ensures we validate fast, build correctly, and launch with momentum.
            </p>
          </motion.div>
        </div>

        <div className="space-y-24 md:space-y-32 relative">
          {/* Connecting Line (Desktop Only) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block z-0 dashed-line"></div>
          
          <style jsx>{`
            .dashed-line {
              background-image: linear-gradient(to bottom, #D1DBD7 50%, transparent 50%);
              background-size: 1px 20px;
              background-repeat: repeat-y;
            }
          `}</style>

          {/* STEP 01: DISCOVER */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center"
          >
            {/* Text Content (Left) */}
            <div className="order-2 md:order-1 text-left md:text-right pr-0 md:pr-12">
              <span className="text-6xl font-bold text-[#134E39]/10 block mb-4 leading-none">01</span>
              <h3 className="text-3xl font-bold text-[#0A291E] mb-4">Discover</h3>
              <p className="text-lg text-[#4A5D55] leading-relaxed">
                We kick things off with a deep dive into your vision. We identify user needs, analyze market gaps, and validate assumptions before writing a single line of code.
              </p>
              <ul className="mt-6 space-y-2 inline-block text-left">
                <li className="flex items-center gap-3 text-[#4A5D55]">
                  <CheckCircle2 className="w-5 h-5 text-[#134E39]" /> 
                  Stakeholder Interviews
                </li>
                <li className="flex items-center gap-3 text-[#4A5D55]">
                  <CheckCircle2 className="w-5 h-5 text-[#134E39]" /> 
                  Competitor Analysis
                </li>
              </ul>
            </div>
            
            {/* Visual/Image (Right) */}
            <div className="order-1 md:order-2">
              <div className="relative w-full aspect-[16/9] bg-white rounded-[2rem] border border-[#D1DBD7] overflow-hidden shadow-sm group">
                {/* Abstract Diagram: Nodes connecting */}
                <div className="absolute inset-0 bg-[radial-gradient(#134E39_0.5px,transparent_0.5px)] [background-size:16px_16px] opacity-[0.03]"></div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full max-w-lg h-64 sm:h-72">
                    {/* Node 1 */}
                    <div className="diagram-node absolute top-4 left-2 px-5 py-3 rounded-xl flex items-center gap-2 bg-white border border-gray-200 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_15px_-3px_rgba(19,78,57,0.1)] hover:border-[#134E39]">
                      <div className="w-3 h-3 rounded-full bg-[#134E39]"></div>
                      <span className="font-medium text-sm text-[#0A291E]">Idea</span>
                    </div>
                    {/* Curved Line */}
                    <svg
                      className="absolute top-10 left-16 w-[280px] h-[220px] text-[#D1DBD7]"
                      viewBox="0 0 280 220"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <path d="M10 20 C120 60 140 180 140 210" />
                    </svg>
                    {/* Node 2 */}
                    <div className="diagram-node absolute bottom-4 left-1/2 -translate-x-1/2 px-5 py-3 rounded-xl flex items-center gap-2 bg-white border border-gray-200 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_15px_-3px_rgba(19,78,57,0.1)] hover:border-[#134E39]">
                      <Search className="w-4 h-4 text-[#134E39]" />
                      <span className="font-medium text-sm text-[#0A291E]">Research</span>
                    </div>
                    {/* Curved Line 2 */}
                    <svg
                      className="absolute bottom-10 right-16 w-[280px] h-[220px] text-[#D1DBD7]"
                      viewBox="0 0 280 220"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <path d="M140 200 C200 140 220 80 260 30" />
                    </svg>
                    {/* Node 3 */}
                    <div className="diagram-node absolute top-4 right-2 px-5 py-3 rounded-xl flex items-center gap-2 bg-[#E6EFE9]/30 border border-[#134E39] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_15px_-3px_rgba(19,78,57,0.1)] hover:border-[#134E39]">
                      <Lightbulb className="w-4 h-4 text-[#134E39]" />
                      <span className="font-medium text-sm text-[#0A291E]">Concept</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* STEP 02: STRATEGIZE */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center"
          >
            {/* Visual/Image (Left) */}
            <div className="order-1">
              <div className="relative w-full aspect-[16/9] bg-[#0A291E] rounded-[2rem] overflow-hidden shadow-xl group">
                {/* Dark Mode Diagram for variety */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0A291E] to-[#0F1F18]"></div>
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="w-full grid grid-cols-3 gap-3 opacity-90">
                    {/* Simple Gantt Chart Visualization */}
                    <div className="col-span-1 h-2 bg-white/10 rounded-full mt-2"></div>
                    <div className="col-span-2 h-2 bg-[#134E39] rounded-full mt-2 animate-pulse"></div>
                    
                    <div className="col-span-2 h-2 bg-white/20 rounded-full mt-4"></div>
                    <div className="col-span-1 h-2 bg-transparent rounded-full mt-4"></div>
                    
                    <div className="col-span-1 h-2 bg-transparent rounded-full mt-4"></div>
                    <div className="col-span-2 h-2 bg-white/10 rounded-full mt-4"></div>
                    {/* Floating Card */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-xl text-center">
                      <span className="text-white text-xs font-mono uppercase tracking-widest block mb-1">Roadmap</span>
                      <span className="text-white font-bold text-xl">Q1 Launch</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Text Content (Right) */}
            <div className="order-2 pl-0 md:pl-12">
              <span className="text-6xl font-bold text-[#134E39]/10 block mb-4 leading-none">02</span>
              <h3 className="text-3xl font-bold text-[#0A291E] mb-4">Strategize</h3>
              <p className="text-lg text-[#4A5D55] leading-relaxed">
                We map out the core feature set, prioritizing value over volume. We align the technical architecture with your business goals to ensure scalability from day one.
              </p>
               <ul className="mt-6 space-y-2">
                <li className="flex items-center gap-3 text-[#4A5D55]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#134E39]"></div>
                  Tech Stack Selection
                </li>
                <li className="flex items-center gap-3 text-[#4A5D55]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#134E39]"></div>
                  Feature Prioritization (MoSCoW)
                </li>
              </ul>
            </div>
          </motion.div>

          {/* STEP 03: BUILD */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center"
          >
            {/* Text Content (Left) */}
            <div className="order-2 md:order-1 text-left md:text-right pr-0 md:pr-12">
              <span className="text-6xl font-bold text-[#134E39]/10 block mb-4 leading-none">03</span>
              <h3 className="text-3xl font-bold text-[#0A291E] mb-4">Build</h3>
              <p className="text-lg text-[#4A5D55] leading-relaxed">
                We build with AI and Cursor to shorten timelines. By removing repetitive work, we turn ideas into production-ready products far quicker than most teams can.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 md:justify-end">
                <span className="px-3 py-1 bg-[#134E39]/5 text-[#134E39] rounded-full text-xs font-medium border border-[#134E39]/10 flex items-center gap-1.5">
                  <Zap className="w-3 h-3" /> 2x Velocity
                </span>
                <span className="px-3 py-1 bg-[#134E39]/5 text-[#134E39] rounded-full text-xs font-medium border border-[#134E39]/10 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3" /> AI Assisted
                </span>
                <span className="px-3 py-1 bg-[#134E39]/5 text-[#134E39] rounded-full text-xs font-medium border border-[#134E39]/10 flex items-center gap-1.5">
                  <Cpu className="w-3 h-3" /> Automated
                </span>
              </div>
            </div>
            
            {/* Visual/Image (Right) */}
            <div className="order-1 md:order-2">
               <div className="relative w-full aspect-[16/9] bg-[#E6EFE9] rounded-[2rem] border border-transparent overflow-hidden shadow-inner group">
                <div className="absolute inset-0 bg-[radial-gradient(#134E39_0.5px,transparent_0.5px)] [background-size:20px_20px] opacity-[0.05]"></div>
                
                {/* AI Acceleration Visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Central AI Core */}
                    <div className="w-16 h-16 bg-gradient-to-br from-[#134E39] to-[#0F291E] rounded-2xl flex items-center justify-center shadow-2xl relative z-10 group-hover:scale-110 transition-transform duration-500">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Orbiting Ring */}
                    <div className="absolute inset-0 -m-6 border border-[#134E39]/20 rounded-full animate-[spin_8s_linear_infinite]"></div>
                    <div className="absolute inset-0 -m-10 border border-[#134E39]/10 rounded-full animate-[spin_12s_linear_infinite_reverse]"></div>
                    {/* Generated Outputs (Cards floating out) */}
                    <div className="absolute top-1/2 left-20 -translate-y-1/2 flex flex-col gap-2 opacity-80">
                      <div className="w-12 h-8 bg-white border border-[#D1DBD7] rounded shadow-sm"></div>
                      <div className="w-16 h-10 bg-white border border-[#D1DBD7] rounded shadow-sm -ml-4"></div>
                    </div>
                    <div className="absolute top-1/2 right-20 -translate-y-1/2 flex flex-col gap-2 items-end opacity-80">
                      <div className="w-10 h-10 bg-white border border-[#D1DBD7] rounded shadow-sm"></div>
                      <div className="w-14 h-8 bg-white border border-[#D1DBD7] rounded shadow-sm -mr-2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* STEP 04: DELIVER */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center"
          >
            {/* Visual/Image (Left) */}
            <div className="order-1">
              <div className="relative w-full aspect-[16/9] bg-white rounded-[2rem] border border-[#D1DBD7] overflow-hidden shadow-sm group hover:shadow-md transition-all">
                 <div className="absolute inset-0 bg-[radial-gradient(#134E39_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-[0.05]"></div>
                 
                 {/* Launch Visual */}
                 <div className="absolute inset-0 flex items-center justify-center">
                   <div className="text-center">
                     <div className="w-16 h-16 bg-[#134E39] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl shadow-[#134E39]/20 group-hover:-translate-y-2 transition-transform duration-300">
                       <Rocket className="w-8 h-8 text-white" />
                     </div>
                     <h4 className="text-[#0A291E] font-bold text-lg">Ready for Lift-off</h4>
                     <p className="text-[#4A5D55] text-sm mt-1">Version 1.0 Live</p>
                   </div>
                 </div>
              </div>
            </div>
            
            {/* Text Content (Right) */}
            <div className="order-2 pl-0 md:pl-12">
              <span className="text-6xl font-bold text-[#134E39]/10 block mb-4 leading-none">04</span>
              <h3 className="text-3xl font-bold text-[#0A291E] mb-4">Deliver</h3>
              <p className="text-lg text-[#4A5D55] leading-relaxed">
                We don't just hand over code; we ensure a smooth deployment. We monitor the launch, handle initial feedback, and set you up with documentation for future scaling.
              </p>
              <div className="mt-8">
                <button className="px-4 py-2 bg-[#134E39] hover:bg-[#0A291E] text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2 group">
                    Start your project 
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

