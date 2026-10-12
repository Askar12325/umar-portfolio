import { useState } from 'react'
import defaultAvatar from '../../assets/profile.jpg'

interface AvatarProps {
  src?: string
  alt?: string
  size?: 'md' | 'lg' | 'xl' | '2xl'
  className?: string
}

export const Avatar = ({
  src = defaultAvatar,
  alt = 'Umar Abubakar',
  size = '2xl',
  className = '',
}: AvatarProps) => {
  const [imgError, setImgError] = useState(false)

  const sizeClasses = {
    md: 'w-24 h-24',
    lg: 'w-32 h-32 sm:w-36 sm:h-36',
    xl: 'w-40 h-40 sm:w-44 sm:h-44',
    '2xl': 'w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52',
  }

  return (
    <div className={`relative group shrink-0 select-none ${className}`}>
      {/* Soft atmospheric ambient glow */}
      <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-cyan-500/30 via-blue-500/20 to-indigo-500/30 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Outer circular frame with premium gradient border */}
      <div
        className={`relative ${sizeClasses[size]} rounded-full p-1.5 sm:p-2 bg-gradient-to-b from-white/30 via-white/10 to-white/15 border border-white/20 backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.7)] overflow-hidden`}
      >
        <div className="w-full h-full rounded-full overflow-hidden bg-neutral-900 relative flex items-center justify-center">
          {!imgError ? (
            <img
              src={src}
              alt={alt}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-105"
            />
          ) : (
            /* Fallback stylized circular portrait */
            <div className="w-full h-full bg-gradient-to-b from-neutral-800 via-neutral-900 to-[#050608] flex items-center justify-center relative">
              <svg
                viewBox="0 0 160 160"
                className="w-full h-full p-2 text-neutral-400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="80" cy="80" r="76" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
                <circle cx="80" cy="62" r="28" fill="#38bdf8" fillOpacity="0.85" />
                <path
                  d="M32 140C32 114 53 100 80 100C107 100 128 114 128 140"
                  fill="#0284c7"
                  fillOpacity="0.85"
                />
              </svg>
            </div>
          )}

          {/* Active status indicator badge */}
          <div className="absolute bottom-2.5 right-2.5 sm:bottom-3.5 sm:right-3.5 w-4 h-4 sm:w-4.5 sm:h-4.5 rounded-full bg-emerald-400 border-2 border-[#050608] shadow-[0_0_12px_#10b981]" />
        </div>
      </div>
    </div>
  )
}
