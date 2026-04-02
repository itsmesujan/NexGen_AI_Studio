interface LogoIconProps {
  size?: number;
  className?: string;
}

export default function LogoIcon({ size = 36, className = "" }: LogoIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="logoGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
        <linearGradient id="logoGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
        <filter id="logoGlow">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Hexagon background */}
      <path
        d="M20 2L35.5885 11V29L20 38L4.41154 29V11L20 2Z"
        fill="url(#logoGrad1)"
        opacity="0.15"
      />
      <path
        d="M20 2L35.5885 11V29L20 38L4.41154 29V11L20 2Z"
        stroke="url(#logoGrad1)"
        strokeWidth="1.2"
        fill="none"
      />

      {/* Neural network nodes */}
      <circle cx="14" cy="14" r="2.2" fill="url(#logoGrad1)" filter="url(#logoGlow)" />
      <circle cx="26" cy="14" r="2.2" fill="url(#logoGrad2)" filter="url(#logoGlow)" />
      <circle cx="20" cy="23" r="2.2" fill="url(#logoGrad2)" filter="url(#logoGlow)" />
      <circle cx="10" cy="23" r="1.6" fill="#6366f1" opacity="0.6" />
      <circle cx="30" cy="23" r="1.6" fill="#06b6d4" opacity="0.6" />
      <circle cx="20" cy="10" r="1.6" fill="#8b5cf6" opacity="0.6" />

      {/* Connection lines */}
      <line x1="14" y1="14" x2="26" y2="14" stroke="url(#logoGrad1)" strokeWidth="1" opacity="0.5" />
      <line x1="14" y1="14" x2="20" y2="23" stroke="url(#logoGrad1)" strokeWidth="1" opacity="0.5" />
      <line x1="26" y1="14" x2="20" y2="23" stroke="url(#logoGrad2)" strokeWidth="1" opacity="0.5" />
      <line x1="10" y1="23" x2="20" y2="23" stroke="#6366f1" strokeWidth="0.8" opacity="0.35" />
      <line x1="20" y1="23" x2="30" y2="23" stroke="#06b6d4" strokeWidth="0.8" opacity="0.35" />
      <line x1="14" y1="14" x2="10" y2="23" stroke="#6366f1" strokeWidth="0.8" opacity="0.35" />
      <line x1="26" y1="14" x2="30" y2="23" stroke="#06b6d4" strokeWidth="0.8" opacity="0.35" />
      <line x1="20" y1="10" x2="14" y2="14" stroke="#8b5cf6" strokeWidth="0.8" opacity="0.35" />
      <line x1="20" y1="10" x2="26" y2="14" stroke="#8b5cf6" strokeWidth="0.8" opacity="0.35" />
    </svg>
  );
}
