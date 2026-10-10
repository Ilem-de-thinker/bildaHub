import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FluidCanvas } from './FluidCanvas';

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

  // If on Home page, the Hero has its own AnimatedBuilderHero with dedicated fluid simulation
  if (isHomePage) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* 1. Interactive Mouse-following Ambient Fluid Canvas */}
      <FluidCanvas mode="ambient" intensity={0.4} interactive={true} className="opacity-40" />

      {/* 2. Soft Cursor Radial Beam Follower (Electric Blue & Sun Yellow) */}
      <div
        className="fixed w-[600px] h-[600px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ease-out will-change-transform opacity-15"
        style={{
          transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0) translate(-50%, -50%)`,
          background: 'radial-gradient(circle, rgba(0, 37, 255, 0.4) 0%, rgba(255, 204, 0, 0.2) 40%, transparent 70%)'
        }}
      />
    </div>
  );
};
