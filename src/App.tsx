import { Navbar } from './components/layout/Navbar'
import { Hero } from './components/hero/Hero'
import { About } from './components/about/About'
import { Projects } from './components/projects/Projects'
import { TechStack } from './components/stack/TechStack'
import { Contact } from './components/contact/Contact'
import { Footer } from './components/layout/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#050608] text-white selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      <Navbar />
      <main className="w-full">
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
