'use client'

interface LogoProps {
  className?: string
  variant?: 'dark' | 'light'
  showWordmark?: boolean
}

export default function Logo({
  className = '',
  variant = 'dark',
  showWordmark = true,
}: LogoProps) {
  const board = variant === 'dark' ? '#2C1810' : '#F5EDD8'
  const grain = variant === 'dark' ? '#C8860A' : '#8B5E07'
  const pocket = variant === 'dark' ? '#F5EDD8' : '#2C1810'
  const text = variant === 'dark' ? '#2C1810' : '#F5EDD8'
  const peak = variant === 'dark' ? '#3D5A3E' : '#8FAE90'

  return (
    <svg
      viewBox="0 0 220 110"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Kaldfjornia logo"
      role="img"
    >
      {/* Mountain / fjord peak above the board */}
      <polyline
        points="60,28 90,8 110,18 130,4 160,28"
        fill="none"
        stroke={peak}
        strokeWidth="2.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* Board body */}
      <rect x="10" y="28" width="200" height="58" rx="5" fill={board} />

      {/* Wood grain lines */}
      <line x1="10" y1="38" x2="210" y2="36" stroke={grain} strokeOpacity="0.25" strokeWidth="1" />
      <line x1="10" y1="44" x2="210" y2="43" stroke={grain} strokeOpacity="0.15" strokeWidth="0.5" />
      <line x1="10" y1="52" x2="210" y2="51" stroke={grain} strokeOpacity="0.30" strokeWidth="1.5" />
      <line x1="10" y1="59" x2="210" y2="60" stroke={grain} strokeOpacity="0.12" strokeWidth="0.5" />
      <line x1="10" y1="65" x2="210" y2="64" stroke={grain} strokeOpacity="0.20" strokeWidth="1" />
      <line x1="10" y1="72" x2="210" y2="73" stroke={grain} strokeOpacity="0.10" strokeWidth="0.5" />

      {/* Left mounting hole */}
      <circle cx="26" cy="43" r="4" fill={pocket} fillOpacity="0.5" />

      {/* Right mounting hole */}
      <circle cx="194" cy="43" r="4" fill={pocket} fillOpacity="0.5" />

      {/* Finger pockets — inset from bottom of board */}
      {/* Left pocket: 3-finger */}
      <rect x="30" y="64" width="40" height="18" rx="3" fill={pocket} fillOpacity="0.9" />
      {/* Center pocket: 2-finger */}
      <rect x="90" y="66" width="28" height="16" rx="3" fill={pocket} fillOpacity="0.9" />
      {/* Right pocket: 4-finger */}
      <rect x="138" y="62" width="52" height="20" rx="3" fill={pocket} fillOpacity="0.9" />

      {/* Pocket depth shadow lines */}
      <line x1="32" y1="67" x2="68" y2="67" stroke={board} strokeOpacity="0.4" strokeWidth="1.5" />
      <line x1="92" y1="69" x2="116" y2="69" stroke={board} strokeOpacity="0.4" strokeWidth="1.5" />
      <line x1="140" y1="65" x2="188" y2="65" stroke={board} strokeOpacity="0.4" strokeWidth="1.5" />

      {/* Wordmark */}
      {showWordmark && (
        <text
          x="110"
          y="104"
          textAnchor="middle"
          fontSize="11"
          fontFamily="Georgia, serif"
          letterSpacing="5"
          fill={text}
          fontWeight="400"
        >
          KALDFJORNIA
        </text>
      )}
    </svg>
  )
}
