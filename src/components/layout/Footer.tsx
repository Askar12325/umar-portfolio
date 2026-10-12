import { ArrowUp, Terminal } from 'lucide-react'

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative w-full py-12 px-4 sm:px-8 md:px-12 lg:px-20 border-t border-white/[0.06] bg-[#050608] text-neutral-400">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Brand & Title */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg border border-white/10 bg-white/[0.03] flex items-center justify-center text-cyan-400">
            <Terminal className="w-3.5 h-3.5" />
          </div>
          <span className="text-xs font-mono tracking-widest uppercase text-white font-semibold">
            UMAR ABUBAKAR
          </span>
          <span className="text-neutral-600 text-xs">//</span>
          <span className="text-xs font-mono text-neutral-500">
            SOFTWARE ENGINEER
          </span>
        </div>

        {/* Center: Copyright */}
        <div className="text-[11px] font-mono text-neutral-500 text-center">
          © {new Date().getFullYear()} Umar Abubakar. All rights reserved.
        </div>

        {/* Right: Scroll to top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/20 text-xs font-mono uppercase tracking-wider text-neutral-300 hover:text-white transition-all duration-200 cursor-pointer active:scale-95 min-h-[44px]"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
        </button>
      </div>
    </footer>
  )
}
