import { motion } from 'framer-motion'
import { ExternalLink, Terminal, Activity, Headphones } from 'lucide-react'
import { GithubIcon } from '../ui/Icons'

interface Project {
  id: string
  title: string
  category: string
  description: string
  metrics?: string
  tags: string[]
  liveUrl: string
  githubUrl: string
  theme: {
    accent: string
    glow: string
    border: string
    badgeBg: string
  }
}

const projects: Project[] = [
  {
    id: 'nexusllm',
    title: 'NexusLLM Gateway',
    category: 'SYSTEMS & DISTRIBUTED INFRA',
    description:
      'High-throughput distributed LLM gateway engineered in Go. Features sub-millisecond semantic caching, token bucket rate limiting, and automated multi-provider fallback orchestration across OpenAI, Anthropic, and local models.',
    metrics: '<0.8ms Overhead · 99.99% Uptime',
    tags: ['Go', 'Distributed Systems', 'Redis', 'Docker', 'Rate Limiting', 'gRPC'],
    liveUrl: 'https://nexus-llm-production-857d.up.railway.app',
    githubUrl: 'https://github.com/Askar12325',
    theme: {
      accent: 'text-indigo-400',
      glow: 'from-indigo-500/10 via-purple-500/5 to-transparent',
      border: 'hover:border-indigo-500/40',
      badgeBg: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
    },
  },
  {
    id: 'apextrade',
    title: 'ApexTrade Terminal',
    category: 'FINTECH & HIGH-THROUGHPUT UI',
    description:
      'Institutional-grade crypto spot and derivatives trading terminal. Integrates high-frequency WebSocket streams, real-time orderbook depth visualization with zero UI hitching, and responsive lightweight charting.',
    metrics: '50ms Orderbook Feed · 60 FPS Canvas',
    tags: ['React', 'TypeScript', 'WebSockets', 'Tailwind CSS', 'State Machines', 'Canvas'],
    liveUrl: 'https://apextrade-mwrg.onrender.com',
    githubUrl: 'https://github.com/Askar12325',
    theme: {
      accent: 'text-emerald-400',
      glow: 'from-emerald-500/10 via-cyan-500/5 to-transparent',
      border: 'hover:border-emerald-500/40',
      badgeBg: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
    },
  },
  {
    id: 'aura',
    title: 'AURA Spatial Headset',
    category: '3D GRAPHICS & INTERACTIVE WEB',
    description:
      'Luxury interactive 3D product showcase for next-generation spatial audio hardware. Features real-time WebGL rendering, scroll-driven exploded assembly visualization, and dynamic Spatial, Stereo, and ANC acoustic modes.',
    metrics: 'PBR Shaders · WebGL Hardware Accel',
    tags: ['Three.js', 'React Three Fiber', 'GLTF / PBR', 'Framer Motion', 'Tailwind CSS'],
    liveUrl: 'https://aura-headset-gamma.vercel.app/',
    githubUrl: 'https://github.com/Askar12325/aura-spatial',
    theme: {
      accent: 'text-cyan-400',
      glow: 'from-cyan-500/10 via-blue-500/5 to-transparent',
      border: 'hover:border-cyan-500/40',
      badgeBg: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
    },
  },
]

export const Projects = () => {
  return (
    <section id="projects" className="relative w-full py-24 sm:py-32 px-4 sm:px-8 md:px-12 lg:px-20 border-t border-white/[0.06] bg-[#050608]">
      {/* Background radial atmosphere */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/[0.03] blur-[160px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14 sm:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-400">
              Selected Work
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-display uppercase">
            Featured Projects
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400 max-w-xl font-light">
            A curated selection of high-performance systems, trading interfaces, and creative 3D engineering.
          </p>
        </div>

        {/* Project Cards Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-white/[0.08] ${project.theme.border} bg-[#0b0d12]/90 backdrop-blur-xl p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 overflow-hidden ${
                idx === 2 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Inner ambient card glow */}
              <div
                className={`pointer-events-none absolute -inset-px rounded-2xl sm:rounded-3xl bg-gradient-to-br ${project.theme.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                {/* Header Lockup: Category & Visual Icon */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase border font-semibold ${project.theme.badgeBg}`}
                  >
                    {project.category}
                  </span>

                  <div className="w-9 h-9 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:border-white/20 transition-colors">
                    {project.id === 'nexusllm' && <Terminal className="w-4 h-4 text-indigo-400" />}
                    {project.id === 'apextrade' && <Activity className="w-4 h-4 text-emerald-400" />}
                    {project.id === 'aura' && <Headphones className="w-4 h-4 text-cyan-400" />}
                  </div>
                </div>

                {/* Title & Metrics */}
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display tracking-tight mb-2 group-hover:text-cyan-200 transition-colors">
                  {project.title}
                </h3>

                {project.metrics && (
                  <p className="text-[11px] font-mono text-neutral-500 mb-4 tracking-wide">
                    {project.metrics}
                  </p>
                )}

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed mb-6 font-light">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono text-neutral-300 bg-white/[0.04] border border-white/[0.06] group-hover:border-white/10 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="relative z-10 pt-4 border-t border-white/[0.06] flex items-center gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white text-black hover:bg-neutral-200 text-xs font-mono font-semibold tracking-wider uppercase transition-all duration-200 shadow-md active:scale-95 min-h-[44px]"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} GitHub repository`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.1] hover:border-white/20 text-neutral-300 hover:text-white text-xs font-mono tracking-wider uppercase transition-all duration-200 active:scale-95 min-h-[44px]"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Code</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
