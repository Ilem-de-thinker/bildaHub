import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'blue';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  isMagnetic?: boolean;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  to,
  href,
  isMagnetic = false,
  children,
  className = '',
  icon,
  ...props
}) => {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const sizeClasses = {
    sm: 'px-3.5 py-1.5 text-xs font-semibold gap-1.5',
    md: 'px-5 py-2.5 text-sm font-semibold gap-2',
    lg: 'px-7 py-3.5 text-base font-bold gap-2.5'
  }[size];

  const variantClasses = {
    // Primary Yellow (#ffcc00), dark navy text, yellow glow
    primary:
      'bg-[#ffcc00] text-[#010e52] hover:bg-[#e6b800] active:scale-95 shadow-sm hover:shadow-[0_0_20px_rgba(255,204,0,0.4)] border border-transparent',
    // Secondary White Outline, white text, subtle hover fill
    secondary:
      'border border-white/30 text-white hover:border-white hover:bg-white/10 active:scale-95',
    // Blue accent button
    blue:
      'bg-[#0025ff] text-white hover:bg-[#001ecc] active:scale-95 shadow-sm hover:shadow-[0_0_20px_rgba(0,37,255,0.4)] border border-transparent',
    // Ghost
    ghost:
      'text-white/80 hover:text-white hover:bg-white/5 active:scale-95 border border-transparent'
  }[variant];

  // Magnetic hover effect on desktop
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!isMagnetic || !buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * 0.25;
    const deltaY = (e.clientY - centerY) * 0.25;
    setOffset({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    if (isMagnetic) {
      setOffset({ x: 0, y: 0 });
    }
  };

  const style = isMagnetic
    ? {
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        transition: offset.x === 0 && offset.y === 0 ? 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)' : 'none'
      }
    : undefined;

  const baseClasses = `inline-flex items-center justify-center rounded-lg font-sans transition-all duration-200 cursor-pointer select-none whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffcc00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#010e52] ${sizeClasses} ${variantClasses} ${className}`;

  if (to) {
    return (
      <Link
        to={to}
        ref={buttonRef as any}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={style}
        className={baseClasses}
      >
        <span>{children}</span>
        {icon && <span className="shrink-0">{icon}</span>}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        ref={buttonRef as any}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={style}
        className={baseClasses}
      >
        <span>{children}</span>
        {icon && <span className="shrink-0">{icon}</span>}
      </a>
    );
  }

  return (
    <button
      ref={buttonRef as any}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={baseClasses}
      {...props}
    >
      <span>{children}</span>
      {icon && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
