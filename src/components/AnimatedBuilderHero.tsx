import React from 'react';
import { FluidCanvas } from './FluidCanvas';

interface AnimatedBuilderHeroProps {
  className?: string;
}

export const AnimatedBuilderHero: React.FC<AnimatedBuilderHeroProps> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden select-none pointer-events-none ${className}`}>
      {/* 1. Base Layer: High-Fidelity African Tech Builders Scene with Animated Ken-Burns Breathing Loop */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/src/assets/images/hero_african_builders_1791494878912.jpg"
          alt="Young African Tech Builders in Lagos Hub"
          className="w-full h-full object-cover object-center scale-105 animate-[kenburns_24s_ease-in-out_infinite_alternate] filter brightness-[0.78] contrast-[1.12]"
        />
      </div>

      {/* 2. Color Gradient Grading Layer: Infuses #010e52 Navy, #0025ff Electric Blue, and #ffcc00 Yellow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#010e52]/95 via-[#010e52]/70 to-[#010e52]/85 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#010e52] via-transparent to-[#010e52]/70" />

      {/* 3. Animated Circuit & Ambient Glow Waves */}
      <div
        className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 75% 35%, rgba(0, 37, 255, 0.45) 0%, transparent 60%), radial-gradient(circle at 45% 65%, rgba(255, 204, 0, 0.25) 0%, transparent 50%)'
        }}
      />

      {/* 5. Real-time Fluid Simulation Overlay: User Mouse Drag & Swirl */}
      <div className="absolute inset-0 opacity-75 mix-blend-screen">
        <FluidCanvas mode="hero" intensity={1.15} interactive={true} />
      </div>
    </div>
  );
};
