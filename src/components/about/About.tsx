import { motion } from 'framer-motion'
import { Code2, Cpu, Sparkles, CheckCircle, MapPin, Globe } from 'lucide-react'

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
      title: 'Interactive & 3D Web',
      icon: Sparkles,
      accent: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/10',
      description:
        'Developing immersive WebGL and Three.js environments that run smoothly across devices. Bridging the gap between creative visual computing and reliable frontend engineering.',
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

        {/* Professional Summary Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-16">
          {/* Main Statement */}
          <div className="lg:col-span-7 space-y-5 text-neutral-300 font-sans text-sm sm:text-base leading-relaxed font-light">
            <p className="text-lg sm:text-xl font-normal text-white leading-snug">
              I am a software engineer dedicated to building software where mechanical systems reliability meets high-precision interface design.
            </p>
            <p className="text-neutral-400">
              My work spans from designing low-latency routing gateways and WebSocket market data streams in Go to building multimodal vision-language AI assistants with Next.js and FastAPI, high-throughput trading terminals, and interactive 3D product experiences in React, TypeScript, and Three.js.
            </p>
            <p className="text-neutral-400">
              I care deeply about software fundamentals: clean API contracts, predictable state machines, fast bundle execution, and interfaces that feel effortless to touch and use on any screen size.
            </p>
          </div>

          {/* Current Status Card */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-7 rounded-2xl sm:rounded-3xl border border-white/[0.08] bg-[#0b0e14]/90 backdrop-blur-xl space-y-5 shadow-xl">
              <div className="flex items-center gap-2.5 pb-4 border-b border-white/[0.06]">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#10b981]" />
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
                  Current Status
                </span>
              </div>

              <div className="space-y-3.5">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="text-xs font-mono text-white font-medium uppercase tracking-wider">
                      Open to Opportunities
                    </span>
                    <span className="text-xs text-neutral-400 font-sans mt-0.5 font-light">
                      Frontend, Full-Stack, UI Engineer & Systems roles
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="text-xs font-mono text-white font-medium uppercase tracking-wider">
                      Work Modes
                    </span>
                    <span className="text-xs text-neutral-400 font-sans mt-0.5 font-light">
                      Remote worldwide or onsite with relocation
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="text-xs font-mono text-white font-medium uppercase tracking-wider">
                      Location
                    </span>
                    <span className="text-xs text-neutral-400 font-sans mt-0.5 font-light">
                      Abuja, Nigeria · Willing to relocate
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.1] text-xs font-mono text-white uppercase tracking-wider transition-all duration-200 active:scale-95 min-h-[44px]"
                >
                  Initiate Discussion
                </a>
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
