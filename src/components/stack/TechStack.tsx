import { motion } from 'framer-motion'
import {
  Code2,
  Server,
  Cpu,
  Layers,
  Sparkles,
  Zap,
  Box,
  Database,
  Radio,
  Globe,
  Terminal,
  Activity,
  Bot,
  Binary,
} from 'lucide-react'

interface TechItem {
  name: string
  category: string
  icon: typeof Code2
  color: string
}

const row1: TechItem[] = [
  { name: 'Python', category: 'AI & Data Processing', icon: Binary, color: 'text-amber-400 border-amber-500/20 bg-amber-500/10' },
  { name: 'FastAPI', category: 'High-Performance APIs', icon: Zap, color: 'text-teal-400 border-teal-500/20 bg-teal-500/10' },
  { name: 'Next.js 15', category: 'App Router & SSR', icon: Code2, color: 'text-neutral-200 border-white/20 bg-white/10' },
  { name: 'Go (Golang)', category: 'High-Throughput Systems', icon: Terminal, color: 'text-cyan-400 border-cyan-500/20 bg-cyan-500/10' },
  { name: 'React', category: 'Reactive UI Architecture', icon: Code2, color: 'text-sky-400 border-sky-500/20 bg-sky-500/10' },
  { name: 'TypeScript', category: 'Strict Type Systems', icon: Layers, color: 'text-blue-400 border-blue-500/20 bg-blue-500/10' },
  { name: 'Three.js & R3F', category: '3D & WebGL Graphics', icon: Sparkles, color: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/10' },
  { name: 'Distributed Systems', category: 'Routing & Failover', icon: Cpu, color: 'text-indigo-400 border-indigo-500/20 bg-indigo-500/10' },
]

const row2: TechItem[] = [
  { name: 'Vision-Language AI', category: 'Meta Muse & Multimodal VLMs', icon: Bot, color: 'text-violet-400 border-violet-500/20 bg-violet-500/10' },
  { name: 'WebSockets', category: 'Real-Time Streaming', icon: Radio, color: 'text-amber-400 border-amber-500/20 bg-amber-500/10' },
  { name: 'Tailwind CSS', category: 'Responsive Design Tokens', icon: Zap, color: 'text-cyan-400 border-cyan-500/20 bg-cyan-500/10' },
  { name: 'Docker', category: 'Containerization', icon: Box, color: 'text-blue-400 border-blue-500/20 bg-blue-500/10' },
  { name: 'Node.js', category: 'Asynchronous Services', icon: Server, color: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/10' },
  { name: 'Framer Motion', category: 'Physics & Orchestration', icon: Activity, color: 'text-purple-400 border-purple-500/20 bg-purple-500/10' },
  { name: 'Redis', category: 'Semantic In-Memory Cache', icon: Database, color: 'text-rose-400 border-rose-500/20 bg-rose-500/10' },
  { name: 'gRPC & Protobuf', category: 'Low-Latency RPC', icon: Globe, color: 'text-teal-400 border-teal-500/20 bg-teal-500/10' },
]

export const TechStack = () => {
  return (
    <section id="stack" className="relative w-full py-24 sm:py-32 overflow-hidden border-t border-white/[0.06] bg-[#07090d]">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] rounded-full bg-cyan-500/[0.03] blur-[160px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20 mb-14 sm:mb-16">
        {/* Section Header */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-400">
              Technical Capabilities
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-display uppercase">
            Tech Stack
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400 max-w-xl font-light">
            Core technologies and tools deployed across high-throughput systems, reactive frontend applications, and 3D web experiences.
          </p>
        </div>
      </div>

      {/* Infinite Horizontal Marquee Container */}
      <div className="relative w-full max-w-full overflow-hidden select-none">
        {/* Left & Right gradient edge fades for smooth infinite floating */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-32 md:w-48 bg-gradient-to-r from-[#07090d] to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-32 md:w-48 bg-gradient-to-l from-[#07090d] to-transparent z-20" />

        {/* Row 1: Leftward continuous glide */}
        <div className="flex w-full max-w-full overflow-hidden py-2 sm:py-3">
          <motion.div
            className="flex gap-4 sm:gap-6 shrink-0"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              repeat: Infinity,
              ease: 'linear',
              duration: 28,
            }}
          >
            {[...row1, ...row1].map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={`${item.name}-${idx}`}
                  className="group relative flex items-center gap-3.5 px-5 sm:px-6 py-3 sm:py-4 rounded-2xl border border-white/[0.08] bg-[#0b0e14]/90 backdrop-blur-xl hover:border-cyan-400/40 hover:bg-white/[0.04] transition-all duration-300 shadow-lg shrink-0 cursor-default"
                >
                  <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl border flex items-center justify-center shrink-0 ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs sm:text-sm font-mono font-semibold text-white tracking-wide group-hover:text-cyan-200 transition-colors">
                      {item.name}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-sans text-neutral-400 font-light">
                      {item.category}
                    </span>
                  </div>
                </div>
              )
            })}
          </motion.div>
        </div>

        {/* Row 2: Rightward continuous glide */}
        <div className="flex w-full max-w-full overflow-hidden py-2 sm:py-3">
          <motion.div
            className="flex gap-4 sm:gap-6 shrink-0"
            animate={{ x: ['-50%', '0%'] }}
            transition={{
              repeat: Infinity,
              ease: 'linear',
              duration: 32,
            }}
          >
            {[...row2, ...row2].map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={`${item.name}-${idx}`}
                  className="group relative flex items-center gap-3.5 px-5 sm:px-6 py-3 sm:py-4 rounded-2xl border border-white/[0.08] bg-[#0b0e14]/90 backdrop-blur-xl hover:border-cyan-400/40 hover:bg-white/[0.04] transition-all duration-300 shadow-lg shrink-0 cursor-default"
                >
                  <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl border flex items-center justify-center shrink-0 ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs sm:text-sm font-mono font-semibold text-white tracking-wide group-hover:text-cyan-200 transition-colors">
                      {item.name}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-sans text-neutral-400 font-light">
                      {item.category}
                    </span>
                  </div>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
