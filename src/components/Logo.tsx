import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'light' | 'dark' | 'yellow';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'light',
  size = 'md',
  showTagline = false,
  className = ''
}) => {
  // Geometric Mark: Stylized "B" fused with upward arrow / hexagon tech motif
  // #010e52 (navy), #0025ff (electric), #ffcc00 (yellow), #ffffff (white)
  const isDarkBg = variant === 'light'; // Light text for dark navy background
  const textColor = isDarkBg ? 'text-white' : variant === 'yellow' ? 'text-[#ffcc00]' : 'text-[#010e52]';
  const hubColor = '#ffcc00';

  const sizeClasses = {
    sm: { mark: 'w-7 h-7', text: 'text-lg', sub: 'text-[9px]' },
    md: { mark: 'w-9 h-9', text: 'text-xl', sub: 'text-[10px]' },
    lg: { mark: 'w-12 h-12', text: 'text-2xl md:text-3xl', sub: 'text-xs' }
  }[size];

  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffcc00] rounded-lg ${className}`}
      aria-label="BILDAHUB Homepage"
    >
      {/* Geometric Mark Inline SVG: Stylized B composed of modern sharp and curved geometry */}
      <svg
        className={`${sizeClasses.mark} transition-transform duration-300 group-hover:scale-105 shrink-0`}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Hexagonal container / Foundation */}
        <rect
          x="3"
          y="3"
          width="34"
          height="34"
          rx="8"
          fill={variant === 'dark' ? '#010e52' : '#04146a'}
          stroke="#0025ff"
          strokeWidth="1.5"
        />
        
        {/* Stylized 'B' Stem & Upward Arrow Momentum */}
        {/* Left vertical anchor stem */}
        <rect x="10" y="9" width="4.5" height="22" rx="2" fill="#ffffff" />
        
        {/* Top semi-loop */}
        <path
          d="M14.5 9H23C26.3137 9 29 11.4624 29 14.5C29 17.5376 26.3137 20 23 20H14.5V9Z"
          fill="#0025ff"
        />
        
        {/* Bottom aggressive forward-thrust loop */}
        <path
          d="M14.5 19H25C28.3137 19 31 21.4624 31 24.5C31 27.5376 28.3137 31 25 31H14.5V19Z"
          fill="#ffcc00"
        />
        
        {/* Inner negative space precision dots */}
        <circle cx="21" cy="14.5" r="1.5" fill="#ffffff" />
        <circle cx="22.5" cy="25" r="1.5" fill="#010e52" />
        
        {/* Subtle accent chevron */}
        <path
          d="M11 7L13 5L15 7"
          stroke="#ffcc00"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* BILDAHUB Wordmark */}
      <div className="flex flex-col leading-none">
        <span className={`font-display font-bold tracking-tight ${sizeClasses.text} ${textColor}`}>
          BILDA<span className="text-[#ffcc00]">HUB</span>
        </span>
        {showTagline && (
          <span className={`text-[#8ea4ff] font-medium tracking-wider uppercase mt-0.5 ${sizeClasses.sub}`}>
            Learn · Build · Innovate
          </span>
        )}
      </div>
    </Link>
  );
};
