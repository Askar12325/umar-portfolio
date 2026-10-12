import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon, XIcon } from '../ui/Icons'
import { Button } from '../ui/Button'
import { Avatar } from '../ui/Avatar'
import { HeroScene } from './HeroScene'

export const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-28 sm:pt-32 pb-20 px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden bg-grid-pattern">
      {/* Secondary 3D Kinetic Canvas Backdrop */}
      <HeroScene />

      {/* Atmospheric ambient lighting */}
      <div className="pointer-events-none absolute top-1/4 left-1/4 w-[360px] sm:w-[500px] h-[360px] sm:h-[500px] rounded-full bg-cyan-500/[0.05] blur-[150px]" />
      <div className="pointer-events-none absolute bottom-1/3 right-1/4 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] rounded-full bg-blue-600/[0.04] blur-[160px]" />

      <div className="relative z-10 max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Left Column: Profile Photo, Name, Positioning, Supporting Line, CTAs & Socials */}
        <div className="lg:col-span-8 flex flex-col items-start text-left">
          
          {/* Large Circular Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <Avatar size="2xl" alt="Umar Abubakar" />
          </motion.div>

          {/* Name Display */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mb-3"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white uppercase font-display leading-[1.05]">
              UMAR ABUBAKAR
            </h1>
          </motion.div>

          {/* Positioning Line */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg sm:text-2xl md:text-3xl font-medium tracking-tight text-neutral-200 mb-4 font-display"
          >
            Software Engineer{' '}
            <span className="text-neutral-500 font-light">—</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-cyan-300 font-semibold">
              Frontend, Systems & Interactive Experiences
            </span>
          </motion.h2>

          {/* Supporting Line */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-base sm:text-lg font-sans text-neutral-400 max-w-2xl mb-9 leading-relaxed font-light"
          >
            Focused on building polished interfaces and reliable systems.
          </motion.p>

          {/* Action CTAs & Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto"
          >
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <Button
                variant="primary"
                href="#projects"
                icon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                View Projects
              </Button>
              <Button
                variant="secondary"
                href="#contact"
                icon={<Mail className="w-4 h-4 text-neutral-400" />}
                className="w-full sm:w-auto"
              >
                Contact
              </Button>
            </div>

            {/* Social Icons with exact working URLs */}
            <div className="flex items-center gap-3 pt-1 sm:pt-0 justify-start">
              <a
                href="https://www.linkedin.com/in/umar-abubakar-584408441"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full border border-white/10 bg-white/[0.04] hover:bg-white/[0.1] hover:border-cyan-400/40 flex items-center justify-center text-neutral-300 hover:text-white transition-all duration-200 active:scale-95 shadow-sm"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-400" />
              </a>
              <a
                href="https://github.com/Askar12325"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full border border-white/10 bg-white/[0.04] hover:bg-white/[0.1] hover:border-cyan-400/40 flex items-center justify-center text-neutral-300 hover:text-white transition-all duration-200 active:scale-95 shadow-sm"
              >
                <GithubIcon className="w-4 h-4 text-neutral-200" />
              </a>
              <a
                href="https://x.com/MikeKel22788521"
                target="_blank"
                rel="noreferrer"
                aria-label="X (Twitter) profile"
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full border border-white/10 bg-white/[0.04] hover:bg-white/[0.1] hover:border-cyan-400/40 flex items-center justify-center text-neutral-300 hover:text-white transition-all duration-200 active:scale-95 shadow-sm"
              >
                <XIcon className="w-4 h-4 text-cyan-400" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column: 3D Framing Buffer (Sculpture renders subtly here) */}
        <div className="lg:col-span-4 relative hidden lg:flex items-center justify-center min-h-[360px] pointer-events-none" />
      </div>
    </section>
  )
}
