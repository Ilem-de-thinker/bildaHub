import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home as HomeIcon } from 'lucide-react';
import { FluidCanvas } from '../components/FluidCanvas';
import { Button } from '../components/Button';

export const NotFound: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#010e52] px-4 text-center overflow-hidden">
      <FluidCanvas className="z-0 opacity-80" intensity={0.9} />

      <div className="relative z-10 max-w-lg mx-auto flex flex-col items-center">
        <span className="font-display text-8xl sm:text-9xl font-black text-[#ffcc00] tracking-tight leading-none drop-shadow-[0_0_30px_rgba(255,204,0,0.4)]">
          404
        </span>

        <h1 className="text-2xl sm:text-4xl font-display font-black text-white mt-4 leading-snug">
          Lost? Even builders take wrong turns.
        </h1>

        <p className="mt-4 text-sm sm:text-base text-slate-200 leading-relaxed">
          The page or blueprint you are searching for does not exist, was moved, or has been refactored into something even better.
        </p>

        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Button
            to="/"
            variant="primary"
            size="lg"
            icon={<HomeIcon className="w-4 h-4" />}
          >
            Back to Homepage
          </Button>

          <Button
            to="/community"
            variant="secondary"
            size="lg"
          >
            Join the Community
          </Button>
        </div>
      </div>
    </div>
  );
};
