import { Canvas } from '@react-three/fiber'
import { Sparkles } from '@react-three/drei'
import { Suspense, useRef, useEffect, useState } from 'react'
import { TechSculpture } from './TechSculpture'

export const HeroScene = () => {
  const mouse = useRef({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        window.innerWidth < 768 ||
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0
      )
    }

    checkMobile()
    window.addEventListener('resize', checkMobile, { passive: true })

    // Normalized mouse movement listener (-1 to 1)
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    return () => {
      window.removeEventListener('resize', checkMobile)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none opacity-60">
      {/* Dynamic atmospheric radial backdrop for lighting cohesion */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_60%_at_65%_45%,rgba(0,240,255,0.06)_0%,rgba(15,23,42,0.02)_50%,transparent_80%)]" />

      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 42 }}
        gl={{
          antialias: !isMobile,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        dpr={isMobile ? [1, 1.25] : [1, 2]}
        className="w-full h-full pointer-events-none"
        style={{ pointerEvents: 'none' }}
      >
        <Suspense fallback={null}>
          {/* Subtle Key lights */}
          <ambientLight intensity={0.3} color="#1e293b" />
          <directionalLight position={[5, 6, 4]} intensity={1.0} color="#cbd5e1" />
          <directionalLight position={[-4, -3, -2]} intensity={0.5} color="#0369a1" />

          {/* Gentle ambient core glow */}
          <pointLight position={[0, 0, 0]} intensity={1.8} distance={6} color="#00f0ff" />
          <pointLight position={[2, 3, 2]} intensity={0.9} distance={5} color="#38bdf8" />

          {/* Floating subtle motes */}
          <Sparkles
            count={isMobile ? 10 : 25}
            scale={isMobile ? 5.0 : 7.0}
            size={isMobile ? 1.2 : 1.8}
            speed={0.2}
            opacity={0.2}
            color="#38bdf8"
          />

          {/* The Kinetic Tech Sculpture */}
          <TechSculpture mouse={mouse} />
        </Suspense>
      </Canvas>
    </div>
  )
}
