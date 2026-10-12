import { useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Send, CheckCircle2, AlertCircle, Loader2, MapPin, ArrowUpRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon, XIcon } from '../ui/Icons'

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState<string>('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return

    setStatus('submitting')
    setErrorMessage('')

    try {
      const response = await fetch('https://formspree.io/f/mzedvwdg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setStatus('submitted')
        setFormData({ name: '', email: '', message: '' })
      } else {
        const data = await response.json().catch(() => null)
        const errorText =
          data?.errors?.map((err: { message: string }) => err.message).join(', ') ||
          'Failed to send message. Please try again or reach out directly.'
        setErrorMessage(errorText)
        setStatus('error')
      }
    } catch {
      setErrorMessage('Network connection error. Please try again or reach out via email.')
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative w-full py-24 sm:py-32 px-4 sm:px-8 md:px-12 lg:px-20 border-t border-white/[0.06] bg-[#050608]">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute bottom-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-cyan-500/[0.03] blur-[150px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14 sm:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-400">
              Initiate Dialogue
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-display uppercase">
            Get In Touch
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400 max-w-xl font-light">
            Open to Frontend, Full-Stack, UI Engineer, and Systems engineering opportunities. Let's discuss building something exceptional.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Direct info & Social Links */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                Let's connect.
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-light">
                Whether you're looking to hire for an engineering role, discuss high-throughput systems, or collaborate on an interactive 3D web experience, my inbox is open.
              </p>

              <div className="space-y-4 pt-2">
                <a
                  href="mailto:umar.abubakar.dev@gmail.com"
                  className="flex items-center gap-3 p-3.5 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20 transition-all text-neutral-300 hover:text-white group"
                >
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                      Email
                    </span>
                    <span className="text-xs sm:text-sm font-mono text-white font-medium">
                      umar.abubakar.dev@gmail.com
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl border border-white/[0.06] bg-white/[0.02] text-neutral-300">
                  <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                      Location & Mobility
                    </span>
                    <span className="text-xs sm:text-sm font-sans text-neutral-300">
                      Abuja, Nigeria · Open to Relocation & Remote
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links Network */}
            <div className="space-y-3 pt-6 border-t border-white/[0.06]">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block">
                Social Profiles
              </span>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href="https://www.linkedin.com/in/umar-abubakar-584408441"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-cyan-400/40 text-xs font-mono text-neutral-300 hover:text-white transition-all group active:scale-95 shadow-sm"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-500 group-hover:text-white transition-colors" />
                </a>

                <a
                  href="https://github.com/Askar12325"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-cyan-400/40 text-xs font-mono text-neutral-300 hover:text-white transition-all group active:scale-95 shadow-sm"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-neutral-200" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-500 group-hover:text-white transition-colors" />
                </a>

                <a
                  href="https://x.com/MikeKel22788521"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-cyan-400/40 text-xs font-mono text-neutral-300 hover:text-white transition-all group active:scale-95 shadow-sm"
                >
                  <XIcon className="w-3.5 h-3.5 text-cyan-400" />
                  <span>X (Twitter)</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-500 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Fully Functional Formspree Form */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl sm:rounded-3xl border border-white/[0.08] bg-[#0b0e14]/90 backdrop-blur-xl p-6 sm:p-10 shadow-2xl">
              <AnimatePresence mode="wait">
                {status === 'submitted' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center justify-center text-center py-12 space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_24px_rgba(16,185,129,0.25)]">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl sm:text-2xl font-bold text-white font-display">
                      Message Sent Successfully
                    </h4>
                    <p className="text-sm text-neutral-400 max-w-sm font-light leading-relaxed">
                      Thank you for reaching out, Umar. Your message has been received through Formspree and I will respond promptly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus('idle')}
                      className="mt-4 px-6 py-3 rounded-full border border-white/10 bg-white/[0.05] hover:bg-white/[0.1] text-xs font-mono text-white tracking-wider uppercase transition-all active:scale-95 cursor-pointer min-h-[44px] inline-flex items-center justify-center"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    {status === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 rounded-xl border border-rose-500/30 bg-rose-500/10 text-rose-300 text-xs sm:text-sm font-sans flex items-start gap-3"
                      >
                        <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <p className="font-medium text-rose-200">Submission Error</p>
                          <p className="text-xs text-rose-300/90 mt-0.5">{errorMessage}</p>
                        </div>
                      </motion.div>
                    )}

                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        disabled={status === 'submitting'}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Mercer"
                        className="w-full px-4 py-3.5 min-h-[46px] rounded-xl border border-white/10 bg-white/[0.03] text-white placeholder-neutral-600 focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/40 text-sm font-sans transition-all disabled:opacity-50"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        disabled={status === 'submitting'}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3.5 min-h-[46px] rounded-xl border border-white/10 bg-white/[0.03] text-white placeholder-neutral-600 focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/40 text-sm font-sans transition-all disabled:opacity-50"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        disabled={status === 'submitting'}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell me about your project, engineering role, or timeline..."
                        className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-white/[0.03] text-white placeholder-neutral-600 focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/40 text-sm font-sans resize-none transition-all disabled:opacity-50 min-h-[120px]"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full mt-2 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white text-black hover:bg-neutral-200 text-xs sm:text-sm font-mono font-bold tracking-wider uppercase transition-all duration-300 shadow-[0_0_24px_rgba(255,255,255,0.2)] disabled:opacity-60 cursor-pointer active:scale-[0.99] min-h-[48px]"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-black" />
                          <span>Sending message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
