import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const InteractivePageBackground: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [mousePos, setMousePos] = useState({ x: -200, y: -200 });

  useEffect(() => {
    if (isHomePage) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isHomePage]);

  // If on Home page, the Hero has its own AnimatedBuilderHero with dedicated ambient glow
  if (isHomePage) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* 1. Ambient Electric-Blue Glow Field */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(0,37,255,0.16)_0%,transparent_55%),radial-gradient(circle_at_80%_75%,rgba(0,37,255,0.1)_0%,transparent_50%)]" />

      {/* 2. Soft Cursor Radial Beam Follower (Electric Blue) */}
      <div
        className="fixed w-[600px] h-[600px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ease-out will-change-transform opacity-15"
        style={{
          transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0) translate(-50%, -50%)`,
          background: 'radial-gradient(circle, rgba(0, 37, 255, 0.35) 0%, rgba(56, 88, 255, 0.12) 45%, transparent 70%)'
        }}
      />
    </div>
  );
};
