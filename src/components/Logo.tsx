import React from 'react';
import { Link } from 'react-router-dom';
import markOnly from '../assets/images/BILDA LOGO BLUE.png';
import fullLockup from '../assets/images/BILDAHUB FULL LOGO.png';

interface LogoProps {
  type?: 'logo' | 'logoText';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  className?: string;
}

// Display sizes per logo-size standards: horizontal lockup 24/32/48px tall,
// mark-only 24/32/48px. PNGs are 2x exports (640x137, 323x348) so they downscale clean.
const sizeClasses = {
  sm: { mark: 'w-[22px] h-6', lockup: 'w-[112px] h-6', sub: 'text-[9px]' },
  md: { mark: 'w-[30px] h-8', lockup: 'w-[150px] h-8', sub: 'text-[10px]' },
  lg: { mark: 'w-[45px] h-12', lockup: 'w-[224px] h-12', sub: 'text-xs' }
};

export const Logo: React.FC<LogoProps> = ({
  type = 'logoText',
  size = 'md',
  showTagline = false,
  className = ''
}) => {
  const sizes = sizeClasses[size];
  const isLockup = type === 'logoText';
  const src = isLockup ? fullLockup : markOnly;
  const dims = isLockup ? sizes.lockup : sizes.mark;

  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffcc00] rounded-lg ${className}`}
      aria-label="BILDAHUB Homepage"
    >
      <img
        src={src}
        alt="BILDAHUB"
        width={isLockup ? 640 : 323}
        height={isLockup ? 137 : 348}
        className={`${dims} shrink-0 object-contain object-left select-none transition-transform duration-300 group-hover:scale-105`}
      />

      {showTagline && (
        <span className={`text-[#8ea4ff] font-medium tracking-wider uppercase leading-none ${sizes.sub}`}>
          Learn · Build · Innovate
        </span>
      )}
    </Link>
  );
};
