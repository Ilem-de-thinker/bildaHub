import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import wordmarkWhite from '../assets/images/bildahub TEXT WHITE.png';

const COUNT_DURATION = 1.2;
const SPLIT_DURATION = 0.8;
const MAX_LOAD_WAIT = 2500;

const waitForWindowLoad = (maxMs: number) =>
  new Promise<void>((resolve) => {
    if (document.readyState === 'complete') {
      resolve();
      return;
    }
    const done = () => {
      window.clearTimeout(timer);
      window.removeEventListener('load', done);
      resolve();
    };
    const timer = window.setTimeout(done, maxMs);
    window.addEventListener('load', done);
  });

interface PreloaderProps {
  onReady: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onReady }) => {
  const topPanelRef = useRef<HTMLDivElement | null>(null);
  const bottomPanelRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const countRef = useRef<HTMLSpanElement | null>(null);
  const barRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    let cancelled = false;
    const tweens: gsap.core.Animation[] = [];
    const reveal = () => {
      if (cancelled) return;
      document.body.style.overflow = previousOverflow;
      onReady();
    };

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      reveal();
      return;
    }

    const counter = { value: 1 };
    const countTween = gsap.to(counter, {
      value: 100,
      duration: COUNT_DURATION,
      ease: 'power1.out',
      onUpdate: () => {
        if (countRef.current) {
          countRef.current.textContent = String(Math.round(counter.value));
        }
        if (barRef.current) {
          gsap.set(barRef.current, { scaleX: counter.value / 100 });
        }
      },
      onComplete: () => {
        // Hold at 100 until assets are actually loaded (bounded), then split open.
        waitForWindowLoad(MAX_LOAD_WAIT).then(() => {
          if (cancelled) return;
          const tl = gsap.timeline({ onComplete: reveal });
          tl.to(contentRef.current, { opacity: 0, y: -12, duration: 0.3, ease: 'power2.out' })
            .to(topPanelRef.current, { yPercent: -100, duration: SPLIT_DURATION, ease: 'power4.inOut' }, '-=0.15')
            .to(bottomPanelRef.current, { yPercent: 100, duration: SPLIT_DURATION, ease: 'power4.inOut' }, '<');
          tweens.push(tl);
        });
      }
    });
    tweens.push(countTween);

    return () => {
      cancelled = true;
      tweens.forEach((tween) => tween.kill());
      document.body.style.overflow = previousOverflow;
    };
  }, [onReady]);

  return (
    <div
      className="fixed inset-0 z-[10000] overflow-hidden bg-[#010e52]"
      role="status"
      aria-label="Loading BILDAHUB"
    >
      {/* Split halves */}
      <div
        ref={topPanelRef}
        className="absolute inset-x-0 top-0 h-[calc(50%+1px)] bg-[#010e52] will-change-transform"
        aria-hidden="true"
      />
      <div
        ref={bottomPanelRef}
        className="absolute inset-x-0 bottom-0 h-[calc(50%+1px)] bg-[#010e52] will-change-transform"
        aria-hidden="true"
      />

      {/* Loading content */}
      <div ref={contentRef} className="relative z-10 flex h-full flex-col items-center justify-center gap-7 px-6">
        <img
          src={wordmarkWhite}
          alt="BILDAHUB"
          width={490}
          height={89}
          className="w-48 sm:w-56 h-auto object-contain select-none"
        />

        <div className="font-display text-6xl sm:text-8xl font-black text-white tabular-nums leading-none">
          <span ref={countRef}>1</span>
        </div>

        <div className="h-px w-48 sm:w-64 overflow-hidden bg-white/15">
          <div
            ref={barRef}
            className="h-full w-full origin-left scale-x-0 bg-[#ffcc00]"
            aria-hidden="true"
          />
        </div>

        <p className="text-[11px] uppercase tracking-[0.35em] text-[#8ea4ff] font-semibold">
          Learn · Build · Innovate
        </p>
      </div>
    </div>
  );
};
