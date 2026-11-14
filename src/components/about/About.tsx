import { motion } from 'framer-motion'
import { Code2, Cpu, CheckCircle, MapPin, Globe, Bot } from 'lucide-react'
import profileImg from '../../assets/profile.jpg'

export const About = () => {
  const focusAreas = [
    {
      title: 'Frontend & UI Craft',
      icon: Code2,
      accent: 'text-cyan-400 border-cyan-500/20 bg-cyan-500/10',
      description:
        'Building responsive, accessible web applications with strict TypeScript and modern React architectures. Obsessed with typography, layout stability, sub-frame motion physics, and zero layout shift.',
    },
    {
      title: 'Systems & Backend',
      icon: Cpu,
      accent: 'text-indigo-400 border-indigo-500/20 bg-indigo-500/10',
      description:
        'Engineering high-throughput Go services, concurrent pipelines, and real-time WebSocket streams. Designing resilient distributed mechanisms including semantic caching, token bucket rate limiters, and failover routing.',
    },
    {
      title: 'Multimodal AI & 3D Web',
      icon: Bot,
      accent: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/10',
      description:
        'Developing vision-language AI architectures and immersive Three.js WebGL graphics that run at consistent 60fps across desktop and mobile browsers.',
    },
  ]

  return (
    <section id="about" className="relative w-full py-24 sm:py-32 px-4 sm:px-8 md:px-12 lg:px-20 border-t border-white/[0.06] bg-[#06080c]">
      {/* Subtle atmospheric glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-cyan-500/[0.03] blur-[160px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-400">
              Overview
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-display uppercase">
            About Me
          </h2>
        </div>

        {/* Senior Visual Profile & Summary Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
          
          {/* Prominent Circular Senior Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative group select-none"
            >
              {/* Outer atmospheric aura */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-cyan-500/30 via-indigo-500/20 to-teal-500/30 blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Outer border & glass ring */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full p-2 sm:p-2.5 bg-gradient-to-b from-white/35 via-white/10 to-white/15 border border-white/20 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
                <div className="w-full h-full rounded-full overflow-hidden bg-neutral-950 relative">
                  <img
                    src={profileImg}
                    alt="Umar Abubakar"
                    className="w-full h-full object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle inner shadow overlay */}
                  <div className="absolute inset-0 rounded-full pointer-events-none ring-1 ring-inset ring-white/20 shadow-[inset_0_0_24px_rgba(0,0,0,0.5)]" />
                </div>
              </div>

              {/* Verified Senior Badge overlay */}
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-6 px-4 py-2 rounded-full border border-white/15 bg-[#0b0e14]/90 backdrop-blur-xl shadow-2xl flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#10b981]" />
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-200 font-semibold">
                  Available for Hire
                </span>
              </div>
            </motion.div>
          </div>

          {/* Statement & Current Status */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-neutral-300 font-sans text-sm sm:text-base leading-relaxed font-light">
              <p className="text-xl sm:text-2xl font-normal text-white leading-snug">
                I am a software engineer dedicated to building software where mechanical systems reliability meets high-precision interface design.
              </p>
              <p className="text-neutral-400">
                My work spans from designing low-latency routing gateways and WebSocket market data streams in Go to building multimodal vision-language AI assistants with Next.js and FastAPI, high-throughput trading terminals, and interactive 3D product experiences in React, TypeScript, and Three.js.
              </p>
              <p className="text-neutral-400">
                I care deeply about software fundamentals: clean API contracts, predictable state machines, fast bundle execution, and interfaces that feel effortless to touch and use on any screen size.
              </p>
            </div>

            {/* Quick Status Pill Bar */}
            <div className="p-5 rounded-2xl border border-white/[0.08] bg-[#0b0e14]/80 backdrop-blur-xl grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[11px] font-mono text-white font-medium uppercase tracking-wider">
                    Opportunities
                  </span>
                  <span className="text-xs text-neutral-400 font-sans font-light">
                    Frontend & Systems
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-blue-400 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[11px] font-mono text-white font-medium uppercase tracking-wider">
                    Work Modes
                  </span>
                  <span className="text-xs text-neutral-400 font-sans font-light">
                    Remote or Relocation
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[11px] font-mono text-white font-medium uppercase tracking-wider">
                    Location
                  </span>
                  <span className="text-xs text-neutral-400 font-sans font-light">
                    Abuja, Nigeria
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Focus Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {focusAreas.map((area, idx) => {
            const Icon = area.icon
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="p-6 sm:p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/15 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-5 ${area.accent}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white font-display mb-2.5">
                    {area.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed font-light">
                    {area.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
